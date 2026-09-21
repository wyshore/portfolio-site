import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string(),
    featureImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),

    // 'project' -> shown on /blog.  'work' -> shown on the /experience timeline.
    type: z.enum(['project', 'work']).default('project'),
    // For work entries: which term in site.json -> work.terms this belongs to.
    term: z.string().optional(),
    // One-line summary shown on the collapsed timeline card.
    summary: z.string().optional(),
  }),
});

export const collections = { posts };
