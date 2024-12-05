import { TECHNOLOGY_ENDPOINT } from "./data";

export type Technology = {
  skill: string;
};

export async function getTechnologyList(): Promise<Technology[]> {
  const response = await fetch(
    TECHNOLOGY_ENDPOINT,
  );
  let technologyList = await response.json();
  return technologyList;
}
