import { getStories } from "@/actions/getStories";
import Image from "next/image";

const Page = async () => {
	const stories = await getStories();

	// Divide stories into three groups
	const storyGroups = [
		stories.slice(0, Math.ceil(stories.length / 3)),
		stories.slice(Math.ceil(stories.length / 3), Math.ceil(2 * stories.length / 3)),
		stories.slice(Math.ceil(2 * stories.length / 3)),
	];

	return (
		<div id="title-and-nav" className="flex w-screen h-screen">
			<div className="w-1/5 p-4">
				<h1 className="text-3xl font-bold">Danny Burrows Photography</h1>
			</div>

			<div id="content-container" className="w-4/5 flex items-start">
				{storyGroups.map((group, index) => (
					<div
						id="column"
						key={index}
						className={`flex-1 bg-gray-${300 + index * 100} overflow-y-auto h-screen ${index === 0 ? 'transform translate-y-[10vh]' :
								index === 2 ? 'transform translate-y-[15vh]' : ''
							}`}
					>
						{group.map((story) => (
							<div id="story" key={story.id} className="m-2 bg-white">
								<Image
									src={new URL(story.cover_image!).href}
									alt={story.title!}
									width={300}
									height={500}
									className="w-full min-h-[400px] object-cover"
								/>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default Page;
