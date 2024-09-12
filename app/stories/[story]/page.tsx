import { getStory } from "@/actions/getStory";
import { getImages } from "@/actions/getImages";
import Image from "next/image";

export default async function StoryPage({
	params,
}: {
	params: { story: string };
}) {
	const story = await getStory(params.story);
	const images = await getImages(params.story);

	return (
		<div className="min-h-screen w-screen">
			<div id="title-and-nav" className="fixed top-0 left-0 w-1/5 p-4 h-full">
				<h1 className="text-xl font-bold">{story.title}</h1>
				<h3 className="text-md">{story.subtitle}</h3>
			</div>

			<div id="content-container" className="ml-[20%] w-4/5 p-4 overflow-y-auto h-screen ">
				{images.map((image, index) => (
					<div
						key={index}
						className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
							} mb-12 items-center`}
					>
						<div className="w-1/2">
							<Image
								src={image.url}
								alt={'need alt text'}
								width={500}
								height={300}
								className="object-cover"
							/>
						</div>
						<div className={`w-1/2 ${index % 2 === 0 ? "pl-8" : "pr-8"}`}>
							<p>{image.caption}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
