export type SiteGlobals = {
  title: string;
  logo: string;
  profilePicture: string;
  resume: string;
  twitter: string;
  linkedin: string;
  github: string;
  email: string;
  tagline: string;
  intro: string;
};

export async function getSiteGlobals(): Promise<SiteGlobals[]> {
  const response = await fetch("http://localhost:8081/globals");
  let siteGlobals = await response.json();
  return siteGlobals;
}
