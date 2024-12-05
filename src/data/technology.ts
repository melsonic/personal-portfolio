export type Technology = {
  skill: string;
};

export async function getTechnologyList(): Promise<Technology[]> {
  const response = await fetch(
    "http://localhost:8081/technology",
  );
  let technologyList = await response.json();
  return technologyList;
}
