export type Experience = {
  title: string;
  timeline: string;
  highlights: Array<string>;
  certificate: string;
};

export async function getExperienceList(): Promise<Experience[]> {
  const response = await fetch("http://localhost:8081/experiences");
  let experiences = await response.json();
  return experiences;
}
