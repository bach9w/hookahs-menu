import ProductCard from "@/components/product-card";
import Image from "next/image";
import { useTranslations } from "next-intl";

const flavoursHookah = [
	{
		id: 1,
		name: "Bad Girl",
		content: "ГРЕЙПФРУТ И ЛАЙМ",
		price: 25,
		src: "/badgirl.jpeg",
	},
	{
		id: 2,
		name: "Cleopatra",
		content: "ГРЕЙПФРУТ, ЛАЙМ И ЛИМОН",
		price: 25,
		src: "/cleopatra.jpeg",
	},
	{
		id: 3,
		name: "Ama Girls",
		content: "ПОРТОКАЛ, ЛИМОН И МЕНТА",
		price: 25,
		src: "/amagirls.jpeg",
	},
	{
		id: 4,
		name: "Red Lagoon",
		content: "БОДЛИВА КРУША И ЛЕД",
		price: 25,
		src: "/redlagoon.jpeg",
	},
	{
		id: 5,
		name: "Unforgiven",
		content: "БОДЛИВА КРУША",
		price: 25,
		src: "/unforgiven.jpeg",
	},
	{
		id: 6,
		name: "Cosa Nostra",
		content: "СИНИ ПЛОДОВЕ И МЕНТА",
		price: 25,
		src: "/cosanostra.jpeg",
	},
	{
		id: 7,
		name: "Casanova",
		content: "СИНИ ПЛОДОВЕ И ПЪПЕШ",
		price: 25,
		src: "/casanova.jpeg",
	},
	{
		id: 8,
		name: "Lucifer",
		content: "ЗЕЛЕНА ЯБЪЛКА И ЯГОДА",
		price: 25,
		src: "/lucifer.jpeg",
	},
	{
		id: 9,
		name: "Bonnie & Clyde",
		content: "ЗЕЛЕНА ЯБЪЛКА И МЕНТА",
		price: 25,
		src: "/bonnieclyde.jpeg",
	},
	{
		id: 10,
		name: "Don Hookah",
		content: "ДРАКОНОВ ПЛОД",
		price: 25,
		src: "/donhookah.jpeg",
	},
	{
		id: 11,
		name: "Franklin",
		content: "ШАМ ФЪСТЪК И ВАНИЛИЯ",
		price: 25,
		src: "/franklin.jpeg",
	},
	{
		id: 12,
		name: "African Queen",
		content: "БОРОВИНКА, ЯГОДА И ПЪПЕШ",
		price: 25,
		src: "/africanqueen.jpeg",
	},
	{
		id: 13,
		name: "African King",
		content: "МИКС ОТ 26 ВИДА ПЛОД",
		price: 25,
		src: "/africanking.jpeg",
	},
	{
		id: 14,
		name: "Disco",
		content: "ПРАСКОВА И МЕНТА",
		price: 25,
		src: "/disco.jpeg",
	},
	{
		id: 15,
		name: "TNT",
		content: "БОРОВИНКА, МАЛИНА И ДИВА ЯГОДА",
		price: 25,
		src: "/tnt.jpeg",
	},
];

export default function Home() {
	const t = useTranslations("flavour");
	return (
		<>
			<div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-8">
				<div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-items-center">
					{flavoursHookah.map((flavour) => (
						<ProductCard
							key={flavour.id}
							id={flavour.id}
							name={flavour.name}
							content={t(`${flavour.id}`)}
							price={flavour.price}
							src={flavour.src}
						/>
					))}
				</div>
			</div>
		</>
	);
}
