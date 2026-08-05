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

    // OVERVIEW
    defineField({
      name: "teachingOverviewImages",
      title: "Teaching Overview Images",
      type: "array",
      of: [{ type: "image" }],
      options: { layout: "grid" },
    }),
    defineField({
      name: "overview",
      title: "Teaching Overview",
      type: "array",
      of: [{ type: "block" }],
    }),

    // PHILOSOPHY
    defineField({
      name: "philosophyImages",
      title: "Teaching Philosophy Images",
      type: "array",
      of: [{ type: "image" }],
      options: { layout: "grid" },
    }),
    defineField({
      name: "philosophy",
      title: "Teaching Philosophy",
      type: "array",
      of: [{ type: "block" }],
    }),

    // COURSES
    defineField({
      name: "coursesImages",
      title: "Courses Images",
      type: "array",
      of: [{ type: "image" }],
      options: { layout: "grid" },
    }),
    defineField({
      name: "courses",
      title: "Courses",
      type: "array",
      of: [{ type: "block" }],
    }),

    // STUDENT RESOURCES
    defineField({
      name: "studentResourcesImages",
      title: "Student Resources Images",
      type: "array",
      of: [{ type: "image" }],
      options: { layout: "grid" },
    }),
    defineField({
      name: "studentResources",
      title: "Student Resources",
      type: "array",
      of: [{ type: "block" }],
    }),

    // EXPERIENTIAL LEARNING
    defineField({
      name: "experientialLearningImages",
      title: "Experiential Learning Images",
      type: "array",
      of: [{ type: "image" }],
      options: { layout: "grid" },
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
