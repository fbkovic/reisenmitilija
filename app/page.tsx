import Image from "next/image";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2000&auto=format&fit=crop";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
          <span className="font-display text-xl font-medium tracking-tight text-white drop-shadow-sm md:text-2xl">
            Reisen mit Ilja
          </span>
          <a
            href="#kontakt"
            className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/25"
          >
            Kontakt
          </a>
        </div>
      </header>

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
            Individuell · Persönlich · Unvergesslich
          </p>
          <h1 className="font-display max-w-3xl text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
            Dein nächstes Abenteuer beginnt mit einem Gespräch.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-stone-200 md:text-xl">
            Geplante Reiseerlebnisse mit Herz und Erfahrung. Die Website wird
            gerade vorbereitet – Kontaktdaten und Impressionen folgen in Kürze.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-full bg-teal-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-900/30 transition hover:bg-teal-400"
            >
              Kontakt aufnehmen
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

      <section
        id="ueber-uns"
        className="border-b border-stone-200/80 bg-white py-20 lg:py-28"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-medium text-stone-900 md:text-4xl">
              Über uns
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-600">
              Hier entsteht der persönliche Auftritt von <strong>Reisen mit Ilja</strong>{" "}
              – mit echten Geschichten, konkreten Angeboten und Einblicken in
              geplante Touren. Sobald Texte und Bildmaterial final sind, wird
              dieser Bereich mit deinen Inhalten gefüllt.
            </p>
            <ul className="mt-8 space-y-3 text-stone-700">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                Individuelle Beratung statt Standardkatalog
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                Fokus auf Erlebnis und verlässliche Organisation
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                Persönlicher Ansprechpartner für deine Reise
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200 shadow-xl ring-1 ring-stone-900/5">
            <Image
              src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1200&auto=format&fit=crop"
              alt="Platzhalter: Reiseimpression"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-stone-900/20">
              <p className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-stone-800 shadow-sm">
                Foto folgt
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-medium text-stone-900 md:text-4xl">
              Impressionen
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-600">
              Galerie mit eigenen Fotos – Platzhalter bis die finalen Motive
              eingebunden sind.
            </p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex aspect-[4/3] items-center justify-center rounded-xl border-2 border-dashed border-stone-300 bg-stone-100/80 text-stone-500"
              >
                <span className="text-sm font-medium">Bild {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="kontakt"
        className="border-t border-stone-200 bg-gradient-to-b from-teal-50/80 to-[#faf8f5] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-medium text-stone-900 md:text-4xl">
              Kontakt
            </h2>
            <p className="mt-4 text-stone-600">
              Die endgültigen Kontaktdaten tragen wir ein, sobald du sie
              bereitstellst (Telefon, E-Mail, ggf. Adresse).
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-lg rounded-2xl border border-stone-200/80 bg-white p-8 shadow-lg shadow-stone-900/5">
            <dl className="space-y-6 text-center">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  E-Mail
                </dt>
                <dd className="mt-1 text-lg text-stone-800">
                  <span className="text-stone-400">wird ergänzt</span>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Telefon
                </dt>
                <dd className="mt-1 text-lg text-stone-800">
                  <span className="text-stone-400">wird ergänzt</span>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Web
                </dt>
                <dd className="mt-1">
                  <span className="rounded-md bg-teal-100 px-3 py-1 text-teal-900">
                    reisenmitilija.at
                  </span>
                  <span className="mt-2 block text-sm text-stone-500">
                    Domain in Vorbereitung
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-stone-500 md:flex-row md:text-left lg:px-8">
          <p>
            © {new Date().getFullYear()} Reisen mit Ilja. Alle Rechte vorbehalten.
          </p>
          <p className="max-w-md md:text-right">
            Entwickelt für Vercel – Domain und finale Inhalte folgen.
          </p>
        </div>
      </footer>
    </div>
  );
}
