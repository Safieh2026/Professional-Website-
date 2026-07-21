import { defineType, defineField } from "sanity";

export default defineType({
  name: "community",
  title: "Community Partnership Page",
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
      title: "Community Partnership Overview",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "revitalization",
      title: "Language Documentation & Revitalization",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "documentary",
      title: "Documentary Project",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "events",
      title: "Community Events",
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
