export default {
  title: "Admin",
  name: "admin",
  type: "document",
  fields: [
    {
      title: "Admin",
      name: "admin",
      type: "slug",
      hidden: true,
      options: {
        source: 'username',
        slugify: input => input.toLocaleLowerCase()
      },
    },
    {
      title: "Username",
      name: "username",
      type: "string",
      validation: Rule => Rule.required().min(3).max(80),
    },
    {
      title: "Email Address",
      name: "email",
      type: "email",
      validation: (Rule) =>
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: "email", // Error message is "Does not match email-pattern"
            invert: false, // Boolean to allow any value that does NOT match pattern
          }
        ),
    },
  ],
};
