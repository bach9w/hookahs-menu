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
				<div className="mx-auto max-w-[1200px] px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
					<div className="flex items-center gap-2 sm:gap-4">
						<div className="flex shrink-0 items-center">
							<Image
								className="h-auto max-h-11 w-auto max-w-[min(120px,28vw)] object-contain object-left sm:max-h-[3.25rem] sm:max-w-[min(200px,30vw)]"
								src="/logo.png"
								alt="Sapid Logo"
								width={200}
								height={52}
								priority
							/>
						</div>
						<p className="min-w-0 flex-1 text-center font-normal uppercase leading-[1.15] tracking-normal text-white [font-size:clamp(0.7rem,2.8vw,1.75rem)] sm:[font-size:clamp(1rem,2.2vw,2.125rem)]">
							{locale === "bg" ? "Наргилета меню" : "Hookah menu"}
						</p>
						<div className="flex shrink-0 items-center gap-2 sm:gap-3">
							<Button
								variant="outline"
								size="sm"
								className={
									locale === "en"
										? "min-h-11 min-w-[3rem] border-white bg-white/10 px-3 text-xs opacity-100 hover:bg-[#1EAEDB] hover:text-white sm:min-h-12 sm:min-w-[3.5rem] sm:px-5 sm:text-sm"
										: "min-h-11 min-w-[3rem] px-3 text-xs sm:min-h-12 sm:min-w-[3.5rem] sm:px-5 sm:text-sm"
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
										? "min-h-11 min-w-[3rem] border-white bg-white/10 px-3 text-xs opacity-100 hover:bg-[#1EAEDB] hover:text-white sm:min-h-12 sm:min-w-[3.5rem] sm:px-5 sm:text-sm"
										: "min-h-11 min-w-[3rem] px-3 text-xs sm:min-h-12 sm:min-w-[3.5rem] sm:px-5 sm:text-sm"
								}
								asChild
							>
								<Link href="/bg">BG</Link>
							</Button>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
