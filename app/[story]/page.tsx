import type { Story } from "@/types/story";
import Image from "next/image";

const API_URL = process.env.API_URL;

const Page = async ({ params }: { params: { story: string } }) => {
  const getStory = async () => {
    "use server";

    // Set to no-cache for development. For production, remove the cache option.
    const res = await fetch(`${API_URL}/getStory`, { cache: "no-cache" });

    const data = await res.json();

    return data;
  };

  const story: Story = await getStory();

  return (
    <div className="w-svw h-svh flex flex-col p-0">
      <div id="story_hero" className="relative w-full h-4/5">
        <Image
          src={story.coverImage}
          alt={story.title}
          width={story.coverImage.width}
          className="object-cover h-full"
        />
        <div
          id="story_hero_titles"
          className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 flex flex-row justify-between"
        >
          <div className="flex flex-col justify-center items-start h-full">
            <h1 className="text-white text-4xl font-bold">
              {story.title} <span className="font-thin">- ({story.years})</span>
            </h1>
            <h2 className="text-white text-lg">{story.subTitle}</h2>
          </div>
        </div>
      </div>
      <div id="story_content" className="w-full p-4 px-20">
        {story.content.split("/#P").map((paragraph, index) => {
          return (
            <p key={index.toString()} className="text-lg font-thin mb-4">
              {paragraph}
            </p>
          );
        })}
      </div>
      <div className="w-full flex items-center justify-center">
        <button
          type="button"
          className="border-2 border-gray-600 px-3 py-2 text-gray-600"
        >
          View Photos
        </button>
      </div>
    </div>
  );
};

export default Page;
