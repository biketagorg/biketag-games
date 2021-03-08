export default {
  title: "Player",
  name: "player",
  type: "document",
  fields: [
    {
      title: "UserID",
      name: "slug",
      type: "slug",
      readOnly: true,
      hidden: true,
      options: {
        source: "username",
        isUnique: (input) => true,
        slugify: (input) => input.toString().toLowerCase(),
      },
    },
    {
      title: "Username",
      name: "username",
      type: "string",
    },
    {
      title: "Bicon",
      name: "avatar",
      type: "captionImage",
      options: {
        hotspot: true,
      },
    },
    {
      type: "array",
      name: "tags",
      weak: true,
      // We probably don't want localized versions of this reference array, so
      // we opt out of localizing this specific field
      localize: false,
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
        },
      ],
    },
    {
      type: "array",
      name: "altNames",
      of: [
        {
          type: "string",
        },
      ],
    },
  ],
};
