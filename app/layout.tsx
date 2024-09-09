import "./globals.css";
import Footer from "./footer";
import { Inter } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
})

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "http://localhost:3000";

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: "Danny Burrows Photography",
	description: "Danny Burrows Photography portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className}>
			<body className="flex flex-col min-h-screen bg-gray-200 text-black">
				<main className="flex-grow flex flex-col items-center justify-center">
					{children}
				</main>
			</body>
			<SpeedInsights />
		</html>
	);
}
