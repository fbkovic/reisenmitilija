"use client";

import { useState, useEffect } from "react";

interface KroatienDetails {
  titel: string;
  datum: string;
  gruppe: string;
  preis: string;
  beschreibung: string;
  highlights: { emoji: string; text: string }[];
  inklusive: string[];
  warumBesonders: string[];
  hotel: string;
  hinweis: string;
}

interface Reiseziel {
  land: string;
  beschreibung: string;
  verfuegbar?: boolean;
  kroatienDetails?: KroatienDetails;
}

const KROATIEN_DETAILS: KroatienDetails = {
  titel: "Genussreise nach Kroatien – entspannt & persönlich",
  datum: "08.06.2026 – 12.06.2026",
  gruppe: "max. 15 Personen",
  preis: "749 € pro Person",
  beschreibung:
    "Gemeinsam entdecken wir die wunderschöne istrische Küste – entspannt, persönlich begleitet und ohne Stress oder Hektik. Diese Reise richtet sich besonders an Pensionist*innen und Senior*innen, die gerne in kleiner Runde, sicher und angenehm reisen möchten.",
  highlights: [
    { emoji: "🏛️", text: "Pula – beeindruckende Altstadt & das berühmte römische Amphitheater" },
    { emoji: "🚤", text: "Brijuni-Inseln – einer der schönsten Nationalparks Kroatiens (Bootsfahrt & deutschsprachige Führung inklusive)" },
    { emoji: "🌊", text: "Poreč – mediterrane Altstadt & freie Zeit am Meer" },
    { emoji: "🍷", text: "Weinverkostung beim lokalen Winzer mit kleiner Jause" },
    { emoji: "🍽️", text: "Gemeinsames traditionelles Spanferkelessen in Vrsar möglich" },
  ],
  inklusive: [
    "Bus ab/bis Wien",
    "4 Nächte mit Halbpension",
    "Brijuni-Ausflug inkl. Boot & Führung",
    "Weinverkostung mit kleiner Jause",
    "Persönliche Reisebegleitung während der gesamten Reise",
  ],
  warumBesonders: [
    "Kleine, persönliche Gruppe",
    "Entspannter Ablauf",
    "Kein Massentourismus",
    "Persönliche Betreuung",
    "Genügend Zeit zum Genießen & Erholen",
  ],
  hotel: "Hotel Plavi – Plava Laguna (3★) in Poreč, direkt am Meer",
  hinweis: "Nur 15 Plätze verfügbar – frühzeitige Anmeldung empfohlen!",
};

const REISEZIELE: Reiseziel[] = [
  {
    land: "Kroatien",
    beschreibung: "Istrien & Adriaküste",
    verfuegbar: true,
    kroatienDetails: KROATIEN_DETAILS,
  },
  { land: "Slowenien", beschreibung: "Thermen & Wellness" },
  { land: "Österreich", beschreibung: "Natur & Kultur" },
  { land: "Italien", beschreibung: "Kurzreisen" },
];

export default function ReisekartenSection() {
  const [selectedReise, setSelectedReise] = useState<Reiseziel | null>(null);

  useEffect(() => {
    if (selectedReise) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedReise]);

  return (
    <>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {REISEZIELE.map((ziel) => (
          <div
            key={ziel.land}
            onClick={() => ziel.verfuegbar && setSelectedReise(ziel)}
            className={`rounded-2xl border bg-white p-6 shadow-sm ring-1 ring-stone-900/5 transition hover:shadow-md ${
              ziel.verfuegbar
                ? "cursor-pointer border-teal-200 hover:border-teal-400 hover:ring-teal-200"
                : "border-stone-200"
            }`}
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="h-1.5 w-10 rounded-full bg-teal-500" />
              {ziel.verfuegbar && (
                <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-700">
                  Verfügbar
                </span>
              )}
            </div>
            <h3 className="font-display text-xl font-medium text-stone-900">
              {ziel.land}
            </h3>
            <p className="mt-1 text-stone-500">{ziel.beschreibung}</p>
            {ziel.verfuegbar && (
              <p className="mt-3 text-sm font-medium text-teal-600">
                Details ansehen →
              </p>
            )}
          </div>
        ))}
      </div>

      {selectedReise?.kroatienDetails && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedReise(null)}
        >
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" />
          <div
            className="relative flex max-h-[90vh] w-full max-w-xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header – fixed */}
            <div className="shrink-0 px-8 pt-8 pb-5 border-b border-stone-100">
              <button
                onClick={() => setSelectedReise(null)}
                className="absolute right-5 top-5 rounded-full p-1.5 text-stone-400 transition hover:bg-stone-100 hover:text-stone-700"
                aria-label="Schließen"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
                Verfügbar
              </span>
              <h3 className="font-display mt-3 text-xl font-medium text-stone-900 md:text-2xl pr-6">
                {selectedReise.kroatienDetails.titel}
              </h3>

              {/* Key facts */}
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl bg-stone-50 px-3 py-2.5">
                  <span className="block text-base">📅</span>
                  <span className="mt-1 block text-xs font-semibold text-stone-700">{selectedReise.kroatienDetails.datum}</span>
                </div>
                <div className="rounded-xl bg-stone-50 px-3 py-2.5">
                  <span className="block text-base">👥</span>
                  <span className="mt-1 block text-xs font-semibold text-stone-700">{selectedReise.kroatienDetails.gruppe}</span>
                </div>
                <div className="rounded-xl bg-teal-50 px-3 py-2.5">
                  <span className="block text-base">💶</span>
                  <span className="mt-1 block text-xs font-semibold text-teal-700">{selectedReise.kroatienDetails.preis}</span>
                </div>
              </div>
            </div>

            {/* Scrollable body */}
            <div className="overflow-y-auto px-8 py-5 space-y-6">

              <p className="text-sm leading-relaxed text-stone-600">
                {selectedReise.kroatienDetails.beschreibung}
              </p>

              {/* Highlights */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-stone-400">
                  Reisehighlights
                </p>
                <ul className="space-y-2">
                  {selectedReise.kroatienDetails.highlights.map((h) => (
                    <li key={h.text} className="flex items-start gap-3 text-sm text-stone-700">
                      <span className="shrink-0 text-base leading-snug">{h.emoji}</span>
                      {h.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hotel */}
              <div className="rounded-xl bg-stone-50 px-4 py-3 text-sm text-stone-700">
                <span className="mr-2">🏨</span>
                <strong>Unterkunft:</strong> {selectedReise.kroatienDetails.hotel}
              </div>

              {/* Inklusive */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-stone-400">
                  Inklusive Leistungen
                </p>
                <ul className="space-y-1.5">
                  {selectedReise.kroatienDetails.inklusive.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-stone-700">
                      <span className="mt-0.5 shrink-0 text-teal-500">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warum besonders */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-stone-400">
                  Warum diese Reise besonders ist
                </p>
                <ul className="space-y-1.5">
                  {selectedReise.kroatienDetails.warumBesonders.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-stone-700">
                      <span className="mt-0.5 shrink-0 text-teal-500">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hinweis */}
              <div className="rounded-xl bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800">
                📌 {selectedReise.kroatienDetails.hinweis}
              </div>
            </div>

            {/* Footer CTA – fixed */}
            <div className="shrink-0 border-t border-stone-100 px-8 py-5">
              <a
                href="#kontakt"
                onClick={() => setSelectedReise(null)}
                className="block w-full rounded-full bg-teal-500 px-6 py-3.5 text-center text-base font-semibold text-white shadow-lg shadow-teal-900/20 transition hover:bg-teal-400"
              >
                Interesse melden
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
