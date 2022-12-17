import { Skill, skills } from "./skills";

export type Project = {
  name: string;
  live: boolean;
  url?: string;
  codeLink: string;
  picPath: string;
  skillsUsed: Skill[];
  description: string;
};

export const projectsArray: Project[] = [
    {
        name: "Super CLuster Labs HackFS`22",
        live: true,
        url: "https://ethglobal.com/showcase/supercluster-t9x45",
        codeLink: "https://github.com/SuperclusterLabs/supercluster-hackathon",
        picPath: "/assets/projects/supercluster.png",
        skillsUsed: [skills.javascript, skills.react],
        description:
          "An IPFS pinning orchestration tool allowing communities to build small pinning subnets on IPFS for p2p community storage.  We won 2nd place in the storage wizzard category at HackFS`22",
      },
  {
    name: "MedDAO Community Site",
    live: true,
    url: "https://www.meddao.xyz",
    codeLink: "https://github.com/CompositeFellow/Website",
    picPath: "/assets/projects/meddao.png",
    skillsUsed: [skills.typescript, skills.nextJS],
    description:
      "A Next.JS website built with Typescript and ChakraUI for the MedDAO community.",
  },
  {
    name: "Rekt Streamer",
    live: true,
    url: "https://www.twitch.tv/dyllbob/clip/YawningPuzzledNarwhalRickroll",
    codeLink: "https://github.com/trevordanahy/Rekt_Streamer",
    picPath: "/assets/projects/reckt.png",
    skillsUsed: [skills.python],
    description:
      "A simple script to allow twitch streamers to let their viewers send a preset series of inputs to the streamers computer.  The inputs are common gaming inputs that will cause the streams video game character to dance, shoot repeatedly or freeze.  The script is run when the streamer is live and connects to the Twitch API to determine when viewers have spent channel points to start the script. ",
  },
];
