import Image from "next/image";
import ContactForm from "./components/ContactForm";
import ReisekartenSection from "./components/ReisekartenSection";
import AngebotPopup from "./components/AngebotPopup";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2000&auto=format&fit=crop";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900">
      <AngebotPopup />
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
          <span className="font-display text-xl font-medium tracking-tight text-white drop-shadow-sm md:text-2xl">
            Reisen mit Ilija
          </span>
          <a
            href="#kontakt"
            className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/25"
          >
            Kontakt
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-end">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt="Reise- und Landschaftsimpression"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/40 to-stone-900/30"
            aria-hidden
          />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-32 lg:px-8 lg:pb-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-teal-200">
            Begleitete Senior*innenreisen · Persönlich · Unvergesslich
          </p>
          <h1 className="font-display max-w-3xl text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
            Entspannte Gruppenreisen mit persönlicher Betreuung.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-stone-200 md:text-xl">
            Für Pensionist*innen und Senior*innen, die nicht alleine reisen
            möchten – organisiert von Ilija, Geograph und erfahrener Reisebegleiter.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-full bg-teal-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-900/30 transition hover:bg-teal-400"
            >
              Interesse melden
            </a>
            <a
              href="#ueber-uns"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-base font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Mehr erfahren
            </a>
          </div>
        </div>
      </section>

      {/* Vertrauen-Streifen */}
      <section className="bg-white border-b border-stone-100">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-y divide-stone-100 lg:grid-cols-4 lg:divide-y-0">
            <div className="flex flex-col items-center px-6 py-7 text-center">
              <span className="text-3xl">🎓</span>
              <p className="mt-3 text-sm font-semibold text-stone-800">Geographie-Absolvent</p>
              <p className="mt-0.5 text-xs text-stone-500">Universität Wien</p>
            </div>
            <div className="flex flex-col items-center px-6 py-7 text-center">
              <span className="text-3xl">🏠</span>
              <p className="mt-3 text-sm font-semibold text-stone-800">3 Jahre Pensionist*innenbetreuer</p>
              <p className="mt-0.5 text-xs text-stone-500">KWP – Kuratorium Wiener Pensionisten-Wohnhäuser</p>
            </div>
            <div className="flex flex-col items-center px-6 py-7 text-center">
              <span className="text-3xl">🏫</span>
              <p className="mt-3 text-sm font-semibold text-stone-800">Lehrer</p>
              <p className="mt-0.5 text-xs text-stone-500">Wien & Linz</p>
            </div>
            <div className="flex flex-col items-center px-6 py-7 text-center">
              <span className="text-3xl">🗣️</span>
              <p className="mt-3 text-sm font-semibold text-stone-800">Deutsch & Kroatisch</p>
              <p className="mt-0.5 text-xs text-stone-500">Österreich & Kroatien-Kenner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Warum mit Ilija reisen */}
      <section className="py-16 lg:py-20 border-b border-stone-200/80 bg-[#faf8f5]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-10h-1M4.34 12h-1m14.95-6.95-.71.71M6.05 17.24l-.71.71m12.02 0-.71-.71M6.05 6.76l-.71-.71M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7z" />
                </svg>
              </div>
              <p className="mt-4 text-sm font-semibold text-stone-800">Entspannte Reisen ohne Hektik</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" />
                </svg>
              </div>
              <p className="mt-4 text-sm font-semibold text-stone-800">Gemeinsam statt alleine reisen</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <p className="mt-4 text-sm font-semibold text-stone-800">Gut organisiert und betreut</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <p className="mt-4 text-sm font-semibold text-stone-800">Persönlich, herzlich und kompetent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Über uns */}
      <section
        id="ueber-uns"
        className="border-b border-stone-200/80 bg-white py-20 lg:py-28"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-teal-600">
              Geographie-Absolvent · Lehrer · Reisebegleiter
            </p>
            <h2 className="font-display text-3xl font-medium text-stone-900 md:text-4xl">
              Über Ilija
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-600">
              Ich plane entspannte und gut organisierte Gruppenreisen für
              Pensionist*innen und Senior*innen, die nicht alleine reisen
              möchten. Die Durchführung erfolgt in Zusammenarbeit mit einem
              Reiseveranstalter.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-stone-600">
              Ich habe Geographie an der Universität Wien studiert und mich in
              meiner Abschlussarbeit intensiv mit der Alltagsmobilität der
              Generation 65+ beschäftigt. Als Lehrer in Wien und Linz bringe
              ich langjährige Erfahrung in der Organisation und Begleitung von
              Gruppen mit.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-stone-600">
              Während meines Studiums habe ich außerdem drei Jahre als
              Pensionist*innenbetreuer für das KWP (Kuratorium Wiener
              Pensionisten-Wohnhäuser) gearbeitet und dabei zahlreiche Ausflüge
              und Aktivitäten mit Pensionist*innen organisiert und begleitet.
              Dadurch konnte ich wertvolle Erfahrung im Umgang mit älteren
              Menschen sammeln.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-stone-600">
              Ich spreche Deutsch und Kroatisch und kenne Österreich sowie
              Kroatien sehr gut.
            </p>
            <ul className="mt-8 space-y-3 text-stone-700">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                Individuelle Betreuung statt Massentourismus
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                Fokus auf Barrierefreiheit und ruhiges Reisen
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                Persönlicher Ansprechpartner von Anfang bis Ende
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                3 Jahre Pensionist*innenbetreuer beim KWP – viel Erfahrung mit
                älteren Menschen
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200 shadow-xl ring-1 ring-stone-900/5">
            <Image
              src="/ilja.jpg"
              alt="Ilija – Reisen mit Ilija"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Reiseziele */}
      <section id="reiseziele" className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-medium text-stone-900 md:text-4xl">
              Geplante Reiseziele
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-600">
              Die erste Reise nach Kroatien ist bereits verfügbar – weitere
              Destinationen sind in Planung:
            </p>
          </div>
          <ReisekartenSection />
          <p className="mt-10 text-center text-sm text-stone-500">
            Weitere Ziele möglich – meld dich einfach mit deinen Wünschen.
          </p>
        </div>
      </section>

      {/* Kontakt */}
      <section
        id="kontakt"
        className="border-t border-stone-200 bg-gradient-to-b from-teal-50/80 to-[#faf8f5] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-medium text-stone-900 md:text-4xl">
              Interesse? Melde dich!
            </h2>
            <p className="mt-4 text-stone-600">
              Kein Buchungssystem – einfach Kontakt aufnehmen und unverbindlich
              Interesse bekunden. Ilija meldet sich persönlich.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-lg rounded-2xl border border-stone-200/80 bg-white p-8 shadow-lg shadow-stone-900/5">
            <ContactForm />
          </div>

          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-6 text-sm text-stone-500">
            <a href="tel:+436776472130" className="transition hover:text-teal-600">
              +43 677 647 213 00
            </a>
            <a
              href="https://wa.me/436776472130"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-teal-600"
            >
              WhatsApp
            </a>
            <a href="mailto:office@reisenmitilija.com" className="transition hover:text-teal-600">
              office@reisenmitilija.com
            </a>
            <a
              href="https://www.instagram.com/reisenmitilija"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-teal-600"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/ReisenmitIlija"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-teal-600"
            >
              Facebook
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-white py-10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-center font-display text-base text-stone-400 italic mb-6">
            Gemeinsam unterwegs – schöne Momente erleben!
          </p>
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-stone-500 md:flex-row">
            <p>
              © {new Date().getFullYear()} Reisen mit Ilija. Alle Rechte
              vorbehalten.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/reisenmitilija"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-teal-600"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/ReisenmitIlija"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-teal-600"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
