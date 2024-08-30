import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

// Photos Imports
import TogetherApart from "@/public/portfolio_photos/cover.jpg";
import Eden from "@/public/portfolio_photos/Eden.jpg";
import BorderKills from "@/public/portfolio_photos/border_kills.jpg";
import IndeterminateState from "@/public/portfolio_photos/indeterminate_state.jpg";
import KillingMeSoftly from "@/public/portfolio_photos/killing_me_softly.jpg";
import NarrowSea from "@/public/portfolio_photos/narrow_sea.jpg";
import SmallBoats from "@/public/portfolio_photos/small_boats.jpg";

const Page = async () => {
	const gridItems = [
		{
			id: 1,
			content:
				<h1
					className="text-5xl font-bold ml-2"
				>
					Danny Burrows Photography
				</h1>,
			className: "col-span-2 row-span-2 bg-gray-200"
		},
		{
			id: 2,
			content: <PhotoComponent src={TogetherApart} alt="Together Apart" />,
			className: "col-span-1 row-span-2 bg-gray-300"
		},
		{
			id: 3,
			content: <PhotoComponent src={Eden} alt="Eden" />,
			className: "col-span-1 row-span-2 bg-gray-400"
		},
		{
			id: 4,
			content: <PhotoComponent src={BorderKills} alt="Border Kills" />,
			className: "col-span-2 row-span-2 bg-gray-500"
		},
		{
			id: 5,
			content: <PhotoComponent src={KillingMeSoftly} alt="Killing Me Softly" />,
			className: "col-span-1 row-span-3 bg-gray-600"
		},
		{
			id: 6,
			content: <PhotoComponent src={SmallBoats} alt="Small Boats" />,
			className: "col-span-1 row-span-1 bg-gray-700"
		},
		{
			id: 7,
			content: <PhotoComponent src={NarrowSea} alt="Narrow Sea" />,
			className: "col-span-2 row-span-3 bg-gray-800"
		},
		{
			id: 8,
			content: <PhotoComponent src={TogetherApart} alt="Together Apart" />,
			className: "col-span-1 row-span-2 bg-gray-900"
		},
		{
			id: 9,
			content: <PhotoComponent src={BorderKills} alt="Border Kills" />,
			className: "col-span-1 row-span-2 bg-gray-300"
		},
		{
			id: 10,
			content: <PhotoComponent src={NarrowSea} alt="Narrow Sea" />,
			className: "col-span-2 row-span-2 bg-gray-400"
		},
		{
			id: 11,
			content: <PhotoComponent src={KillingMeSoftly} alt="Killing Me Softly" />,
			className: "col-span-1 row-span-3 bg-gray-500"
		},
		{
			id: 12,
			content: <PhotoComponent src={Eden} alt="Eden" />,
			className: "col-span-1 row-span-1 bg-gray-600"
		},
		{
			id: 13,
			content: <PhotoComponent src={SmallBoats} alt="Small Boats" />,
			className: "col-span-2 row-span-2 bg-gray-700"
		},
		{
			id: 14,
			content: <PhotoComponent src={TogetherApart} alt="Together Apart" />,
			className: "col-span-1 row-span-2 bg-gray-800"
		},
		{
			id: 15,
			content: <PhotoComponent src={BorderKills} alt="Border Kills" />,
			className: "col-span-1 row-span-2 bg-gray-900"
		},
	];

	return (
		<div className="w-screen h-screen overflow-y-auto p-2">
			<div className="grid grid-cols-4 auto-rows-[minmax(200px,auto)] gap-2">
				{gridItems.map((item) => (
					<div
						key={item.id}
						className={`flex items-center justify-center text-gray-800 ${item.className}`}
					>
						{item.content}
					</div>
				))}
			</div>
		</div>
	);
};

export default Page;

const PhotoComponent = ({ src, alt }: { src: StaticImageData, alt: string }) => (
	<div className="relative w-full h-full overflow-hidden">
		<Image
			src={src}
			alt={alt}
			layout="fill"
			objectFit="cover"
			className="lg:filter lg:grayscale hover:filter-none transform transition-all duration-500 ease-in-out hover:scale-110"
		/>
	</div>
);
