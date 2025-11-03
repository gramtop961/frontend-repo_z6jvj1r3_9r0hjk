import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const photos = [
  {
    src:
      'https://images.unsplash.com/photo-1502772066658-3009bb9cc676?q=80&w=1600&auto=format&fit=crop',
    title: 'Stadt bei Nacht',
    subtitle: 'Rauschfreie Detailtiefe, perfekte Linien',
  },
  {
    src:
      'https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?q=80&w=1600&auto=format&fit=crop',
    title: 'Küstenlinie',
    subtitle: 'Cinematic Dynamic Range, natürliche Farben',
  },
  {
    src:
      'https://images.unsplash.com/photo-1465414829459-d228b58caf6e?q=80&w=1600&auto=format&fit=crop',
    title: 'Berge & Nebel',
    subtitle: 'Knackige Schärfe, sanfte Übergänge',
  },
  {
    src:
      'https://images.unsplash.com/photo-1521335629791-ce4aec67ddaf?q=80&w=1600&auto=format&fit=crop',
    title: 'Architektur',
    subtitle: 'Saubere Geometrie, präzise Komposition',
  },
  {
    src:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    title: 'Wald & Wege',
    subtitle: 'Texturen mit Tiefe, kontrolliertes Licht',
  },
  {
    src:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop',
    title: 'See bei Sonnenaufgang',
    subtitle: 'Weiche Gradients, hohe Farbtiefe',
  },
];

export default function QualityGallery() {
  return (
    <section id="galerie" className="relative bg-black py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(255,200,0,0.08),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400/15 ring-1 ring-yellow-300/30">
            <Star className="h-5 w-5 text-yellow-400" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Bildqualität, die überzeugt</h2>
            <p className="text-zinc-400">Beispiele für unser klares, filmisches Luftbild – scharf, stabil, farbecht.</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {photos.map((p, i) => (
            <motion.figure
              key={p.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/40"
            >
              <img
                src={p.src}
                alt={`${p.title} – ${p.subtitle}`}
                className="h-64 w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <figcaption className="text-white font-medium">{p.title}</figcaption>
                <p className="text-sm text-zinc-300">{p.subtitle}</p>
              </div>
            </motion.figure>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-yellow-100">
          4K/6K Mastering • 10‑Bit Log • ND‑gestütztes Motion‑Blur • präzise Farbkorrektur • ruckelfreie Tracking‑Shots
        </div>
      </div>
    </section>
  );
}
