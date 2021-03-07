import { i18n } from "../documentTranslation";

export default {
  title: "Game",
  name: "game",
  type: "document",
  // The next property enables full-document translation for this document
  // via the sanity-intl plugin. You can of course modify this object should you
  // need to on a document-to-document bassis.
  i18n,
  fields: [
    {
      title: "Game Name",
      name: "name",
      type: "string",
    },
    {
      title: "Game",
      name: "game",
      type: "slug",
      hidden: true,
      options: {
        source: "name",
      },
    },
    {
      title: "Region",
      name: "region",
      type: "reference",
      weak: true,
      to: [{ type: "region" }],
    },
    {
      title: "Boundary",
      name: "boundary",
      type: "string",
    },
    {
      type: "array",
      name: "admins",
      // We probably don't want localized versions of this reference array, so
      // we opt out of localizing this specific field
      localize: false,
      weak: true,
      of: [
        {
          type: "reference",
          to: [{ type: "admin" }],
        },
      ],
    },
    {
      type: "array",
      name: "tags",
      // We probably don't want localized versions of this reference array, so
      // we opt out of localizing this specific field
      localize: false,
      weak: true,
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
        },
      ],
    },
    {
      title: "Logo",
      name: "logo",
      type: "captionImage",
      options: {
        hotspot: true,
      },
    },
  ],
  // preview: {
  //   select: {
  //     title: "name",
  //     media: "logo",
  //   },
  // },
};
