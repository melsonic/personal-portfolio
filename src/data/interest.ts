import { INTERESTS_ENDPOINT } from "./data";

export type Interest = {
  name: string;
  title: string;
  description: string;
  mastery: number;
};

export async function getInterestList(): Promise<Interest[]> {
  const response = await fetch(
    INTERESTS_ENDPOINT,
  );
  let interests = await response.json();
  console.log(interests);
  return interests;
}
