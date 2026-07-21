import { defineType, defineField } from "sanity";

export default defineType({
  name: "research",
  title: "Research & Scholarship Page",
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
      title: "Research & Scholarship Overview",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "areas",
      title: "Research Areas",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "projects",
      title: "Current Projects",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "students",
      title: "Student Researchers",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "collaborators",
      title: "Research Collaborators",
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
