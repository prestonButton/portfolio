import Image from "next/image";

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
            src="https://picsum.photos/300/200"
            alt="random image"
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
