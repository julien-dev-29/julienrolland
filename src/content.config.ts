import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
const blogCollection = defineCollection({
    loader: glob({
        pattern: '**/*.md', base: './src/content/blog'
    }),
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        author: z.string(),
        image: z.string(),
        tags: z.array(z.string()),
        slug: z.string()
    })
})

export const collections = {
    blog: blogCollection
}