"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
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
			<header className="sticky top-0 z-40 border-b border-[#202020] bg-black transition-opacity duration-500">
				<div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 py-6 sm:py-8">
					<div className="flex items-center justify-between gap-4">
						<div className="flex min-w-0 flex-1 items-center justify-start">
							<Image
								className="h-auto max-h-14 w-auto max-w-[min(200px,55vw)] object-contain object-left sm:max-h-[3.25rem]"
								src="/logo.png"
								alt="Sapid Logo"
								width={200}
								height={52}
								priority
							/>
						</div>
						<div className="flex shrink-0 items-center gap-3">
							<Button
								variant="outline"
								size="sm"
								className={
									locale === "en"
										? "min-h-12 min-w-[3.5rem] border-white bg-white/10 px-5 text-sm opacity-100 hover:bg-[#1EAEDB] hover:text-white"
										: "min-h-12 min-w-[3.5rem] px-5 text-sm"
								}
								asChild
							>
								<Link href="/en">EN</Link>
							</Button>
							<Button
								variant="outline"
								size="sm"
								className={
									locale === "bg"
										? "min-h-12 min-w-[3.5rem] border-white bg-white/10 px-5 text-sm opacity-100 hover:bg-[#1EAEDB] hover:text-white"
										: "min-h-12 min-w-[3.5rem] px-5 text-sm"
								}
								asChild
							>
								<Link href="/bg">BG</Link>
							</Button>
						</div>
					</div>
					<div className="mt-6 border-b border-[#202020] pb-6 text-center">
						<p className="font-normal text-[clamp(1.5rem,4vw,2.125rem)] uppercase leading-[1.15] tracking-normal text-white">
							{locale === "bg" ? "Наргилета меню" : "Hookah menu"}
						</p>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
