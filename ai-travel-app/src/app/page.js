'use client';

import { useState } from 'react';
import { streamComponent } from './actions';

export const dynamic = 'force-dynamic';
export const maxDuration = 30;

export default function Home() {
  const [component, setComponent] = useState('');
  return (
    <main className="flex items-center justify-center">
      <form
          onSubmit={
            async (e) => {
                e.preventDefault();
                setComponent(await streamComponent());
            }
          }
      >
        <button>Get component</button>
      </form>
        <div>{component}</div>
    </main>
  );
}
