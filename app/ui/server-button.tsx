"use client";
import { useState } from "react";
import { generateRandomStringFromServer } from "../lib/actions";

// This is a button that when clicked shows a random string number below generated from the server

export const ServerButton = () => {
  // This is the state of the button
  const [loading, setLoading] = useState(false);

  // This is the state of the random number
  const [randomNumber, setRandomNumber] = useState("none");

  // This is the function that is called when the button is clicked
  const handleClick = async () => {
    setLoading(true);
    const data = await generateRandomStringFromServer();
    setRandomNumber(data);
    setLoading(false);
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleClick}
    >
      {loading ? "Loading..." : `Random Number: ${randomNumber}`}
    </button>
  );
};
