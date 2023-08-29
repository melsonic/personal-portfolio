import { DocumentsList } from "./documents";

export type ExperienceType = {
  title: string;
  timeline: string;
  highlights: Array<string>,
  certificate: string
}

export const experiences: Array<ExperienceType> = [
  {
    title: "PROJECT INTERN IN NETSUITE GBU, ORACLE",
    timeline: "MAY-JULY, 2023",
    highlights: [
      "Worked on developing a feature in NetSuite for automating inventory level management, empowering business owners to prevent stockouts proactively.",
      "Utilized SuiteScript API for extending the NetSuite functionality and seamlessly integrating the solution to the software.",
      "During the internship, I gained hands-on experience in the complete Software Development Life Cycle (SDLC),honing skills in Software Testing and SuiteScript API."
    ],
    certificate: DocumentsList.oracleIntern
  }
]