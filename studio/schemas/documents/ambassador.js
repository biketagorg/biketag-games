export default {
    title: "Ambassador",
    name: "ambassador",
    type: "document",
    fields: [{
            title: "UserID",
            name: "slug",
            type: "slug",
            readOnly: true,
            hidden: true,
            options: {
                source: "name",
            },
        },
        {
            title: "Name",
            name: "name",
            type: "string",
        },
        {
            title: "Player Profile",
            name: "player",
            type: "reference",
            weak: true,
            to: [{ type: "player" }],
        },
        {
            title: "Email Address",
            name: "email",
            type: "string",
        },
        {
            title: "Privacy",
            name: "privacy",
            type: "boolean",
        },
        {
            title: "Address Line 1",
            name: "address1",
            type: "string",
        },
        {
            title: "Address Line 2",
            name: "address2",
            type: "string",
        },
        {
            title: "City",
            name: "city",
            type: "string",
        },
        {
            title: "Country",
            name: "country",
            type: "string",
        },
        {
            title: "Zipcode",
            name: "zipcode",
            type: "string",
        },
        {
            title: "Phone Number",
            name: "phone",
            type: "string",
        },
    ],
};