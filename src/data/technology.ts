import { sanityClient } from "../sanity/client";

export type Technology = {
  skill: string
}

export async function getTechnologyList(): Promise<Technology[]> {
  const technologyList: Array<Technology> = await sanityClient.fetch(
    `*[_type == "technology"]`,
  );
  return technologyList;
}
