import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

// Photos Imports
import Cover from "@/public/portfolio_photos/cover.jpg";
// import Photo1 from "@/public/portfolio_photos/1.jpg";
// import Photo2 from "@/public/portfolio_photos/2.jpg";
// import Photo3 from "@/public/portfolio_photos/3.jpg";
// import Photo4 from "@/public/portfolio_photos/4.jpg";
// import Photo5 from "@/public/portfolio_photos/5.jpg";
// import Photo6 from "@/public/portfolio_photos/6.jpg";
// import Photo7 from "@/public/portfolio_photos/7.jpg";
// import Photo8 from "@/public/portfolio_photos/8.jpg";
// import Photo9 from "@/public/portfolio_photos/9.jpg";
// import Photo10 from "@/public/portfolio_photos/10.jpg";
// import Photo11 from "@/public/portfolio_photos/11.jpg";
// import Photo12 from "@/public/portfolio_photos/12.jpg";
// import Photo13 from "@/public/portfolio_photos/13.jpg";
// import Photo14 from "@/public/portfolio_photos/14.jpg";
// import Photo15 from "@/public/portfolio_photos/15.jpg";
// import Photo16 from "@/public/portfolio_photos/16.jpg";
// import Photo17 from "@/public/portfolio_photos/17.jpg";
// import Photo18 from "@/public/portfolio_photos/18.jpg";
import Eden from "@/public/portfolio_photos/Eden.jpg";
import BorderKills from "@/public/portfolio_photos/border_kills.jpg";
import IndeterminateState from "@/public/portfolio_photos/indeterminate_state.jpg";
import KillingMeSoftly from "@/public/portfolio_photos/killing_me_softly.jpg";
import NarrowSea from "@/public/portfolio_photos/narrow_sea.jpg";
import SmallBoats from "@/public/portfolio_photos/small_boats.jpg";

const data = [
  {
    slug: "together-apart",
    title: "Together (A)part",
    subTitle: "The Bruderhof Community",
    coverImage: Cover,
    cols: 8,
  },
  {
    slug: "border-kills",
    title: "Border Kills",
    subTitle: "The Mediterranean Crisis",
    coverImage: BorderKills,
    cols: 4,
  },
  {
    slug: "indeterminate-state",
    title: "Indeterminate State",
    subTitle: "The Calais Jungle",
    coverImage: IndeterminateState,
    cols: 4,
  },
  {
    slug: "killing-me-softly",
    title: "Killing Me Softly",
    subTitle: "The Calais Jungle",
    coverImage: KillingMeSoftly,
    cols: 8,
  },
  {
    slug: "narrow-sea",
    title: "Narrow Sea",
    subTitle: "The Mediterranean Crisis",
    coverImage: NarrowSea,
    cols: 6,
  },
  {
    slug: "small-boats",
    title: "Small Boats",
    subTitle: "The Mediterranean Crisis",
    coverImage: SmallBoats,
    cols: 8,
  },
  {
    slug: "eden",
    title: "Eden",
    subTitle: "The Bruderhof Community",
    coverImage: Eden,
    cols: 8,
  },
];

const Page = async () => {
  return (
    <div id="container" className="flex flex-col items-center p-4 w-svw h-svh">
      <h1 className="py-4 text-2xl font-bold text-gray-700">
        Danny Burrows Photography
      </h1>
      <section
        id="photo_grid"
        className="grid w-full grid-cols-12 gap-3 mb-12 border md:grid-cols-12"
      >
        {
          // Loop through the data array and create a GridPhoto component for each item
          data.map((item, index) => (
            <GridPhoto
              key={index.toString()}
              cols={item.cols}
              title={item.title}
              subtitle={item.subTitle}
              image={item.coverImage}
              slug={item.slug}
            />
          ))
        }
      </section>
    </div>
  );
};

export default Page;

const GridPhoto = ({
  cols = 6,
  rows = 1,
  title,
  subtitle,
  image,
  slug,
  start,
}: {
  cols: number;
  rows?: number;
  start?: number;
  title: string;
  subtitle: string;
  image: StaticImageData;
  slug: string;
}) => {
  return (
    <Link
      href={`/${slug}`}
      className={`col-span-${cols} h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden relative group lg:filter lg:grayscale lg:hover:filter-none ${start ? `col-start-${start}` : ""}`}
    >
      <Image
        src={image}
        alt="Cover photo"
        priority
        className="w-full h-[calc(100%-1.5rem)] lg:h-full object-cover lg:filter lg:hover:scale-105 transition-transform duration-300 ease-in-out"
      />
      <div className="absolute bottom-0 left-0 flex flex-row items-center justify-center w-full px-2 text-xs text-center text-gray-500 transition-all duration-300 ease-in-out lg:items-start lg:flex-col space-2 lg:w-auto lg:text-left lg:text-white lg:p-2 lg:text-2xl lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-full lg:group-hover:translate-y-0">
        <span className="lg:font-semibold text-nowrap text-ellipsis">
          {title}{" "}
        </span>
        <span className="text-ellipses line-clamp-1 text-pretty invisible md:visible text-ellipsis lg:text-lg before:content-['_-_'] lg:before:content-['']">
          {subtitle}
        </span>
      </div>
    </Link>
  );
};
