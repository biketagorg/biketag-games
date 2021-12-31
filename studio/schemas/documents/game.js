import { i18n } from "../documentTranslation";

export default {
    title: "Game",
    name: "game",
    type: "document",
    // The next property enables full-document translation for this document
    // via the sanity-intl plugin. You can of course modify this object should you
    // need to on a document-to-document bassis.
    i18n,
    fields: [{
            title: "Game Name",
            name: "name",
            type: "string",
        },
        {
            title: "Game",
            name: "slug",
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
          title: "MainHash",
          name: "mainhash",
          type: "string",
        },
        {
          title: "QueueHash",
          name: "queuehash",
          type: "string",
        },
        {
          title: "SubReddit",
          name: "subreddit",
          type: "string",
        },
        {
            title: "Boundary",
            name: "boundary",
            type: "geopoint",
        },
        {
            type: "array",
            name: "tags",
            // We probably don't want localized versions of this reference array, so
            // we opt out of localizing this specific field
            localize: false,
            weak: true,
            of: [{
                type: "reference",
                to: [{ type: "tag" }],
            }, ],
        },
        {
            type: "array",
            name: "ambassadors",
            // We probably don't want localized versions of this reference array, so
            // we opt out of localizing this specific field
            localize: false,
            weak: true,
            of: [{
                type: "reference",
                to: [{ type: "ambassador" }],
            }, ],
        },
        {
            type: "array",
            name: "settings",
            // We probably don't want localized versions of this reference array, so
            // we opt out of localizing this specific field
            localize: false,
            weak: true,
            of: [{
                type: "reference",
                to: [{ type: "setting" }],
            }, ],
        },
        {
            title: "Logo",
            name: "logo",
            type: "image",
        },
    ],
    // preview: {
    //   select: {
    //     title: "name",
    //     media: "logo",
    //   },
    // },
};