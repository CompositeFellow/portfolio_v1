export type skill = {
    iconPath: string;
    altTxt: string;
    skill: string;
  };
  
  const assetStr = "/assets/skillIcons/";
  
  export const skills: { [skillName: string]: skill } = {
    typescript: {
      iconPath: assetStr + "tsLogo.png",
      altTxt: "Typescript Logo",
      skill: "Typescript",
    },
    javascript: {
      iconPath: assetStr + "jsLogo.png",
      altTxt: "Javascript Logo",
      skill: "Javascript",
    },
    python: {
      iconPath: assetStr + "pythonLogo.png",
      altTxt: "Python Logo",
      skill: "Python",
    },
    react: {
      iconPath: assetStr + "reactLogo.png",
      altTxt: "React Logo",
      skill: "React",
    },
    nextJS: {
      iconPath: assetStr + "nextLogo.png",
      altTxt: "NextJS Logo",
      skill: "Next.JS",
    },
    postgres:{
      iconPath: assetStr + "postgresLogo.png",
      altTxt: "PostgreSQL Logo",
      skill: "PostgreSQL"
    }
  };
  
  const ObjOfObjsToArray = (obj: {}) => {
    let arrayOfObjs: skill[] = [];
    for (var key in obj) {
      arrayOfObjs.push(obj[key as keyof typeof obj]);
    }
    return arrayOfObjs;
  };
  
  export const skillsArray = ObjOfObjsToArray(skills);