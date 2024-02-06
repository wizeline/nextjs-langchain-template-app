"use client";
import {  useRef, useState } from "react";
import { generateJokeFromTheServer } from "../lib/actions";

export const PromptPlayground = () => {

  const [loading, setLoading] = useState(false);
  const textArea = useRef<HTMLTextAreaElement>(null);

  const handleClick = async () => {
    if(loading){
      return;
    }
    const topic = textArea.current?.value;

    if(!topic || topic.length === 0){
      return;
    }

    setLoading(true);

    // this call is a Nextjs Server Action, that serialize the topic, make a POST
    // request and give us the result automatically
    const joke = await generateJokeFromTheServer({topic})
      .finally(() => setLoading(false))

      textArea.current.value = joke;
  };

  return (
    <>
      <textarea
        id="result"
        className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        placeholder="what do you want to laugh about?"
        name="comment"
        rows={5}
        cols={40}
        ref={textArea}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        {loading ? "Loading..." : `Make me laugh! 🤣`}
      </button>
    </>
  );
};
