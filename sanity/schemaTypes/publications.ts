import { defineType, defineField } from "sanity";

export default defineType({
  name: "publications",
  title: "Publications & Featured Work Page",
  type: "document",
  fields: [
    defineField({
      name: "doctitle",
      title: "Document Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "overview",
      title: "Publications & Featured Work Overview",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "articles",
      title: "Articles",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "media",
      title: "Media & Interviews",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],

  preview: {
    select: {
      title: "doctitle",
    },
  },
});
