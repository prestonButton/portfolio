//This is the image data type

import { defineField, defineType } from "sanity";

export const pictureType = defineType({
	name: "picture",
	title: "Picture",
	type: "document",
	fields: [
		defineField({
			name: "picture",
			title: "Picture",
			type: "image",

			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			description: "The title of the image, not required",
		}),
		defineField({
			name: "caption",
			title: "Caption",
			type: "string",

			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "alt",
			title: "Alt Text",
			description: "Alt text for the image. Used for accesibility",
			type: "string",
		}),
		defineField({
			name: "isCover",
			title: "Is Cover",
			description:
				"If this is the cover image for the story, toggle this to on",
			type: "boolean",
			initialValue: false,
		}),
	],
});
