import type { StaticImageData } from "next/image";

type BasicStory = {
	slug: string;
	title: string;
	subTitle: string;
	coverImage: StaticImageData;
	content: string;
};

export type { BasicStory };

type CompleteStory = BasicStory & {
	images: StaticImageData[];
};

export type { CompleteStory };
