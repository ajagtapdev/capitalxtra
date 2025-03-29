import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { getLocale } from "gt-next/server";
import { GTProvider } from "gt-next";

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "capitalX - AI-Powered Credit Card Management",
	description: "Automatically select the best credit card for every purchase",
	icons: {
		icon: "/favicon.ico",
	},
};

export default async function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang={await getLocale()}>
			<body className={`${geistMono.variable} antialiased`}>
				<GTProvider>{children}</GTProvider>
			</body>
		</html>
	);
}
