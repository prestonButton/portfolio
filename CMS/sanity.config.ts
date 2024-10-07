import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";
import { structure } from "./structure";

export default defineConfig({
	name: "default",
	title: "DannyPortfolio",

	projectId: "jtvkmp2f",
	dataset: "production",

	plugins: [
		structureTool({
			structure,
		}),
		visionTool(),
	],

	schema: {
		types: schemaTypes,
	},
});
