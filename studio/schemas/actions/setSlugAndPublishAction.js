// setAndPublishAction.js

import { useState, useEffect } from "react";
import { useDocumentOperation } from "@sanity/react-hooks";
import sanityClient from "@sanity/client";
import { useToast } from "@sanity/ui";

const sanityClientConfig = {
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_API_DATASET,
  token: process.env.SANITY_STUDIO_API_TOKEN,
  useCdn: true,
};

export default function SetSlugAndPublishAction(props) {
  const { patch, publish } = useDocumentOperation(props.id, props.type);
  const [isPublishing, setIsPublishing] = useState(false);
  const toast = useToast();

  useEffect(() => {
    // if the isPublishing state was set to true and the draft has changed
    // to become `null` the document has been published
    if (isPublishing && !props.draft) {
      setIsPublishing(false);
    }
  }, [props.draft]);

  return {
    disabled: publish.disabled,
    label: isPublishing ? "Publishing…" : "Publish",
    onHandle: async () => {
      // This will update the button text
      setIsPublishing(true);

      const client = sanityClient(sanityClientConfig);
      let slug = props.draft.name || props.type,
        duplicateErrorMessage = null,
        doPublish = true,
        setNameTo = null;

      // Only set the slug once
      if (
        !(
          props.draft.slug &&
          props.draft.slug.current &&
          props.draft.slug.current.length
        )
      ) {
        switch (props.type) {
          case "tag":
            let gameName = props.draft.game._ref;
            const query = `*[_type == "game" && _id == $gameID][0] {name}`;
            const params = { gameID: gameName };

            await client.fetch(query, params).then((game) => {
              gameName = !!game ? game.name : gameName;
            });

            setNameTo = slug = `${gameName}-tag-${props.draft.tagnumber}`.toLowerCase();
            duplicateErrorMessage = `The slug [${slug}] is not unique and thus cannot be published. The combination of game + tagnumber must not already exist.`;
            break;

          case "player":
            /// Don't let the slug be lowercased, or modified in any way from the original name field value
            break;

          default:
            slug = slug.toLowerCase();
            break;
        }

        /// Ensure that the slug is unique for this document
        let existingSlug = null;
        await client
          .fetch(`*[_type == "${props.type}" && slug.current == $slug][0]`, {
            slug,
          })
          .then((foundSlug) => (existingSlug = foundSlug));

        if (existingSlug) {
          duplicateErrorMessage =
            duplicateErrorMessage ||
            `The slug [${slug}] is not unique for the document type [${props.type}], please edit the document.`;
          toast.push({ status: "error", title: duplicateErrorMessage });
          setIsPublishing(false);
          doPublish = false;
          // throw new Error(duplicateErrorMessage)
        } else {
          /// Set the name
          if (setNameTo) {
            patch.execute([{ set: { name: setNameTo } }]);
          }

          // Set the slug
          patch.execute([{ set: { slug: { _type: "slug", current: slug } } }]);
        }
      }

      if (doPublish) {
        // Perform the publish
        publish.execute();
      }

      // Signal that the action is completed
      props.onComplete();
    },
  };
}
