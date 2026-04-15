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
		src: "/badgirl.jpeg",
	},
	{
		id: 2,
		name: "Cleopatra",
		content: "ГРЕЙПФРУТ, ЛАЙМ И ЛИМОН",
		price: 30,
		src: "/cleopatra.jpeg",
	},
	{
		id: 3,
		name: "Ama Girls",
		content: "ПОРТОКАЛ, ЛИМОН И МЕНТА",
		price: 30,
		src: "/amagirls.jpeg",
	},
	{
		id: 4,
		name: "Red Lagoon",
		content: "БОДЛИВА КРУША И ЛЕД",
		price: 30,
		src: "/redlagoon.jpeg",
	},
	{
		id: 5,
		name: "Unforgiven",
		content: "БОДЛИВА КРУША",
		price: 30,
		src: "/unforgiven.jpeg",
	},
	{
		id: 6,
		name: "Cosa Nostra",
		content: "СИНИ ПЛОДОВЕ И МЕНТА",
		price: 30,
		src: "/cosanostra.jpeg",
	},
	{
		id: 7,
		name: "Casanova",
		content: "СИНИ ПЛОДОВЕ И ПЪПЕШ",
		price: 30,
		src: "/casanova.jpeg",
	},
	{
		id: 8,
		name: "Lucifer",
		content: "ЗЕЛЕНА ЯБЪЛКА И ЯГОДА",
		price: 30,
		src: "/lucifer.jpeg",
	},
	{
		id: 9,
		name: "Bonnie & Clyde",
		content: "ЗЕЛЕНА ЯБЪЛКА И МЕНТА",
		price: 30,
		src: "/bonnieclyde.jpeg",
	},
	{
		id: 10,
		name: "Don Hookah",
		content: "ДРАКОНОВ ПЛОД",
		price: 30,
		src: "/donhookah.jpeg",
	},
	{
		id: 11,
		name: "Franklin",
		content: "ШАМ ФЪСТЪК И ВАНИЛИЯ",
		price: 30,
		src: "/franklin.jpeg",
	},
	{
		id: 12,
		name: "African Queen",
		content: "БОРОВИНКА, ЯГОДА И ПЪПЕШ",
		price: 30,
		src: "/africanqueen.jpeg",
	},
	{
		id: 13,
		name: "African King",
		content: "МИКС ОТ 26 ВИДА ПЛОД",
		price: 30,
		src: "/africanking.jpeg",
	},
	{
		id: 14,
		name: "Disco",
		content: "ПРАСКОВА И МЕНТА",
		price: 30,
		src: "/disco.jpeg",
	},
	{
		id: 15,
		name: "TNT",
		content: "БОРОВИНКА, МАЛИНА И ДИВА ЯГОДА",
		price: 30,
		src: "/tnt.jpeg",
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
			<div className="px-5 sm:px-8 lg:px-10 max-w-[1200px] mx-auto py-10 sm:py-12 lg:py-14 space-y-10 border-b border-[#202020]">
				<div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
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
				</div>

				<div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-stretch">
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
			</div>
		</>
	);
}
