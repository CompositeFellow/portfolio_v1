type skill = {
  logo: string;
  altTxt: string;
  skill: string;
};

const assetStr = "/assets/langLogos/";

export const skills: skill[] = [
  {
    logo: assetStr + "tsLogo.png",
    altTxt: "Typescript Logo",
    skill: "Typescript",
  },
  {
    logo: assetStr + "jsLogo.png",
    altTxt: "Javascript Logo",
    skill: "Javascript",
  },
  { logo: assetStr + "pythonLogo.png", altTxt: "Python Logo", skill: "Python" },
  { logo: assetStr + "reactLogo.png", altTxt: "React Logo", skill: "React" },
  { logo: assetStr + "nextLogo.png", altTxt: "NextJS Logo", skill: "Next.JS" },
];
