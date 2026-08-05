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

    // OVERVIEW
    defineField({
      name: "researchOverviewImages",
      title: "Research Overview Images",
      type: "array",
      of: [{ type: "image" }],
      options: { layout: "grid" },
    }),
    defineField({
      name: "overview",
      title: "Research & Scholarship Overview",
      type: "array",
      of: [{ type: "block" }],
    }),

    // RESEARCH AREAS
    defineField({
      name: "areasImages",
      title: "Research Areas Images",
      type: "array",
      of: [{ type: "image" }],
      options: { layout: "grid" },
    }),
    defineField({
      name: "areas",
      title: "Research Areas",
      type: "array",
      of: [{ type: "block" }],
    }),

    // CURRENT PROJECTS
    defineField({
      name: "projectsImages",
      title: "Current Projects Images",
      type: "array",
      of: [{ type: "image" }],
      options: { layout: "grid" },
    }),
    defineField({
      name: "projects",
      title: "Current Projects",
      type: "array",
      of: [{ type: "block" }],
    }),

    // STUDENT RESEARCHERS
    defineField({
      name: "studentsImages",
      title: "Student Researchers Images",
      type: "array",
      of: [{ type: "image" }],
      options: { layout: "grid" },
    }),
    defineField({
      name: "students",
      title: "Student Researchers",
      type: "array",
      of: [{ type: "block" }],
    }),

    // COLLABORATORS
    defineField({
      name: "collaboratorsImages",
      title: "Research Collaborators Images",
      type: "array",
      of: [{ type: "image" }],
      options: { layout: "grid" },
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
