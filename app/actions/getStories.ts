'use server'

import supabase from "@/utilities/CreateClient"

export async function getStories() {
	try {
		const { data: stories, error } = await supabase
			.from('stories')
			.select('id, title, subtitle, slug, cover_image')

		if (error) {
			console.error('Error fetching stories:', error)
			throw new Error(error.message)
		}

		return stories;
	} catch (error) {
		console.error('Unexpected error:', error)
		throw error
	}
}
