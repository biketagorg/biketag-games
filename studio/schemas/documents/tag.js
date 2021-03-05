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
      title: 'Tag',
      name: 'tag',
      type: 'slug',
      // readOnly: true,
      options: {
        source: (doc, {parent}) => `${parent.game}-${parent.tagnumber}`,
        slugify: input => { console.log({input}) ; return `tag-${input}` }
      },
    },
    {
      title: 'Game',
      name: 'game',
      type: 'reference',
      weak: true,
      to: [{type: 'game'}],
    },
    {
      title: 'TagNumber',
      name: 'tagnumber',
      type: 'number',
    },
    {
      title: 'Player',
      name: 'player',
      type: 'reference',
      weak: true,
      to: [{type: 'player'}],
    },
    {
      title: 'Found Location',
      name: 'foundLocation',
      type: 'string',
    },
    {
      title: 'Hint',
      name: 'hint',
      type: 'string',
    },
    {
      title: 'FoundImage',
      name: 'foundImage',
      type: 'captionImage',
      options: {
        hotspot: true
      },
    },
    {
      title: 'MysteryImage',
      name: 'mysteryImage',
      type: 'captionImage',
      options: {
        hotspot: true
      },
    }
  ],
  preview: {
    select: {
      title: 'slug',
      media: 'mysteryImage'
    }
  }
}
