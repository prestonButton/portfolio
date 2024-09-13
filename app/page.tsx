import { getStories } from "@/actions/getStories";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
	const stories = await getStories();

	// Divide stories into three groups
	const storyGroups = [
		stories.slice(0, Math.ceil(stories.length / 3)),
		stories.slice(Math.ceil(stories.length / 3), Math.ceil(2 * stories.length / 3)),
		stories.slice(Math.ceil(2 * stories.length / 3)),
	];

	return (
		<main className="min-h-screen">
			<div id="title-and-nav" className="fixed top-0 left-0 w-1/5 p-4 h-full">
				<h1 className="text-xl font-bold">Danny Burrows Photography</h1>
			</div>

			<div id="content-container" className="ml-[20%] w-4/5 flex items-start">
				{storyGroups.map((group, index) => (
					<div
						id="column"
						key={index}
						className={`flex-1 ${index === 0 ? 'transform translate-y-[10vh]' :
							index === 2 ? 'transform translate-y-[15vh]' : ''
							}`}
					>
						{group.map((story) => (
							<Link
								href={`/stories/${story.slug}`}
								key={story.id}
							>
								<div
									id="story"
									className="m-2 bg-white relative overflow-hidden group"
								>
									<Image
										src={new URL(story.cover_image!).href}
										alt={story.title!}
										width={300}
										height={500}
										className="w-full min-h-[400px] object-cover"
										priority
									/>
									<div
										id="title-container"
										className="absolute bottom-0 left-0 right-0 p-2 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent text-white"
									>
										<h2 className="text-xl font-bold">{story.title}</h2>
										<p>{story.subtitle}</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				))}
			</div>
		</main>
	);
};

export default Page;
