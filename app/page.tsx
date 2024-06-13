import Image from "next/image";

// Photos Imports
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

const Page = async () => {
  return (
    <div
      id="container"
      className="w-svw h-svh flex flex-col items-center py-20 px-4"
    >
      <h1 className="text-2xl font-bold text-gray-700 py-4">
        Danny Burrows Photography
      </h1>
      <section
        id="photo_grid"
        className="grid grid-cols-6 md:grid-cols-12 auto-rows-auto border w-full gap-3"
      >
        <div className="col-span-4 h-[200px] overflow-hidden">
          <Image
            src={Cover}
            alt="Cover photo for Together, Apart"
            width={300}
            height={200}
            priority
            className="w-full h-full object-cover lg:filter lg:grayscale hover:filter-none lg:hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </section>
    </div>
  );
};

export default Page;
