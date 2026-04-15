import type { Metadata } from "next";

import { Roboto } from "next/font/google";
import "../globals.css";
import Header from "@/components/header";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const locales = ["en", "bg"];

/* LamboType fallback stack per DESIGN.md — Roboto as UI/display substitute */
const roboto = Roboto({
	subsets: ["latin", "cyrillic"],
	weight: ["300", "400", "500", "700"],
	variable: "--font-roboto",
});

export const metadata: Metadata = {
	title: "SAPID",
	description: "HOOKAH MENU",
};

export default async function RootLayout(props: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const params = await props.params;

	const { locale } = params;

	const { children } = props;

	if (!locales.includes(locale as any)) notFound();

	const messages = await getMessages();

	return (
		<html lang={locale} className={roboto.variable}>
			<body className={`${roboto.className} font-sans`}>
				<NextIntlClientProvider messages={messages}>
					<Header />
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
