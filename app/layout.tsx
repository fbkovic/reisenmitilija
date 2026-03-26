import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reisen mit Ilja | Individuelle Reiseerlebnisse",
  description:
    "Persönlich geplante Reisen und unvergessliche Momente. Bald unter reisenmitilija.at.",
  metadataBase: new URL("https://reisenmitilija.at"),
  openGraph: {
    title: "Reisen mit Ilja",
    description: "Individuelle Reiseerlebnisse – bald online.",
    locale: "de_AT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${fraunces.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
