import { skill, skills } from "./skills";

export type Project = {
  name: string;
  live: boolean;
  url?: string;
  codeLink: string;
  picPath: string;
  skillsUsed: skill[];
  description: string;
};

export const projectsArray: Project[] = [
  {
    name: "MedDAO Community Site",
    live: true,
    url: "www.meddao.xyz",
    codeLink: "https://github.com/CompositeFellow/Website",
    picPath: "/assets/construction.jpg",
    skillsUsed: [skills.typescript, skills.nextJS],
    description:
      "A Next.JS website built with Typescript and ChakraUI for the MedDAO community.",
  },
  {
    name: "Super CLuster Labs HackFS`22",
    live: false,
    codeLink: "https://github.com/SuperclusterLabs/supercluster-hackathon",
    picPath: "/assets/construction.jpg",
    skillsUsed: [skills.javascript, skills.react],
    description:
      "An IPFS pinning orchestration tool allowing communities to build small pinning subnets on IPFS for p2p community storage.  We won 2nd place in the storage wizzard category at HackFS`22",
  },
];
