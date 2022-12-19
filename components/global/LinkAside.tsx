import React from "react";

type AsideProps = {
	children?: React.ReactNode;
	rightside?: boolean;
};

const LinkAside = ({ children, rightside }: AsideProps) => {
	return (
		<aside
			className={`hidden w-[1rem] h-fit sm:flex  flex-col sm:w-[32px] bg-gridSize bg-gridHorizontal  
      ${rightside ? "col-start-4 col-end-5" : "col-start-2 col-end-3"}
      `}
		>
			{rightside ? (
				<div className='fixed w-[1rem] h-full flex flex-col items-center bottom-0 justify-end'>
					{children}
					<div className='line h-[2rem] xl:h-[5rem] w-[2px] bg-orangeTransparent' />
				</div>
			) : (
				<div className='fixed w-[1rem] h-full flex flex-col items-center top-0 justify-start'>
					<div className='line h-[2rem] xl:h-[5rem] w-[2px] bg-orangeTransparent' />
					{children}
				</div>
			)}
		</aside>
	);
};

export default LinkAside;
