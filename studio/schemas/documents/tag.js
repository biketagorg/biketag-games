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
      validation: Rule => Rule.required().custom((field, context) => { console.log({s: context.document.slug.current, sl: context.document.slug.current.length, field, d: context.document}) ; return (field !== undefined && context.document.slug && context.document.slug.current.length && context.document.tagnumber !== field) ? "This field cannot be changed after it has been set the first time." : true }),
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
      to: [{type: 'game'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Mystery Player',
      name: 'mysteryPlayer',
      type: 'reference',
      to: [{type: 'player'}],
    },
    {
      title: 'Found Player',
      name: 'foundPlayer',
      type: 'reference',
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
      title: 'Mention URL',
      name: 'mentionUrl',
      type: 'string',
    },
    {
      title: 'Mystery Time',
      name: 'mysteryTime',
      type: 'datetime',
    },
    {
      title: 'Found Time',
      name: 'foundTime',
      type: 'datetime',
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
  ],
}
