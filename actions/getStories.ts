'use server'

import supabase from "@/utilities/CreateClient"

// used to make sure all data fetched is up to date
const dynamic = 'force-dynamic'

export async function getStories() {
	try {
		const { data: stories, error } = await supabase
			.from('stories')
			.select('id, title, subtitle, slug, cover_image')

		if (error) {
			console.error('Error fetching stories:', error)
			throw new Error(error.message)
		}

		// console.log('Stories fetched:', stories)

		return stories;
	} catch (error) {
		console.error('Unexpected error:', error)
		throw error
	}
}
