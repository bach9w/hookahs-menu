import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Sofia_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';

const inter = Sofia_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'SAPID',
	description: 'HOOKAH MENU',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Header />
			<body className={inter.className}>{children}</body>
		</html>
	);
}
