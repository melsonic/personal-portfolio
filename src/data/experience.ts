import { sanityClient } from "../sanity/client";

export type Experience = {
  title: string;
  timeline: string;
  highlights: Array<string>;
  certificate: string;
};

export async function getExperienceList(): Promise<Experience[]> {
  const experiences = await sanityClient.fetch(`*[_type == "experience"]`);
  return experiences;
}

