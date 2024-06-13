import Image from "next/image";

const Page = async () => {
  return (
    <div
      id="container"
      className="w-svw h-svh flex flex-col items-center py-24 px-4"
    >
      <h1 className="text-2xl font-bold">Danny Burrows Photography</h1>
      <section
        id="photo_grid"
        className="grid grid-cols-6 auto-rows-auto border w-full gap-3"
      >
        <Image
          src="https://picsum.photos/300/200"
          alt="random image"
          width={300}
          height={200}
          priority
          className="col-span-2"
        />
      </section>
    </div>
  );
};

export default Page;
