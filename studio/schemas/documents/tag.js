import { i18n } from '../documentTranslation'

export default {
  title: 'Tag',
  name: 'tag',
  type: 'document',
  // The next property enables full-document translation for this document
  // via the sanity-intl plugin. You can of course modify this object should you
  // need to on a document-to-document bassis.
  i18n,
  fields: [
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      readOnly: true,
      hidden: true,
      options: {
        source: 'tagnumber',
        isUnique: input => true,
        slugify: input => input.toString().toLowerCase()
      },
    },
    {
      title: 'Tag',
      name: 'name',
      type: 'string',
      readOnly: true,
      options: {
        source: 'slug',
      },
    },
    {
      title: 'TagNumber',
      name: 'tagnumber',
      type: 'number',
      validation: Rule => Rule.required()
    },
    {
      title: 'Mystery Image',
      name: 'mysteryImage',
      type: 'image',
    },
    {
      title: 'Mystery Image URL',
      name: 'mysteryImageUrl',
      type: 'string',
    },
    {
      title: 'Game',
      name: 'game',
      type: 'reference',
      weak: true,
      to: [{type: 'game'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Player',
      name: 'player',
      type: 'reference',
      weak: true,
      to: [{type: 'player'}],
    },
    {
      title: 'Hint',
      name: 'hint',
      type: 'string',
    },
    {
      title: 'Discussion URL',
      name: 'discussionUrl',
      type: 'string',
    },
    {
      title: 'Found Location',
      name: 'foundLocation',
      type: 'string',
    },
    {
      title: 'GPS',
      name: 'gps',
      type: 'geopoint',
    },
    {
      title: 'Found Image',
      name: 'foundImage',
      type: 'image',
    },
    {
      title: 'Found Image URL',
      name: 'foundImageUrl',
      type: 'string',
    },
  ],
}
