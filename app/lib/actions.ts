"use server";

import { PromptTemplate } from "@langchain/core/prompts";
import { GoogleVertexAI } from "@langchain/community/llms/googlevertexai";

export const generateJokeFromTheServer: ({
  topic,
}: {
  topic: string;
}) => Promise<string> = async ({ topic }) => {
  // simple langchain chain where we pipe a prompt asking for joke to a model

  const credentials = JSON.parse(
    process.env.GOOGLE_SERVICE_ACCOUNT_KEY ?? ""
  ) as {
    project_id: string;
    private_key: string;
    client_email: string;
  };

  const chain = PromptTemplate.fromTemplate(
    `Hello there! can you tell me a random unusual joke about {topic}?`
  ).pipe(
    new GoogleVertexAI({
      authOptions: {
        projectId: credentials.project_id,
        credentials: {
          private_key: credentials.private_key,
          client_email: credentials.client_email,
        },
      },
      temperature: 0.5,
      // fail at the first rate limit error
      maxRetries: 5,
    })
  );

  return chain.invoke({ topic });
};
