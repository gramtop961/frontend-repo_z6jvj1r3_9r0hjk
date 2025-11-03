import React from 'react';
import { Camera, Film, Gauge, ShieldCheck, Star } from 'lucide-react';

// Small info chip used to scatter compact facts across the page
const InfoChip = ({ icon: Icon, title, text }) => (
  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-neutral-900/60 p-4">
    <div className="mt-0.5 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-400/15 text-yellow-300 ring-1 ring-yellow-400/30">
      <Icon className="h-4 w-4" />
    </div>
    <div className="text-sm">
      <p className="font-semibold text-white">{title}</p>
      <p className="mt-1 text-gray-300">{text}</p>
    </div>
  </div>
);

const videos = [
  {
    src: 'https://cdn.coverr.co/videos/coverr-dramatic-aerial-footage-of-rocky-sea-1555/1080p.mp4',
    title: 'Küste bei Sonnenuntergang',
  },
  {
    src: 'https://cdn.coverr.co/videos/coverr-aerial-view-of-waves-1945/1080p.mp4',
    title: 'Brandung – Detailaufnahme',
  },
  {
    src: 'https://cdn.coverr.co/videos/coverr-aerial-of-road-in-the-desert-1447/1080p.mp4',
    title: 'Roadtrip im Morgenlicht',
  },
  {
    src: 'https://cdn.coverr.co/videos/coverr-amazing-aerial-view-of-iceland-8752/1080p.mp4',
    title: 'Weite Landschaft',
  },
];

const VideoCard = ({ src, title }) => (
  <div className="group relative aspect-video w-[320px] flex-shrink-0 overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
    <video
      className="h-full w-full object-cover"
      src={src}
      muted
      loop
      playsInline
      autoPlay
      controls={false}
    />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 transition group-hover:opacity-60" />
    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
      <p className="text-sm font-medium text-white">{title}</p>
      <span className="rounded-full bg-yellow-400/20 px-2 py-0.5 text-xs font-semibold text-yellow-300 ring-1 ring-yellow-400/30">
        4K
      </span>
    </div>
  </div>
);

const Stars = ({ count = 5 }) => (
  <div className="flex items-center gap-1 text-yellow-400">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < count ? 'fill-yellow-400' : 'opacity-30'}`} />
    ))}
  </div>
);

const FlowSections = () => {
  return (
    <main>
      {/* Showcase */}
      <section id="showcase" className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Showcase
              <span className="ml-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Luftvideo-Highlights
              </span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-gray-400 md:text-base">
              Eine Auswahl aktueller Projekte – flüssig, detailreich und perfekt stabilisiert.
            </p>
          </div>
        </div>

        <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 py-2">
          {videos.map((v, i) => (
            <div key={i} className="snap-start">
              <VideoCard src={v.src} title={v.title} />
            </div>
          ))}
        </div>

        {/* Compact scattered info chips under the showcase */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <InfoChip
            icon={Camera}
            title="Bildqualität"
            text="4K/5.1K in 24–60 FPS, D‑Log – saubere Farben, hohe Bitraten, starkes Low-Light."
          />
          <InfoChip
            icon={Film}
            title="Drohnen"
            text="DJI Mavic 3, Nazgul F4/F6 (FPV), GoFilm 20 – für Innenräume und dynamische Verfolgungen."
          />
          <InfoChip
            icon={Gauge}
            title="Stabil & präzise"
            text="Cinematische Bewegungen, ND‑Filter, exakte Belichtung und sanfte Parallaxen."
          />
        </div>
      </section>

      {/* Stacked feature band to lengthen the page */}
      <section className="border-y border-white/10 bg-neutral-950/60 py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 md:grid-cols-4">
          <InfoChip
            icon={ShieldCheck}
            title="EU‑versichert"
            text="Genehmigungen inklusive, strukturierte Flight‑Checks."
          />
          <InfoChip
            icon={Camera}
            title="Formate"
            text="ProRes / H.264 / H.265 – sofort einsatzbereit für Schnitt & Grading."
          />
          <InfoChip
            icon={Film}
            title="Einsatzbereit"
            text="Operativ deutschlandweit – innerhalb von 72 Stunden."
          />
          <InfoChip
            icon={Gauge}
            title="Effizient"
            text="Schnelle Übergabe über Cloud, redundante Sicherungen."
          />
        </div>
      </section>

      {/* Compact gear details split into scattered mini blocks to keep information concise */}
      <section id="gear" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Unsere Aufnahmen
            <span className="ml-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              und Drohnenflotte
            </span>
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-400 md:text-base">
            Kompakt erklärt – in kleine, gut verdauliche Abschnitte aufgeteilt.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-12">
          <div className="md:col-span-5">
            <InfoChip
              icon={Camera}
              title="Mavic 3"
              text="Leise, stabil, detailreich – ideal für Werbung & Immobilien."
            />
          </div>
          <div className="md:col-span-7">
            <InfoChip
              icon={Film}
              title="Nazgul F4/F6 (FPV)"
              text="Dynamische Verfolgungen mit hoher Präzision – perfekt für Sport & Automotive."
            />
          </div>

          <div className="md:col-span-4">
            <InfoChip
              icon={Film}
              title="GoFilm 20"
              text="Cinewhoop für enge Innenräume – sichere Close‑Ups und smoothe Shots."
            />
          </div>
          <div className="md:col-span-4">
            <InfoChip
              icon={Gauge}
              title="Cinematic Moves"
              text="Sanfte Parallaxen, präzise Geschwindigkeit, ND‑Filter für filmischen Look."
            />
          </div>
          <div className="md:col-span-4">
            <InfoChip
              icon={ShieldCheck}
              title="Sicherheit"
              text="EU‑weit versichert, Luftraumprüfung (A1/A3), SORA bei Bedarf."
            />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Kundenstimmen
            <span className="ml-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              echte Ergebnisse
            </span>
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-400 md:text-base">
            Wir arbeiten mit Marken, Agenturen und Immobilienunternehmen in ganz Deutschland.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              name: 'Lena M.',
              text:
                'Schnell, professionell und extrem hochwertiges Material. Perfekt für unsere Kampagne!',
            },
            {
              name: 'Agentur Nordlicht',
              text:
                'Reibungslose Abstimmung, top Flugsicherheit und kreativer Blick. Absolute Empfehlung.',
            },
            {
              name: 'ImmoPlus GmbH',
              text: 'Luftaufnahmen, die unsere Exposés deutlich aufwerten. Sichtbar mehr Anfragen.',
            },
          ].map((r, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-neutral-900 p-5 shadow-lg shadow-black/20">
              <Stars />
              <p className="mt-3 text-sm text-gray-300">“{r.text}”</p>
              <p className="mt-4 text-sm font-semibold text-white">{r.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Secondary scattered info row to elongate page and re-emphasize benefits */}
      <section className="py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 md:grid-cols-3">
          <InfoChip
            icon={Camera}
            title="24–60 FPS"
            text="Für Social, Web und TV – butterweiche Bewegungen."
          />
          <InfoChip
            icon={Film}
            title="Farbworkflow"
            text="D‑Log, saubere LUTs und konsistente Hauttöne."
          />
          <InfoChip
            icon={ShieldCheck}
            title="Sichere Übergabe"
            text="Cloud‑Delivery, Checksums, Backups – zuverlässig & schnell."
          />
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 md:p-12">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white md:text-3xl">Bereit für atemberaubende Luftaufnahmen?</h3>
              <p className="mt-2 max-w-2xl text-sm text-gray-400 md:text-base">
                Beschreiben Sie kurz Ihr Projekt – wir melden uns innerhalb von 24 Stunden mit einem unverbindlichen Angebot.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="mailto:hello@aeroone.de?subject=Service%20anfragen%20-%20Aeroone&body=Hallo%20Aeroone%2C%0A%0Ich%20m%C3%B6chte%20folgende%20Drohnen-Dienstleistung%20anfragen%3A%0A%0AProjekt%3A%20%0AOrt%3A%20%0ATermin%3A%20%0ABudget%3A%20%0A%0AVielen%20Dank!"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-orange-500/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
              >
                Service anfragen
              </a>
              <a
                href="tel:+49-0000-000000"
                className="inline-flex items-center justify-center rounded-md border border-yellow-400/30 px-6 py-3 text-sm font-semibold text-yellow-300 transition hover:bg-yellow-400/10 focus:outline-none focus:ring-2 focus:ring-yellow-400/30"
              >
                Jetzt anrufen
              </a>
            </div>
          </div>
          <div className="mt-6 grid gap-4 text-xs text-gray-400 md:grid-cols-3">
            <div>EU‑weit versichert & zertifiziert</div>
            <div>24–60 FPS | 4K/5.1K</div>
            <div>Operativ innerhalb von 72 Stunden verfügbar</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FlowSections;
