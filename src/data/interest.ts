import { sanityClient } from "../sanity/client";

export type Interest = {
  name: string;
  title: string;
  description: string;
  mastery: number;
};

export async function getInterestList(): Promise<Interest[]> {
  const interests: Array<Interest> = await sanityClient.fetch(
    `*[_type == "interest"]`,
  );
  return interests;
}

