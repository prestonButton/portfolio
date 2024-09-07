import { NextRequest, NextResponse } from 'next/server';

import supabase from '@/utilities/CreateClient';

import type { BasicStory } from '@/types/story';

export async function GET(request: NextRequest) {
	const { data, error } = await supabase
		.from('stories')
		.select('*')
		.order('created_at', { ascending: false });

	if (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}

	console.log(data);

	// const stories: BasicStory[] = data.map((story) => {
	// 	return {
	// 		slug: story.slug,
	// 		title: story.title,
	// 		subTitle: story.subtitle,
	// 		coverImage: story.cover_image,
	// 	};
	// });

	return NextResponse.json({});
}
