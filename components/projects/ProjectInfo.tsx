import { url } from "inspector";
import Image from "next/image";
import React from "react";
import { Skill } from "../constants/skills";
import ProjectSkills from "./ProjectSkills";

type ProjectInfoProps = {
	name: string;
	description: string;
	skillsUsed: Skill[];
	codeLink: string;
	live?: boolean;
	projectUrl?: string;
};

const ProjectInfo = ({ name, description, skillsUsed, codeLink, live, projectUrl }: ProjectInfoProps) => {
	return (
		<div className='w-[480px] h-full flex flex-col'>
			<h4
				className='text-orangeGrey font-zenDots text-[.75rem] text-center 
            mb-[.5rem] sm:mb-[1rem]'
			>
				{name}
			</h4>
			<p className='text-[.5rem] font-zenDots text-orangeGrey px-[.5rem] xl:px-0'>{description}</p>
			<div className='flex w-full justify-evenly xl:justify-start'>
				<ProjectSkills skills={skillsUsed} />
			</div>
			<div className='grow' />
			<div className='w-full flex flex-row mb-[.5rem] justify-center xl:justify-start'>
				<div className='w-[32px] h-[32px] mr-[1rem]'>
					<a href={codeLink}>
						<Image src="/assets/icons/githubIconWhite.svg" alt="Link to project on Github" height={32} width={32} />
					</a>
				</div>
				{live ? (
					<div>
						<a href={projectUrl}>
							<Image src="/assets/icons/link.svg" alt="link to the project" height={32} width={32} />
						</a>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default ProjectInfo;
