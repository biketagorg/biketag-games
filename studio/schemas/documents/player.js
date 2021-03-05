export default {
  title: 'Player',
  name: 'player',
  type: 'document',
  fields: [
    {
      title: 'Username',
      name: 'username',
      type: 'string',
    },{
      type: 'array',
      name: 'tags',
      weak: true,
      // We probably don't want localized versions of this reference array, so
      // we opt out of localizing this specific field
      localize: false,
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }]
        }
      ]
    }
  ],
}
