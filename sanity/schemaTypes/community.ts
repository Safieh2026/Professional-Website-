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

    // OVERVIEW
    defineField({
      name: "communityOverviewImages",
      title: "Community Overview Images",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "overview",
      title: "Community Partnership Overview",
      type: "array",
      of: [{ type: "block" }],
    }),

    // REVITALIZATION
    defineField({
      name: "revitalizationImages",
      title: "Language Documentation & Revitalization Images",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "revitalization",
      title: "Language Documentation & Revitalization",
      type: "array",
      of: [{ type: "block" }],
    }),

    // DOCUMENTARY
    defineField({
      name: "documentaryImages",
      title: "Documentary Project Images",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "documentary",
      title: "Documentary Project",
      type: "array",
      of: [{ type: "block" }],
    }),

    // EVENTS
    defineField({
      name: "eventsImages",
      title: "Community Events Images",
      type: "array",
      of: [{ type: "image" }],
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
