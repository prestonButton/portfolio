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
    subTitle:
      "A nuanced project on the Bruderhof Anabaptist Christian Community.",
    years: "2019 - 2020",
    coverImage: Cover,
    content:
      '2020 is the centenary year of the Bruderhof, an Anabaptist pacifist Christian community created in the turbulent wake of the First World War. /#P  In 1920 Christian theologist Eberhart Arnold and his followers moved to the remote mountain village of Sannerz, Germany, to create the first commune modelled on the early Hutterian Church and First Church of Jerusalem: Money, property and possessions would be shared and service to the wider community enshrined in their way of life. /#P Today, in 23 enigmatic communities around the world the Bruderhof still live to these founding principles: Bound to their neighbours by a spiritual commitment to “god and humankind” and yet separated in closed religious communities to best practice community of goods and wealth and their rejection of personal possessions, technologies, public education, liberalism and money. /#P TOGETHER (A)PART, is the first time a photographer has been granted access to the community to record what the they describe as "another life". The project was commissioned by GOST after it was shown at a Magnum event in Fondazione Giorgio Cini, Venice, in 2020, and will be published in the spring of 2021, designed by the celebrated photographic book designer Stuart Smith. /#P  The project was awarded a Coups de Coeur de L’ANI, at the 2019 Visa Pour L’Image and selected by a jury of industry illuminate as a finalist at the inaugural 2019 Prix Regnier Award, in Paris. Single images from the project also won a silver medal at the YICCA Contemporary Arts Exhibition, in Palermo; were selected for the KLP International Portrait Prize; and included in the inaugural Derek’s Room Exhibition at Studio 3 Gallery, at the University of Kent. /#P The project has also received extensive coverage in the press, including an 8 page photo essay in the Sunday Times Magazine; a feature gallery in the The Guardian online and in print, in July 2020; and fotoMAGAZIN will present it in the XXL annual fine art photography issue this September.',
    cols: 8,
    images: images,
  };

  return new Response(JSON.stringify(story), {
    headers: { "content-type": "application/json" },
  });
}
