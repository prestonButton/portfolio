import Cover from "@/public/portfolio_photos/cover.jpg";
import Photo1 from "@/public/portfolio_photos/1.jpg";
import Photo2 from "@/public/portfolio_photos/2.jpg";
import Photo3 from "@/public/portfolio_photos/3.jpg";
import Photo4 from "@/public/portfolio_photos/4.jpg";
import Photo5 from "@/public/portfolio_photos/5.jpg";
import Photo6 from "@/public/portfolio_photos/6.jpg";
import Photo7 from "@/public/portfolio_photos/7.jpg";
import Photo8 from "@/public/portfolio_photos/8.jpg";
import Photo9 from "@/public/portfolio_photos/9.jpg";
import Photo10 from "@/public/portfolio_photos/10.jpg";
import Photo11 from "@/public/portfolio_photos/11.jpg";
import Photo12 from "@/public/portfolio_photos/12.jpg";
import Photo13 from "@/public/portfolio_photos/13.jpg";
import Photo14 from "@/public/portfolio_photos/14.jpg";
import Photo15 from "@/public/portfolio_photos/15.jpg";
import Photo16 from "@/public/portfolio_photos/16.jpg";
import Photo17 from "@/public/portfolio_photos/17.jpg";
import Photo18 from "@/public/portfolio_photos/18.jpg";

import type { Story } from "@/types/story";

const images = [
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  Photo5,
  Photo6,
  Photo7,
  Photo8,
  Photo9,
  Photo10,
  Photo11,
  Photo12,
  Photo13,
  Photo14,
  Photo15,
  Photo16,
  Photo17,
  Photo18,
];

export async function GET({ req }: { req: Request }) {
  const story: Story = {
    slug: "together_apart",
    title: "Together (A)part",
    subTitle: "The Bruderhof Community",
    coverImage: Cover,
    content:
      "The Bruderhof is an intentional Christian community of more than 3,000 people living in twenty-three settlements on four continents. Its members are united by a commitment to following Jesus together, and living out his teachings in community. The Bruderhof is a living witness to the transformative power of the gospel, and its members seek to be a visible embodiment of God’s love in the world. The Bruderhof is an intentional Christian community of more than 3,000 people living in twenty-three settlements on four continents. Its members are united by a commitment to following Jesus together, and living out his teachings in community. The Bruderhof is a living witness to the transformative power of the gospel, and its members seek to be a visible embodiment of God’s love in the world.",
    cols: 8,
    images: images,
  };

  return new Response(JSON.stringify(story), {
    headers: { "content-type": "application/json" },
  });
}
