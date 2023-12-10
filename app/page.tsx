import ProductCard from '@/components/product-card';
import Image from 'next/image';

const flavoursHookah = [
	{
		id: 1,
		name: 'Bad Girl',
		content: 'ГРЕЙПФРУТ И ЛАЙМ',
		price: 25,
	},
	{
		id: 2,
		name: 'Cleopatra',
		content: 'ГРЕЙПФРУТ, ЛАЙМ И ЛИМОН',
		price: 25,
	},
	{
		id: 3,
		name: 'Ama Girls',
		content: 'ПОРТОКАЛ, ЛИМОН И МЕНТА',
		price: 25,
	},
	{
		id: 4,
		name: 'Red Lagoon',
		content: 'БОДЛИВА КРУША И ЛЕД',
		price: 25,
	},
	{
		id: 5,
		name: 'Unforgiven',
		content: 'БОДЛИВА КРУША',
		price: 25,
	},
	{
		id: 6,
		name: 'Cosa Nostra',
		content: 'СИНИ ПЛОДОВЕ И МЕНТА',
		price: 25,
	},
	{
		id: 7,
		name: 'Casanova',
		content: 'СИНИ ПЛОДОВЕ И ПЪПЕШ',
		price: 25,
	},
	{
		id: 8,
		name: 'Lucifer',
		content: 'ЗЕЛЕНА ЯБЪЛКА И ЯГОДА',
		price: 25,
	},
	{
		id: 9,
		name: 'Bonnie & Clyde',
		content: 'ЗЕЛЕНА ЯБЪЛКА И МЕНТА',
		price: 25,
	},
	{
		id: 10,
		name: 'Don Hookah',
		content: 'ДРАКОНОВ ПЛОД',
		price: 25,
	},
	{
		id: 11,
		name: 'Franklin',
		content: 'ШАМ ФЪСТЪК И ВАНИЛИЯ',
		price: 25,
	},
	{
		id: 12,
		name: 'African Queen',
		content: 'БОРОВИНКА, ЯГОДА И ПЪПЕШ',
		price: 25,
	},
	{
		id: 13,
		name: 'African King',
		content: 'МИКС ОТ 26 ВИДА ПЛОД',
		price: 25,
	},
	{
		id: 14,
		name: 'Disco',
		content: 'ПРАСКОВА И МЕНТА',
		price: 25,
	},
	{
		id: 15,
		name: 'TNT',
		content: 'БОРОВИНКА, МАЛИНА И ДИВА ЯГОДА',
		price: 25,
	},
];

export default function Home() {
	return (
		<>
			<div className="absolute grid w-full mt-10  object-center justify-center text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
				{flavoursHookah.map((flavour) => (
					<ProductCard
						key={flavour.id}
						id={flavour.id}
						name={flavour.name}
						content={flavour.content}
						price={flavour.price}
					/>
				))}
			</div>
		</>
	);
}
