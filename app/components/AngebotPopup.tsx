"use client";

import { useState, useEffect } from "react";

export default function AngebotPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={() => setOpen(false)}
    >
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" />
      <div
        className="relative flex max-h-[90vh] w-full max-w-xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="shrink-0 bg-gradient-to-br from-teal-500 to-teal-600 px-8 pt-8 pb-6 text-white">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 rounded-full p-1.5 text-white/70 transition hover:bg-white/20 hover:text-white"
            aria-label="Schließen"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            🌊 Jetzt verfügbar
          </span>
          <h2 className="font-display mt-3 text-xl font-medium leading-snug md:text-2xl">
            Genussreise nach Kroatien –<br />entspannt & persönlich 🇭🇷
          </h2>

          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            <div className="rounded-xl bg-white/15 px-2 py-2.5">
              <span className="block text-base">📅</span>
              <span className="mt-1 block text-xs font-semibold">08.06.–12.06.2026</span>
            </div>
            <div className="rounded-xl bg-white/15 px-2 py-2.5">
              <span className="block text-base">👥</span>
              <span className="mt-1 block text-xs font-semibold">max. 15 Personen</span>
            </div>
            <div className="rounded-xl bg-white/25 px-2 py-2.5">
              <span className="block text-base">💶</span>
              <span className="mt-1 block text-xs font-semibold">749 € p. P.</span>
            </div>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto px-8 py-5 space-y-5">
          <p className="text-sm leading-relaxed text-stone-600">
            Gemeinsam entdecken wir die wunderschöne istrische Küste – entspannt,
            persönlich begleitet und ohne Stress oder Hektik. Ideal für
            Pensionist*innen und Senior*innen, die gerne in kleiner Runde sicher
            und angenehm reisen möchten.
          </p>

          {/* Highlights */}
          <div>
            <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-stone-400">
              Reisehighlights
            </p>
            <ul className="space-y-2">
              {[
                { emoji: "🏛️", text: "Pula – Altstadt & römisches Amphitheater" },
                { emoji: "🚤", text: "Brijuni-Inseln – Bootsfahrt & Führung inklusive" },
                { emoji: "🌊", text: "Poreč – mediterrane Altstadt & freie Zeit am Meer" },
                { emoji: "🍷", text: "Weinverkostung beim lokalen Winzer" },
                { emoji: "🍽️", text: "Traditionelles Spanferkelessen in Vrsar möglich" },
              ].map((h) => (
                <li key={h.text} className="flex items-start gap-3 text-sm text-stone-700">
                  <span className="shrink-0 leading-snug">{h.emoji}</span>
                  {h.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Inklusive */}
          <div>
            <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-stone-400">
              Inklusive
            </p>
            <ul className="space-y-1.5">
              {[
                "Bus ab/bis Wien",
                "4 Nächte mit Halbpension",
                "Brijuni-Ausflug inkl. Boot & Führung",
                "Weinverkostung mit kleiner Jause",
                "Persönliche Reisebegleitung",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-stone-700">
                  <span className="mt-0.5 shrink-0 text-teal-500">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Hotel */}
          <div className="rounded-xl bg-stone-50 px-4 py-3 text-sm text-stone-700">
            🏨 <strong>Unterkunft:</strong> Hotel Plavi – Plava Laguna (3★) in Poreč, direkt am Meer
          </div>

          {/* Hinweis */}
          <div className="rounded-xl bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800">
            📌 Nur 15 Plätze verfügbar – frühzeitige Anmeldung empfohlen!
          </div>
        </div>

        {/* Footer */}
        <div className="shrink-0 border-t border-stone-100 px-8 py-5 flex flex-col gap-3">
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="block w-full rounded-full bg-teal-500 px-6 py-3.5 text-center text-base font-semibold text-white shadow-lg shadow-teal-900/20 transition hover:bg-teal-400"
          >
            Interesse melden
          </a>
          <button
            onClick={() => setOpen(false)}
            className="text-center text-sm text-stone-400 transition hover:text-stone-600"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}
