export type Interest = {
  name: string;
  title: string;
  description: string;
  mastery: number;
};

export async function getInterestList(): Promise<Interest[]> {
  const response = await fetch(
    "http://localhost:8081/interests",
  );
  let interests = await response.json();
  console.log(interests);
  return interests;
}
