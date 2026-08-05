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

    // OVERVIEW
    defineField({
      name: "publicationsOverviewImages",
      title: "Publications Overview Images",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "overview",
      title: "Publications & Featured Work Overview",
      type: "array",
      of: [{ type: "block" }],
    }),

    // ARTICLES
    defineField({
      name: "articlesImages",
      title: "Articles Images",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "articles",
      title: "Articles",
      type: "array",
      of: [{ type: "block" }],
    }),

    // MEDIA & INTERVIEWS
    defineField({
      name: "mediaImages",
      title: "Media & Interviews Images",
      type: "array",
      of: [{ type: "image" }],
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
