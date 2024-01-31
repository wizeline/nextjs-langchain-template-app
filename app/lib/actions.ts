"use server";

export const generateRandomStringFromServer = async () => {
  return Math.random().toString(36).substring(7);
};
