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
            <a href="mailto:office@reisenmitilija.com" className="transition hover:text-teal-600">
              office@reisenmitilija.com
            </a>
            <a
              href="https://www.instagram.com/reisenmitilija"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-teal-600"
            >
              @reisenmitilija
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-stone-500 md:flex-row md:text-left lg:px-8">
          <p>
            © {new Date().getFullYear()} Reisen mit Ilija. Alle Rechte
            vorbehalten.
          </p>
          <p>
            <a
              href="https://www.instagram.com/reisenmitilija"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-teal-600"
            >
              @reisenmitilija
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
