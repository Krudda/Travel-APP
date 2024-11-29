'use client';

import { useCompletion } from 'ai/react';

export default function Home() {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion();


  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Travel App powered by AI</h1>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            placeholder='What to do where'
            onChange={handleInputChange}
          />
        </form>
        {completion ? <div>{completion}</div> : <div>Recommend place to visit...</div>}
      </main>
    </div>
  );
}
