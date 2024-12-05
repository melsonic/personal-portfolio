export type Software = {
  title: string;
  description: string;
  demoImage: string;
  livePreview: string;
  githubRepo: string;
};

export async function getSoftwareList(): Promise<Software[]> {
  const response = await fetch(
    "http://localhost:8081/softwares",
  );
  let softwares = await response.json();
  return softwares;
}
