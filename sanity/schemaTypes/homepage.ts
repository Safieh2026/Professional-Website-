import { defineType, defineField } from "sanity";

export default defineType({
    name: "homepage",
    title: "Homepage",
    type: "document",
    fields: [
        defineField({
            name: "doctitle",
            title: "Document Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "subtitle",
            title: "Department & Position",
            type: "string",
        }),
        defineField({
            name: "intro",
            title: "Intro Content",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: "image",
            title: "Profile Image",
            type: "image",
            options: { hotspot: true },
        }),
    ],
    preview: {
        select: {
            title: "doctitle",
        },
    },
});
