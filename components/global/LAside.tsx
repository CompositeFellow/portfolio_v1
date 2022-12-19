import Image from "next/image";
import React from "react";
import LinkAside from "./LinkAside";

type LAsideProps = {};

const LAside = (props: LAsideProps) => {
	return (
		<LinkAside rightside={false}>
			<div className="w-[1rem] h-[1rem] mt-[.5rem]">
				<a href="https://www.linkedin.com/in/trevor-danahy-089ba8188/" target="#">
					<Image src="/assets/icons/linkedinIcon.svg" width={32} height={32} alt='LinkedIn Icon' />
				</a>
			</div>
			<div className="w-[1rem] h-[1rem] my-[.5rem]">
				<a href="https://github.com/compositefellow" target="#">
					<Image src="/assets/icons/github.svg" width={32} height={32} alt='Github Icon' />
				</a>
			</div>
		</LinkAside>
	);
};

export default LAside;
