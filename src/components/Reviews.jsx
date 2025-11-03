import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Lena M.',
    text:
      'Schnell, professionell und extrem hochwertiges Material. Perfekt für unsere Kampagne!',
    rating: 5,
  },
  {
    name: 'Agentur Nordlicht',
    text:
      'Reibungslose Abstimmung, top Flugsicherheit und kreativer Blick. Absolute Empfehlung.',
    rating: 5,
  },
  {
    name: 'ImmoPlus GmbH',
    text:
      'Luftaufnahmen, die unsere Exposés deutlich aufwerten. Sichtbar mehr Anfragen.',
    rating: 5,
  },
];

const Stars = ({ count }) => (
  <div className="flex items-center gap-1 text-yellow-400">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < count ? 'fill-yellow-400' : 'opacity-30'}`}
      />
    ))}
  </div>
);

const Reviews = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
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
        {reviews.map((r, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/10 bg-neutral-900 p-5 shadow-lg shadow-black/20"
          >
            <Stars count={r.rating} />
            <p className="mt-3 text-sm text-gray-300">“{r.text}”</p>
            <p className="mt-4 text-sm font-semibold text-white">{r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
