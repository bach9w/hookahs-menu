import type { Metadata } from 'next';

import { Sofia_Sans } from 'next/font/google';
import '../globals.css';
import Header from '@/components/header';
import { notFound } from 'next/navigation';

const locales = ['en', 'bg'];

const inter = Sofia_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'SAPID',
	description: 'HOOKAH MENU',
};

export default function RootLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	if (!locales.includes(locale as any)) notFound();
	return (
		<html lang={locale}>
			<Header />
			<body className={inter.className}>{children}</body>
		</html>
	);
}
