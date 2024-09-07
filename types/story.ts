import type { StaticImageData } from "next/image";

type BasicStory = {
	slug: string;
	title: string;
	subTitle: string;
	coverImage: StaticImageData;
};

export type { BasicStory };

type CompleteStory = BasicStory & {
	content: string;
	images: StaticImageData[];
};

export type { CompleteStory };
