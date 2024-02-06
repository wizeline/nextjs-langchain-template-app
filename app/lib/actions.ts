"use server";

import { PromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { JsonOutputFunctionsParser } from "langchain/output_parsers";

export const generateJokeFromTheServer: ({topic} : {topic: string}) => Promise<string> = async ({topic}) => {

    // simple langchain chain where we pipe a prompt asking for joke to a model
    // of OpenAI. Later we force the answer to match the specified swagger.
    const chain = PromptTemplate.fromTemplate(`Hello there! can you tell me a random unusual joke about {topic}?`)
    .pipe(new ChatOpenAI({
        modelName: "gpt-3.5-turbo",
        temperature: 0.5,
        // fail at the first rate limit error
        maxRetries: 5,
    }).bind({
        functions: [{
            name: "extractor",
            description: "The given joke text",
            parameters: {
                type: "object",
                properties: {
                    text: {
                        type: "string",
                        description: "the text of the joke without formatting in simple text",
                    },
                },
                required: ["text"],
            },
        }],
        function_call: { name: "extractor" },
    }))
    .pipe(new JsonOutputFunctionsParser());


  return chain.invoke({ topic }).then(({ text }) => text);
};
