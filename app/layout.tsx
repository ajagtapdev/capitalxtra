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
	title: "capitalX",
	description: "AI powered credit card management",
	icons: {
		icon: "/favicon.ico",
	},
	openGraph: {
		videos: [{
			url: 'https://youtu.be/w17OE9qXFHc',
			width: 1280,
			height: 720,
			type: 'video/mp4',
		}]
	}
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
