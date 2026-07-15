import { defineType, defineField } from "sanity";

// Reusable rich text block
const richText = {
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Heading 2", value: "h2" },
        { title: "Heading 3", value: "h3" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "Link",
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
                validation: (Rule: { required: () => any; }) => Rule.required(),
              },
              {
                name: "openInNewTab",
                type: "boolean",
                title: "Open in new tab?",
                initialValue: true,
              },
            ],
          },
        ],
      },
    },
  ],
};

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
      ...richText,
    }),

    defineField({
      name: "philosophy",
      title: "Teaching Philosophy",
      ...richText,
    }),

    defineField({
      name: "courses",
      title: "Courses",
      ...richText,
    }),

    defineField({
      name: "studentResources",
      title: "Student Resources",
      ...richText,
    }),

    defineField({
      name: "experientialLearning",
      title: "Experiential Learning",
      ...richText,
    }),
  ],

  preview: {
    select: {
      title: "doctitle",
    },
  },
});
