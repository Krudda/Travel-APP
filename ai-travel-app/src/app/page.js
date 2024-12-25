'use client';

import { useState } from 'react';
import { getData } from './actions';

export const dynamic = 'force-dynamic';
export const maxDuration = 30;

export default function Home() {
  const [generation, setGeneration] = useState('');
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <button
        onClick={async () => {
          const { people } = await getData('super hero people');
          setGeneration(JSON.stringify(people, null, 2));
        }}
      >
        View people!
      </button>
      <div>{generation}</div>
    </main>
  );
}
