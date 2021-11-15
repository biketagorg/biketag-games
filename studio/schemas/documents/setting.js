export default {
  title: 'Setting',
  name: 'setting',
  type: 'document',
  fields: [
    {
      title: "Setting",
      name: "slug",
      type: "slug",
      hidden: true,
      options: {
        source: 'name',
      },
    },
    {
      title: 'Setting Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Setting Description',
      name: 'description',
      type: 'string',
    },
    {
      title: 'Setting Key',
      name: 'key',
      type: 'string',
    },
    {
      title: 'Setting Value',
      name: 'value',
      type: 'string',
    },
  ],
}
