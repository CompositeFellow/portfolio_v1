import React, { useEffect, useRef, useState } from "react";
import { useFacePosition, useMousePosition } from "../_hooks";

type FancyFaceLogoProps = {};

const FancyFaceLogo = (props: FancyFaceLogoProps) => {
	const face = useRef<HTMLDivElement>(null);
	const mousePos = useMousePosition();
	const facePos = useFacePosition(face);
	const [degrees, setDegrees] = useState(0);

	function angleToEyes() {
		const deltaX: number = 480 - mousePos.x; // 467
		const deltaY: number = 42 - mousePos.y; // 42
		const radians: number = Math.atan2(deltaY, deltaX);
		const deg: number = (radians * 180) / Math.PI + 90;

		setDegrees((d) => deg);
	}

	useEffect(() => {
		window.addEventListener("mousemove", angleToEyes);

		return () => {
			window.removeEventListener("mousemove", angleToEyes);
		};
	}, [mousePos, facePos, degrees]);

	return (
		<div className='h-full w-[2rem] flex flex-col'>
			<div className='w-full min-h-[.25rem] mb-[.5rem]' />
			<div className='flex flex-row justify-center' ref={face}>
				<div className='w-[.5rem] h-[.5rem] bg-white flex justify-center items-center'>
					<div className='flex flex-col' style={{ transform: `rotate(${degrees}deg)` }}>
						<div className='w-[.125rem] h-[.25rem] bg-white' />
						<div className='w-[.125rem] h-[.125rem] bg-black' />
					</div>
				</div>
				<div className='w-[.5rem]' />
				<div className='w-[.5rem] h-[.5rem] bg-white flex justify-center items-center'>
					<div className='flex flex-col' style={{ transform: `rotate(${degrees}deg)` }}>
						<div className='w-[.125rem] h-[.25rem] bg-white' />
						<div className='w-[.125rem] h-[.125rem] bg-black' />
					</div>
				</div>
			</div>
			<div
				className='w-[2rem] mt-[0.5rem]'
				style={{
					borderTop: "32px solid #b96829",
					borderLeft: "20px solid transparent",
					borderRight: "20px solid transparent",
				}}
			/>
		</div>
	);
};

export default FancyFaceLogo;
