import React from "react";
import { workExperience } from "../constants/experience";
import SectionMainColumn from "../global/SectionMainColumn";
import Job from "./Job";

type ExperienceProps = {};

const Experience = (props: ExperienceProps) => {
	const workHistory = workExperience.map((experience, i) => {
		if (i % 2 === 0) {
			return <Job key={experience.company + experience.jobTitle} ex={experience} isLeft={true} />;
		}
		return <Job key={experience.company + experience.jobTitle} ex={experience} isLeft={false} />;
	});
	return (
		<SectionMainColumn id='experience' classname='flex flex-col items-center scroll-mt-[2rem]'>
			<h3 className='font-VT323 underline text-orangeDark text-[2rem] align-text-bottom'>
				<b>Experience</b>
			</h3>
			{workHistory}
		</SectionMainColumn>
	);
};

export default Experience;
