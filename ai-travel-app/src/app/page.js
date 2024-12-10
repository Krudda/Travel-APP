'use client';

import { getAnswer } from './actions';

import { useState } from 'react';

export const dynamic = 'force-dynamic';
export const maxDuration = 30;

export default function Home() {
  const [generation, setGeneration] = useState('');
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <button
        onClick={async () => {
          const { text } = await getAnswer(
            'Question'
          );
          setGeneration(text);
        }}
      >
        Ask!
      </button>
      <div>{generation}</div>
    </main>
  );
}
// export default function Home() {
//   const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
//
//
//   return (
//     <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//       <h1>Travel App powered by AI</h1>
//       {
//         messages.map((message) => {
//           return (
//             <div key={message.id}>
//               { message.role === 'user' ? 'User: ' : 'AI: ' }
//               { message.content }
//             </div>
//           )
//         })
//       }
//       {
//         isLoading && <div>Loading...</div>
//       }
//       <form onSubmit={handleSubmit}>
//         <input
//           value={input}
//           placeholder='Ask what to do at the location'
//           onChange={handleInputChange}
//           disabled={isLoading}
//         />
//       </form>
//     </main>
//   );
// }
