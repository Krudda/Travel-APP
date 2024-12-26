'use server';

import { openai } from '@ai-sdk/openai';
import { streamUI } from 'ai/rsc';

export async function streamComponent() {
  const result = await streamUI({
    model: openai('gpt-4o'),
    prompt: 'Give me some advice how to plan a trip',
    text: ({ content }) => <div>{content}</div>,
  });
  return result.value;
}
