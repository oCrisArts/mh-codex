import { z, defineCollection } from 'astro:content';

// Define schema for monsters collection - simplified for debugging
const monstersCollection = defineCollection({
  schema: z.object({
    id: z.number(),
    name: z.string(),
    rank: z.enum(['low', 'high', 'master', 'event']),
    type: z.string(),
    image: z.string(),
    icon: z.string(),
  }),
});

// Export collections
export const collections = {
  monsters: monstersCollection,
};
