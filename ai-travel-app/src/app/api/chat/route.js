import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export const maxDuration = 30;

export async function POST(req) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai("gpt-4o"), // "gpt-3.5-turbo"
    messages
  });
  return result.toDataStream();
}