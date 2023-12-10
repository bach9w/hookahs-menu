'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Header = () => {
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);
	if (!isMounted) return null;
	return (
		<>
			<div className="flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0c5e16] after:dark:opacity-40 before:lg:h-[360px] z-[-1] object-center items-center justify-center">
				<Image
					className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
					src="/logo.png"
					alt="Sapid Logo"
					width={150}
					height={37}
					priority
				/>
			</div>
			<div className="absolute text-center bg-[#984063] text-white  w-full text-2xl font-bold mt-1 ">
				HOOKAH MENU
			</div>
		</>
	);
};

export default Header;
