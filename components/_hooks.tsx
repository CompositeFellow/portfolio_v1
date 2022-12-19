import React, { useEffect, useState } from "react";

export const useMousePosition = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const setFromMouseMove = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });

		window.addEventListener("mousemove", setFromMouseMove);

		return () => {
			window.removeEventListener("mousemove", setFromMouseMove);
		};
	}, []);

	return position;
};

export const useFacePosition = (divRef: React.RefObject<HTMLDivElement>) => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const getPosition = () => {
			if (divRef) {
				const elementX = divRef.current?.offsetLeft ? divRef.current.offsetLeft + 16 : 0;
				const elementY = divRef.current?.offsetTop ? divRef.current.offsetTop + 16 : 0;
				setPosition({ x: elementX, y: elementY });
			}
		};

		getPosition();
		window.addEventListener("resize", getPosition);

		return () => {
			window.removeEventListener("resize", getPosition);
		};
	}, []);

	return position;
};

export const useIsMobile = () => {
	const MOBILE_BREAKPOINT = 640;
	const [width, setWidth] = useState<number | null>(null);
	const [isMobile, setIsMobile] = useState<boolean>(false);

	function handleWindowSizeChange() {
		setWidth(window.innerWidth);
	}
	useEffect(() => {
		setWidth(window.innerWidth);
		window.addEventListener("resize", handleWindowSizeChange);
		return () => {
			window.removeEventListener("resize", handleWindowSizeChange);
		};
	}, []);

	useEffect(() => {
		if (width) {
			setIsMobile(width <= MOBILE_BREAKPOINT);
		}
	}, [width]);

	return isMobile;
};
