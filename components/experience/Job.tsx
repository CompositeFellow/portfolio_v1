import React from "react";
import { JobExperience } from "../constants/experience";
import Bubble from "./Bubble";

type JobProps = {
	isLeft: boolean;
	ex: JobExperience;
};

const Job = ({ isLeft, ex }: JobProps) => {
	return (
		<div className={`w-full h-fit flex flex-row justify-center ${isLeft ? null : "flex-row-reverse"}`}>
			<div
				className={`lg:w-[14.9rem] xl:w-[18.9rem] 2xl:w-[22.9rem] py-[1rem] 
                flex justify-center items-center lg:justify-end
                ${isLeft ? null : "flex-row-reverse"}`}
			>
				<Bubble isLeft={isLeft} ex={ex} />
				<div className='hidden lg:block w-[2rem] lg:w-[2.75rem] xl:w-[3.75rem] 2xl:w-[5rem] h-[.125rem] bg-orangeTransparent' />
			</div>
			<div className='hidden lg:block bg-orangeTransparent w-[.25rem]' />
			<div className="hidden lg:block grow" />
		</div>
	);
};

export default Job;
