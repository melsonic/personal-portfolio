import { sanityClient } from "../sanity/client";

export type Software = {
  title: string;
  description: string;
  demoImage: string;
  livePreview: string;
  githubRepo: string;
};

export async function getSoftwareList(): Promise<Software[]> {
  const softwares: Array<Software> = await sanityClient.fetch(
    `*[_type == "software"]`,
  );
  return softwares;
}
