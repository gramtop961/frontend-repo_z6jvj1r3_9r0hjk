import { motion, useScroll, useTransform } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section id="home" ref={ref} className="relative min-h-[92vh] overflow-hidden bg-black">
      {/* Spline full-width cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/g5OaHmrKTDxRI7Ig/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,200,0,0.12),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(255,120,0,0.10),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />

      <motion.div style={{ y, opacity }} className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-amber-200">
            <BadgeCheck className="h-4 w-4" />
            <span className="text-sm">Premium Luftaufnahmen – Gütersloh & NRW</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Kino‑Qualität aus der Luft.
            <span className="block bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-400 bg-clip-text text-transparent">
              Aeroone Luftbildproduktion
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-zinc-300">
            Wir kombinieren FPV‑Dynamik mit stabilisierten Drohnen für Werbefilm, Immobilien, Events und TV.
            Scharf, ruhig, detailreich – bereit für Ihren Auftritt.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#galerie"
              className="rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-3 font-semibold text-black shadow ring-1 ring-amber-300/40 hover:brightness-110"
            >
              Galerie ansehen
            </a>
            <a
              href="#kontakt"
              className="rounded-xl border border-zinc-700/70 px-5 py-3 font-semibold text-zinc-200 hover:bg-zinc-900/80"
            >
              Unverbindlich anfragen
            </a>
          </div>

          <p className="mt-8 text-sm text-zinc-300">Gütersloh • Region • NRW</p>
        </div>
      </motion.div>
    </section>
  );
}
