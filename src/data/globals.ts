import { sanityClient } from "../sanity/client";

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
  const siteGlobals = await sanityClient.fetch(
    `*[_type == "siteGlobals"]`,
  );
  return siteGlobals;
}
