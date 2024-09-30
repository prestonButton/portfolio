
'use server'

import supabase from "@/utilities/CreateClient"

// used to make sure all data fetched is up to date
const dynamic = 'force-dynamic'

export async function getImages(slug: string) {
	try {
		const { data: images, error } = await supabase
			.from('images')
			.select('*')
			.eq('story-id',
				// @ts-ignore -- it says this can be null, so need to figure out where that is, but ignoring will work for now
				(await supabase
					.from('stories')
					.select('id')
					.eq('slug', slug)
					.single()).data.id);

		if (error) {
			console.error('Error fetching images:', error);
			throw new Error(error.message);
		}

		console.log('Images fetched:', images);

		return images;
	} catch (error) {
		console.error('Unexpected error:', error);
		throw error;
	}
}
