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

// export const experiences: Array<Experience> = [
//   {
//     title: "PROJECT INTERN IN NETSUITE GBU, ORACLE",
//     timeline: "MAY-JULY, 2023",
//     highlights: [
//       "Worked on developing a feature in NetSuite for automating inventory level management, empowering business owners to prevent stockouts proactively.",
//       "Utilized SuiteScript API for extending the NetSuite functionality and seamlessly integrating the solution to the software.",
//       "During the internship, I gained hands-on experience in the complete Software Development Life Cycle (SDLC),honing skills in Software Testing and SuiteScript API.",
//     ],
//     certificate: DocumentsList.oracleIntern,
//   },
// ];
