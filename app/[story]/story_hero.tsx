import type { Story } from "@/types/story";
import Image from "next/image";

const StoryHero = ({ story }: { story: Story }) => {
  const images = story.images;
  const length = images.length;
  return (
    <div id="story_hero" className="h-4/5 flex flex-row">
      {story.images.map((image, index) => (
        <Image
          key={index.toString()}
          src={image}
          alt={"Image"}
          width={image.width}
          height={image.height}
          className="h-full story_hero_image filter brightness-75 hover:filter-none object-cover transition-all duration-500 ease-in-out hover:w-full"
        />
      ))}
    </div>
  );
};

export default StoryHero;
