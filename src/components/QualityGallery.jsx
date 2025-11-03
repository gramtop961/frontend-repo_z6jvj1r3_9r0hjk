import React from 'react';
import { Camera } from 'lucide-react';

const IMAGES = [
  {
    src:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1887&auto=format&fit=crop',
    alt: 'Küstenklippen bei goldenem Licht',
  },
  {
    src:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1887&auto=format&fit=crop',
    alt: 'Wald und Nebel von oben',
  },
  {
    src:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1887&auto=format&fit=crop',
    alt: 'Berglandschaft mit tiefem Tal',
  },
  {
    src:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1887&auto=format&fit=crop',
    alt: 'Stadt bei Nacht mit Lichtern',
  },
  {
    src:
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1887&auto=format&fit=crop',
    alt: 'Serpentinenstraße im Hochland',
  },
  {
    src:
      'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=1887&auto=format&fit=crop',
    alt: 'Dramatische Brandung aus der Luft',
  },
];

const QualityGallery = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20" aria-labelledby="quality-heading">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 id="quality-heading" className="text-2xl font-semibold text-white md:text-3xl">
            Bildqualität
            <span className="ml-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              gestochen scharf
            </span>
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-400 md:text-base">
            Kristallklare Details, saubere Kanten und präzise Farben – ideal für Kampagnen, Immobilien und Social.
          </p>
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-300 md:flex">
          <Camera className="h-4 w-4" /> 4K/5.1K
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {IMAGES.map((img, i) => (
          <figure
            key={i}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-neutral-900"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full scale-105 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between p-3 text-xs">
              <span className="rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-semibold text-white ring-1 ring-white/20">
                Aeroone
              </span>
              <span className="rounded-full bg-yellow-400/20 px-2 py-0.5 font-semibold text-yellow-300 ring-1 ring-yellow-400/30">
                4K
              </span>
            </figcaption>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default QualityGallery;
