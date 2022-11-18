import React from "react";
import { Project } from "../constants/projects";
import styles from "../../styles/components/projects/Project.module.css";
import Image from "next/image";
import ProjectLinks from "./ProjectLinks";

const Project = (projectData: Project) => {
  const skills = projectData.skillsUsed.map((skill) => {
    return (
      <div className={styles.skill} key={skill.skill}>
        <Image src={skill.iconPath} alt={skill.altTxt} width={40} height={40} />
        {skill.skill}
      </div>
    );
  });

  return (
    <div className={styles.projectContainer}>
      <h1 className={styles.title}>{projectData.name}</h1>
      <div className={styles.projectInfo}>
        <div className={styles.description}>
          {projectData.description}{" "}
          <div className={styles.projectSkills}>{skills}</div>
          <div className={styles.projectLinks}></div>
          <ProjectLinks
            live={projectData.live}
            url={projectData.url}
            codeLink={projectData.codeLink}
          />
        </div>
        <div className={styles.projectPic}>
          <img src={projectData.picPath} alt="Screenshot of project" />
        </div>
      </div>
    </div>
  );
};

export default Project;
