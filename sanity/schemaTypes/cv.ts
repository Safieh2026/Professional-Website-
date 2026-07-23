import { defineType, defineField } from "sanity";

export default defineType({
  name: "cv",
  title: "CV Page",
  type: "document",
  fields: [
    defineField({
      name: "doctitle",
      title: "Document Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "content",
      title: "CV Content",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "file",
      title: "CV File (PDF)",
      type: "file",
      options: { accept: ".pdf" },
    }),
  ],

  preview: {
    select: {
      title: "doctitle",
    },
  },
});
