import { ECDH } from "crypto";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useFacePosition, useIsMobile, useMousePosition } from "../_hooks";
import FaceLogo from "./FaceLogo";
import FancyFaceLogo from "./FancyFaceLogo";

type NavbarProps = {};

type NavLinkProps = {
	name: string;
	href: string;
};

const NavLink = ({ name, href }: NavLinkProps) => {
	return (
		<Link
			className='text-orangeDark text-[.75rem] font-VT323 sm:text-[1rem] 
			mb-[.5rem] sm:mb-[.25rem] sm:ml-[1rem]'
			href={href}
		>
			{name}
		</Link>
	);
};

const Navbar = (props: NavbarProps) => {
	const isMobile = useIsMobile();

	return (
		<div className='fixed bottom-0 sm:top-0 w-[100vw] h-[2rem] flex'>
			<div className='hidden sm:block grow' />
			<div className='hidden sm:block w-[32px]' />
			<nav
				className='bg-black h:-[.5rem] sm:h-full w-[100%] sm:w-[577px] md:w-[705px] lg:w-[961px] 
				xl:w-[1217px] 2xl:w-[1473px] 
        		p-[.25rem] flex justify-between sm:justify-between'
			>
				{isMobile ? (
					<>
						<div className='grow flex justify-center items-center pt-[.5rem] ml-[-.5rem]'>
							<NavLink href='/#experience' name='Experience' />
						</div>

						<FaceLogo />
						<div className='grow flex justify-center items-center pt-[.5rem]'>
							<NavLink href='/#projects' name='Projects' />
						</div>
					</>
				) : (
					<>
						<FancyFaceLogo />
						<div className='h-[2rem] pr-[.5rem] sm:pr-[1rem] flex items-end'>
							<NavLink href='/#projects' name='Projects' />
							<NavLink href='/#experience' name='Experience' />
						</div>
					</>
				)}
			</nav>
			<div className='hidden sm:block w-[32px]' />
			<div className='hidden sm:block grow' />
		</div>
	);
};

export default Navbar;
