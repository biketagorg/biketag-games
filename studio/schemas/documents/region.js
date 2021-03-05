export default {
  title: 'Region',
  name: 'region',
  type: 'document',
  fields: [
    {
      title: "Region",
      name: "region",
      type: "slug",
      hidden: true,
      options: {
        source: 'name',
      },
    },
    {
      title: 'Region Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Region Description',
      name: 'description',
      type: 'string',
    },
  ],
}
