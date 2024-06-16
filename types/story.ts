import type { StaticImageData } from "next/image";

type Story = {
  slug: string;
  title: string;
  subTitle: string;
  coverImage: StaticImageData;
  content: string;
  cols: number;
  images: StaticImageData[];
};

export type { Story };
