const Page = () => {
	return (
		<div id="title-and-nav" className="flex w-screen h-screen">
			<div className="w-2/5 p-4">
				<h1 className="text-3xl font-bold">Danny Burrows Photography</h1>
			</div>

			<div id="content-container" className="w-3/5 flex">
				<div className="flex-1 bg-gray-300">
					{/* Column 1 content */}
				</div>
				<div className="flex-1 bg-gray-400">
					{/* Column 2 content */}
				</div>
				<div className="flex-1 bg-gray-500">
					{/* Column 3 content */}
				</div>
			</div>
		</div>
	);
};

export default Page;
