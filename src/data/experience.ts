import { EXP_ENDPOINT } from "./data.ts";

export type Experience = {
  title: string;
  timeline: string;
  highlights: Array<string>;
  certificate: string;
};

export async function getExperienceList(): Promise<Experience[]> {
  const response = await fetch(
    EXP_ENDPOINT
  );
  let experiences = await response.json();
  return experiences;
}
