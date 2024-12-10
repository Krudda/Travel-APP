'use client';

import { useChat } from 'ai/react';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();


  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1>Travel App powered by AI</h1>
      {
        messages.map((message) => {
          return (
            <div key={message.id}>
              { message.role === 'user' ? 'User: ' : 'AI: ' }
              { message.content }
            </div>
          )
        })
      }
      {
        isLoading && <div>Loading...</div>
      }
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder='Ask what to do at the location'
          onChange={handleInputChange}
          disabled={isLoading}
        />
      </form>
    </main>
  );
}
