"use client";
import ProductCard from "@/components/product-card";
import { useLocale, useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";

const flavoursHookah = [
	{
		id: 1,
		name: "Bad Girl",
		content: "ГРЕЙПФРУТ И ЛАЙМ",
		price: 30,
		src: "/badgirl.webp",
	},
	{
		id: 2,
		name: "Cleopatra",
		content: "ГРЕЙПФРУТ, ЛАЙМ И ЛИМОН",
		price: 30,
		src: "/cleopatra.webp",
	},
	{
		id: 3,
		name: "Ama Girls",
		content: "ПОРТОКАЛ, ЛИМОН И МЕНТА",
		price: 30,
		src: "/amagirls.webp",
	},
	{
		id: 4,
		name: "Red Lagoon",
		content: "БОДЛИВА КРУША И ЛЕД",
		price: 30,
		src: "/redlagoon.webp",
	},
	{
		id: 5,
		name: "Unforgiven",
		content: "БОДЛИВА КРУША",
		price: 30,
		src: "/unforgiven.webp",
	},
	{
		id: 6,
		name: "Cosa Nostra",
		content: "СИНИ ПЛОДОВЕ И МЕНТА",
		price: 30,
		src: "/cosanostra.webp",
	},
	{
		id: 7,
		name: "Casanova",
		content: "СИНИ ПЛОДОВЕ И ПЪПЕШ",
		price: 30,
		src: "/casanova.webp",
	},
	{
		id: 8,
		name: "Lucifer",
		content: "ЗЕЛЕНА ЯБЪЛКА И ЯГОДА",
		price: 30,
		src: "/lucifer.webp",
	},
	{
		id: 9,
		name: "Bonnie & Clyde",
		content: "ЗЕЛЕНА ЯБЪЛКА И МЕНТА",
		price: 30,
		src: "/bonnieclyde.webp",
	},
	{
		id: 10,
		name: "Don Hookah",
		content: "ДРАКОНОВ ПЛОД",
		price: 30,
		src: "/donhookah.webp",
	},
	{
		id: 11,
		name: "Franklin",
		content: "ШАМ ФЪСТЪК И ВАНИЛИЯ",
		price: 30,
		src: "/franklin.webp",
	},
	{
		id: 12,
		name: "African Queen",
		content: "БОРОВИНКА, ЯГОДА И ПЪПЕШ",
		price: 30,
		src: "/africanqueen.webp",
	},
	{
		id: 13,
		name: "African King",
		content: "МИКС ОТ 26 ВИДА ПЛОД",
		price: 30,
		src: "/africanking.webp",
	},
	{
		id: 14,
		name: "Disco",
		content: "ПРАСКОВА И МЕНТА",
		price: 30,
		src: "/disco.webp",
	},
	{
		id: 15,
		name: "TNT",
		content: "БОРОВИНКА, МАЛИНА И ДИВА ЯГОДА",
		price: 30,
		src: "/tnt.webp",
	},
];

export default function Home() {
	const t = useTranslations("flavour");
	const locale = useLocale();
	const [query, setQuery] = useState("");

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		if (!q) return flavoursHookah;
		return flavoursHookah.filter(
			(f) =>
				f.name.toLowerCase().includes(q) ||
				t(`${f.id}`).toLowerCase().includes(q),
		);
	}, [query, t]);

	return (
		<>
			{/* Cinematic section hero */}
			<section className="border-b border-[#202020] px-5 sm:px-8 lg:px-10">
				<div className="mx-auto max-w-[1200px] py-12 sm:py-16 lg:py-20">
					<p className="mb-5 text-[10px] font-normal uppercase tracking-[0.225px] text-[#7D7D7D]">
						SAPID
					</p>
					<h1 className="text-[clamp(2.5rem,8vw,5rem)] font-normal uppercase leading-[0.92] tracking-normal text-white">
						{locale === "bg" ? (
							"НАРГИЛЕТА"
						) : (
							<>
								HOOKAH
								<br />
								MENU
							</>
						)}
					</h1>
					<div className="mt-5 h-[2px] w-14 bg-[#FFC000]" />
				</div>
			</section>

			{/* Search + Grid */}
			<div className="mx-auto max-w-[1200px] space-y-10 border-b border-[#202020] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
				<Input
					placeholder={
						locale === "bg"
							? "Търсене по име или вкус..."
							: "Search by name or flavour..."
					}
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					className="max-w-xl rounded-none border border-[#7D7D7D] bg-black px-4 py-3 text-base text-white placeholder:text-[#7D7D7D] focus-visible:border-[#29ABE2] focus-visible:ring-[#29ABE2]"
				/>

				{filtered.length === 0 ? (
					<p className="py-16 text-center text-sm uppercase tracking-wide text-[#7D7D7D]">
						{locale === "bg" ? "Няма намерени резултати" : "No results found"}
					</p>
				) : (
					<div className="grid grid-cols-1 gap-8 place-items-stretch sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
						{filtered.map((flavour) => (
							<ProductCard
								key={flavour.id}
								id={flavour.id}
								name={flavour.name}
								content={t(`${flavour.id}`)}
								price={flavour.price}
								src={flavour.src}
								onSelect={undefined}
							/>
						))}
					</div>
				)}
			</div>
		</>
	);
}
