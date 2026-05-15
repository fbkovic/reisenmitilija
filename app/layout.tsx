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
  title: "Reisen mit Ilija | Seniorenreisen Österreich & Europa",
  description:
    "Begleitete Seniorenreisen aus Österreich nach Kroatien, Slowenien, Österreich & Italien. Entspannte Gruppenreisen für Pensionist*innen mit persönlicher Betreuung – organisiert von Ilija, Geograph und KWP-Pensionistenbetreuer aus Wien.",
  metadataBase: new URL("https://reisenmitilija.com"),
  keywords: [
    "Seniorenreisen Österreich",
    "Seniorenreisen Kroatien",
    "Seniorenreisen Slowenien",
    "Seniorenreisen Italien",
    "begleitete Gruppenreisen",
    "Reisen für Pensionisten",
    "Seniorenreise Wien",
    "Kroatien Seniorenreise",
    "Slowenien Seniorenreise",
    "Italien Seniorenreise",
    "Reisebegleitung ältere Menschen",
    "Gruppenreise mit Betreuung",
    "Reisen mit Ilija",
    "Pensionistenreise",
    "barrierefreie Reisen",
    "betreute Reisen",
  ],
  authors: [{ name: "Ilija", url: "https://reisenmitilija.com" }],
  creator: "Ilija",
  publisher: "Reisen mit Ilija",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Reisen mit Ilija | Begleitete Senior*innenreisen",
    description:
      "Entspannte Gruppenreisen für Pensionist*innen mit persönlicher Betreuung. Gemeinsam unterwegs – schöne Momente erleben!",
    url: "https://reisenmitilija.com",
    siteName: "Reisen mit Ilija",
    locale: "de_AT",
    type: "website",
    images: [
      {
        url: "/ilja.jpg",
        width: 800,
        height: 600,
        alt: "Ilija – Reiseleiter und Pensionistenbetreuer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reisen mit Ilija | Begleitete Senior*innenreisen",
    description:
      "Entspannte Gruppenreisen für Pensionist*innen mit persönlicher Betreuung. Jetzt unverbindlich Interesse melden!",
    images: ["/ilja.jpg"],
  },
  alternates: {
    canonical: "https://reisenmitilija.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Reisen mit Ilija",
  description:
    "Begleitete Gruppenreisen für Pensionist*innen und Senior*innen mit persönlicher Betreuung.",
  url: "https://reisenmitilija.com",
  telephone: "+4367764721300",
  email: "office@reisenmitilija.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AT",
    addressLocality: "Wien",
  },
  founder: {
    "@type": "Person",
    name: "Ilija",
    jobTitle: "Reisebegleiter, Geograph, Lehrer",
    knowsLanguage: ["de", "hr"],
  },
  sameAs: [
    "https://www.instagram.com/reisenmitilija",
    "https://www.facebook.com/ReisenmitIlija",
  ],
  offers: {
    "@type": "Offer",
    description:
      "Begleitete Gruppenreisen für Pensionist*innen und Senior*innen",
    areaServed: {
      "@type": "Country",
      name: "Österreich",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${fraunces.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
