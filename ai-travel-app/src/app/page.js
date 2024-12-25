'use client';

import { useState } from 'react';
import { generate } from './actions';
import { readStreamableValue } from 'ai/rsc';

export const dynamic = 'force-dynamic';
export const maxDuration = 30;

export default function Home() {
  const [generation, setGeneration] = useState('');
  return (
    <main className="flex items-center justify-center">
      <button
        onClick={async () => {
          const { object } = await generate('super hero people');
          for await (const partialObject of readStreamableValue(object)) {
            if (partialObject) {
              setGeneration(JSON.stringify(partialObject.people, null, 2));
            }
          }
        }}
      >
        View people!
      </button>
      <pre>{generation}</pre>
    </main>
  );
}
