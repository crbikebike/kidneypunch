import { defineCollection, z } from 'astro:content';

const fighters = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    nickname: z.string(),
    hometown: z.string(),
    age: z.number(),
    height: z.string(),
    weight: z.number(),
    record: z.object({
      wins: z.number(),
      losses: z.number(),
      draws: z.number().default(0),
    }),
    style: z.string(),
    specialMove: z.object({
      name: z.string(),
      description: z.string(),
    }),
    weakness: z.string(),
    entranceMusic: z.string(),
    quotes: z.object({
      intro: z.string(),
      postWin: z.string(),
      extra: z.string().optional(),
    }),
    training: z.array(z.string()),
    kdr: z.number(),
    boi: z.number(),
    division: z.string(),
    ranking: z.string(),
    image: z.string(),
  }),
});

export const collections = { fighters };
