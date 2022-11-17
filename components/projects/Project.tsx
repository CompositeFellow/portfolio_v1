import React from "react";
import { Project } from "../constants/projects";
import styles from "../../styles/components/projects/Project.module.css";

const Project = (projectData: Project) => {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectInfo}>
        <h1>{projectData.name}</h1>
        <div>
          <p>{projectData.description}</p>
        </div>
      </div>
      <div className={styles.projectPic}>
        <img
          src={projectData.picPath}
          alt="Project Screenshot"
          width="100%"
          height="auto"
        />
      </div>
    </div>
  );
};

export default Project;
