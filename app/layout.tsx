import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Footer from "./footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Danny Burrows Photography",
  description: "Danny Burrows Photography",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="flex flex-col min-h-screen bg-white text-black">
        <main className="flex-grow flex flex-col items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
