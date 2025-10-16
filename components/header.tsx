"use client";
import { Button } from "@rewind-ui/core";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

const Header = () => {
	const [isMounted, setIsMounted] = useState(false);
	const locale = useLocale();
	useEffect(() => {
		setIsMounted(true);
	}, []);
	if (!isMounted) return null;
	return (
		<>
			<motion.header
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6 }}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3 justify-center w-full">
							<Image
								className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
								src="/logo.png"
								alt="Sapid Logo"
								width={150}
								height={37}
								priority
							/>
						</div>
						<div className="hidden sm:flex items-center gap-2">
							<Link href="/en">
								<Button color="purple">EN</Button>
							</Link>
							<Link href="/bg">
								<Button color="purple">BG</Button>
							</Link>
						</div>
					</div>
					<div className="mt-3 text-center sm:text-left">
						<div className="inline-block bg-[#984063] uppercase w-full text-white px-4 py-1 rounded-md text-xl font-bold">
							{locale === "bg" ? "наргилета меню" : "hookah menu"}
						</div>
					</div>
					<div className="mt-3 sm:hidden flex items-center justify-center gap-2">
						<Link href="/en">
							<Button size="sm" color="black">
								EN
							</Button>
						</Link>
						<Link href="/bg">
							<Button size="sm" color="black">
								BG
							</Button>
						</Link>
					</div>
				</div>
			</motion.header>
		</>
	);
};

export default Header;
