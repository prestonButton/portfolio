'use server'

import supabase from "@/utilities/CreateClient"

// used to make sure all data fetched is up to date
const dynamic = 'force-dynamic'

export async function getStory(slug: string) {
	try {
		const { data: story, error } = await supabase
			.from('stories')
			.select('id, title, subtitle, slug, cover_image, content')
			.eq('slug', slug)


		if (error) {
			console.error('Error fetching story:', error)
			throw new Error(error.message)
		}

		// console.log('Stories fetched:', stories)

		return story;
	} catch (error) {
		console.error('Unexpected error:', error)
		throw error
	}
}
