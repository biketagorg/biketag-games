// setAndPublishAction.js

import {useState, useEffect} from 'react'
import {useDocumentOperation} from '@sanity/react-hooks'
import sanityClient from '@sanity/client'

const sanityClientConfig = {
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_API_DATASET,
  token: process.env.SANITY_STUDIO_API_TOKEN,
  useCdn: true,
}

export default function SetSlugAndPublishAction(props) {
  const {patch, publish} = useDocumentOperation(props.id, props.type)
  const [isPublishing, setIsPublishing] = useState(false)
  
  useEffect(() => {
    // if the isPublishing state was set to true and the draft has changed
    // to become `null` the document has been published
    if (isPublishing && !props.draft) {
      setIsPublishing(false)
    }
  }, [props.draft])
  
  return {
    disabled: publish.disabled,
    label: isPublishing ? 'Publishing…' : 'Publish',
    onHandle: async () => {
      // This will update the button text 
      setIsPublishing(true)

      const client = sanityClient(sanityClientConfig)
      let slug = '', name = props.draft.name
      
      /// TODO: load a slugify function from the document for this task
      switch (props.type) {
        case 'tag':
          let gameName = props.draft.game._ref
          const query = '*[_type == "game" && _id == $gameID][0] {name}'
          const params = {gameID: gameName}

          await client.fetch(query, params).then(game => {
            gameName = !!game ? game.name : gameName
          })

          name = slug = `${gameName}-tag-${props.draft.tagnumber}`
          break;
        default:
          break;
      }

      // Set the slug
      patch.execute([{set: { slug: { _type: 'slug', current: slug.toLowerCase() }, name: name.toLowerCase() }}])
      
      // Perform the publish
      publish.execute()
      
      // Signal that the action is completed
      props.onComplete() 
    }
  }
}