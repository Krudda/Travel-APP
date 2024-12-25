## AI Travel App

1. Create Next.js app: npx create-next-app@latest ai-travel-app
    - Run app: npm run dev
    - Open: [http://localhost:3000](http://localhost:3000)

2. Install ia packages: npm i ai @ai-sdk/openai
3. Create API keys: https://platform.openai.com/
4. Add .env.local file into src folder and add OPENAI_API_KEY={{apy_key}}
5. Create src/app/api/completion/route.js file
6. Add useCompletion hook and form component to page.js file
7. Add useChat hook and rename api/completion to api/chat
8. Add useState and Button
9. Add actions.js file with generateText async function
10. Replace generateText function in actions with generate function, contains createStreamableValue call
11. Add zod package
12. Add streaming generated object

