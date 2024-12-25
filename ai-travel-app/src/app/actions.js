'use server';

import { generateObject } from 'ai';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';

export async function getData(input) {
  'use server';
  const { object: people } = generateObject({
    model: openai('gpt-4-turbo'),
    system: 'You generate fake data for three people',
    prompt: input,
    schema: z.object({
      people: z.array(
        z.object({
          name: z.string().describe('name of a fake person'),
          address: z.string().describe('US adresses format'),
          age: z.number(),
        }),
      ),
    }),
  });
  return { people };
}
