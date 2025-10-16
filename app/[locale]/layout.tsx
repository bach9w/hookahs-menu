import type { Metadata } from "next";

import { Sofia_Sans } from "next/font/google";
import "../globals.css";
import Header from "@/components/header";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const locales = ["en", "bg"];

const inter = Sofia_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "SAPID",
	description: "HOOKAH MENU",
};

export default async function RootLayout(
    props: {
        children: React.ReactNode;
        params: Promise<{ locale: string }>;
    }
) {
    const params = await props.params;

    const {
        locale
    } = params;

    const {
        children
    } = props;

    if (!locales.includes(locale as any)) notFound();

    const messages = await getMessages();

    return (
		<html lang={locale}>
			<body className={inter.className}>
				<NextIntlClientProvider messages={messages}>
					<Header />
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
