import type { Story } from "@/types/story";
import Image from "next/image";
import StoryHero from "./story_hero";

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
      <StoryHero story={story} />
    </div>
  );
};

export default Page;
