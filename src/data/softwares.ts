import { SOFTWARES_ENDPOINT } from "./data";

export type Software = {
  title: string;
  description: string;
  demoImage: string;
  livePreview: string;
  githubRepo: string;
};

export async function getSoftwareList(): Promise<Software[]> {
  const response = await fetch(
    SOFTWARES_ENDPOINT,
  );
  let softwares = await response.json();
  return softwares;
}
