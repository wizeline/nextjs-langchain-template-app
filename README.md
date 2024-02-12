This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, change to Node version 20.10.0. Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## About this template

Our intention with this template is to provide a starting point for a Next.js project that also makes use of [Langchainjs](https://js.langchain.com/docs/get_started/introduction) to communicate with  Googles's Vertex IA. We found confusing the documentation about langchain in javascript and it is a good summary of a simple way of putting in practice any crazy idea you have.

Follow this stesp by step video to create a proper Google Cloud Service Account and an association to the you a cloud projects.

https://youtu.be/DQQCkZ2B-MA?feature=shared


## Learn More

The other bit of magic is happening in /app > /ui > prompt-playground.tsx where Nextjs' [server actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) lets us directly make a request using the `generateJokeFromTheServer` function. We just have to patiently await the result. We can do that by specifying at the top of each file if we want it to run client or server side. Of course, we want the `generateJokeFromTheServer` function to run server side but our button is client side.

## Time to play!

We call it prompt playground because it is! You can change the prompt to anything you want and see the result. You can also change the topic to anything you want and see the result. The possibilities are endless!
