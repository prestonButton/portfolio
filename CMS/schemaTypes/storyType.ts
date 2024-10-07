import { defineField, defineType } from "sanity";

export const storyType = defineType({
	name: "story",
	title: "Story",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		}),
		defineField({
			name: "text",
			title: "Text",
			type: "array",
			of: [{ type: "block" }],
		}),
		defineField({
			name: "images",
			title: "Images",
			type: "array",
			of: [
				{
					type: "reference",
					to: [
						{
							type: "picture",
						},
					],
				},
			],
		}),
	],
});
