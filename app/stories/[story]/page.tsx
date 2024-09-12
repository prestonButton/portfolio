import { getStory } from "@/actions/getStory";
import { getImages } from "@/actions/getImages";
import Image from "next/image";

export default async function StoryPage(
	{ params }:
		{
			params:
			{ story: string }
		}) {
	const story = await getStory(params.story);
	const images = await getImages(params.story);

	// console.log(story)
	console.log(images)

	return (
		<div className="flex flex-col items-center justify-center">
			<h1>{story.title}</h1>
			<Image src={story.cover_image!} alt={story.title!} width={500} height={500} />
			<p>{story.content}</p>
		</div>
	);
}
