import { defineType, defineField } from "sanity";

export default defineType({
    name: "about",
    title: "About Page",
    type: "document",
    fields: [
        defineField({
            name: "doctitle",
            title: "Document Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "images",
            title: "Images",
            type: "array",
            of: [{ type: "image" }],
            options: { layout: "grid" },
        }),


        defineField({
            name: "bio",
            title: "Biography",
            type: "array",
            of: [{ type: "block" }],
        }),

        defineField({
            name: "email",
            title: "Email",
            type: "string",
        }),

        defineField({
            name: "office",
            title: "Office Location",
            type: "string",
        }),

        defineField({
            name: "researchInterests",
            title: "Research Interests",
            type: "array",
            of: [{ type: "string" }],
        }),
    ],

    preview: {
        select: {
            title: "doctitle",
            subtitle: "name",
            media: "image",
        },
    },
});
