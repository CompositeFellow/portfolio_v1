import React from "react";
import styles from "../../styles/components/projects/ProjectList.module.css";
import { projectsArray } from "../constants/projects";
import Project from "./Project";

type Props = {};

const projectList = projectsArray.map((project) => {
  return <Project {...project} key={project.name} />;
});

const ProjectList = (props: Props) => {
  return (
    <section id="projects" className={styles.projectList}>
      {projectList}
    </section>
  );
};

export default ProjectList;
