import type { StructureResolver } from "sanity/structure";
export const structure: StructureResolver = (S) =>
	S.list()
		.title("Content")
		.items([
			S.listItem()
				.title("Stories")
				.schemaType("story")
				.child(S.documentTypeList("story").title("Stories")),
			...S.documentTypeListItems().filter((listItem) => {
				const id = listItem.getId();
				return id !== undefined && !["picture", "story"].includes(id);
			}),
		]);
