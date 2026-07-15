import { defineType, defineField } from "sanity";

export default defineType({
  name: "teaching",
  title: "Teaching Page",
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
      title: "Teaching Overview",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "philosophy",
      title: "Teaching Philosophy",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "courses",
      title: "Courses",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "studentResources",
      title: "Student Resources",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "experientialLearning",
      title: "Experiential Learning",
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
