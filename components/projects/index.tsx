import React from "react";
import { projectsArray } from "../constants/projects";
import SectionMainColumn from "../global/SectionMainColumn";
import Project from "./Project";

type ProjectListProps = {};

const ProjectList = () => {
	const projectList = projectsArray.map((project) => {
		return <Project key={project.name} project={project} />;
	});

	// Logtar is learning to code and doesnt' know how to make comments, now he knows.
	return (
		<SectionMainColumn id="projects" classname='flex flex-col items-center justify-center h-fit scroll-mt-[2rem]'>
			<h3 className='font-VT323 underline text-orangeDark text-[2rem] align-text-bottom'>
				<b>Projects</b>
			</h3>
			<div className="w-full h-fit flex flex-col justify-center items-center">{projectList}</div>
		</SectionMainColumn>
	);
};

export default ProjectList;
