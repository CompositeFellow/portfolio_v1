import React from "react";
import { JobExperience } from "../constants/experience";

type BubbleProps = {
	isLeft: boolean;
	ex: JobExperience;
};

const Bubble = ({ isLeft, ex }: BubbleProps) => {
	const details = ex.details.map((detail: string, i) => {
		return (
			<p key={1 + i} className='text-[.3rem] my-[.5rem]'>
				{detail}
			</p>
		);
	});

	return (
		<div
			className={`
            w-[318px] sm:w-[12rem] xl:w-[15rem] px-[.25rem] xl:px-[1rem] font-zenDots text-orangeGrey 
            rounded border-orangeTransparent border-b-2 
            ${isLeft ? "border-r-2" : "border-l-2"}`}
		>
			<h4 className='text-[.75rem] text-center'>{ex.company}</h4>
			<div className='w-full flex flex-col'>
				<h5 className='font-VT323 italic text-[.75rem]'>{ex.jobTitle}</h5>
				<p className='text-[.3rem]'>{ex.startEnd}</p>
			</div>
			<div className='my-[1rem]'>{details}</div>
		</div>
	);
};

export default Bubble;
