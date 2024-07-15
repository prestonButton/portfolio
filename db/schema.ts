
import { integer, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

// Create Stories Table
const stories = pgTable('stories', {
    id: serial('id').primaryKey(),
    title: text('title').unique().notNull(),
    subtitle: text('subtitle').unique().notNull(),
    slug: varchar('slug', { length: 255 }).unique().notNull(),
    content: text('content').unique().notNull(),
    dates: text('dates').notNull(),
    coverImage: varchar('cover_image', { length: 500 }).unique(), // Store link to blob storage
    images: varchar('images', { length: 500 }) // Array of links to blob storage locations
});

// Create Images Table
const images = pgTable('images', {
    id: serial('id').primaryKey(),
    storyId: serial('story_id').references(() => stories.id).onDelete('cascade'),
    url: varchar('url', { length: 500 }).notNull(), // Link to blob storage
    title: varchar('title', { length: 255 }),
    caption: text('caption')
});

export { stories, images };

export type SelectStory = typeof stories.$inferSelect
export type SelectImage = typeof images.$inferSelect
