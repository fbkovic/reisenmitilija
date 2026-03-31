"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    vorname: "",
    name: "",
    telefon: "",
    email: "",
    zustimmung: false,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ vorname: "", name: "", telefon: "", email: "", zustimmung: false });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-teal-200 bg-teal-50 p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
          <svg className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-teal-900">Vielen Dank!</h3>
        <p className="mt-2 text-teal-700">
          Deine Anfrage wurde gesendet. Ilija meldet sich bald bei dir.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="vorname" className="mb-1.5 block text-sm font-medium text-stone-700">
            Vorname <span className="text-teal-600">*</span>
          </label>
          <input
            id="vorname"
            name="vorname"
            type="text"
            required
            value={form.vorname}
            onChange={handleChange}
            placeholder="Maria"
            className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 placeholder-stone-400 transition focus:border-teal-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-200"
          />
        </div>
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-stone-700">
            Nachname <span className="text-teal-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Mustermann"
            className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 placeholder-stone-400 transition focus:border-teal-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-200"
          />
        </div>
      </div>

      <div>
        <label htmlFor="telefon" className="mb-1.5 block text-sm font-medium text-stone-700">
          Telefonnummer <span className="text-teal-600">*</span>
        </label>
        <input
          id="telefon"
          name="telefon"
          type="tel"
          required
          value={form.telefon}
          onChange={handleChange}
          placeholder="+43 123 456 78"
          className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 placeholder-stone-400 transition focus:border-teal-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-200"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-stone-700">
          E-Mail-Adresse <span className="text-stone-400 text-xs font-normal">(optional)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="maria@beispiel.at"
          className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 placeholder-stone-400 transition focus:border-teal-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-200"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="zustimmung"
          name="zustimmung"
          type="checkbox"
          required
          checked={form.zustimmung}
          onChange={handleChange}
          className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border-stone-300 text-teal-500 focus:ring-teal-300"
        />
        <label htmlFor="zustimmung" className="text-sm text-stone-600 leading-relaxed">
          Ich stimme zu, dass meine Angaben zur Kontaktaufnahme gespeichert und verarbeitet werden.{" "}
          <span className="text-teal-600">*</span>
        </label>
      </div>

      {status === "error" && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Es ist ein Fehler aufgetreten. Bitte versuche es später nochmal oder ruf direkt an.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-teal-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-900/20 transition hover:bg-teal-400 disabled:opacity-60"
      >
        {status === "loading" ? "Wird gesendet…" : "Anfrage senden"}
      </button>

      <p className="text-center text-xs text-stone-400">
        <span className="text-teal-600">*</span> Pflichtfeld
      </p>
    </form>
  );
}
