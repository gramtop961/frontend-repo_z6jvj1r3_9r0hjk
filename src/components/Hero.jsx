import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black pointer-events-none" />
      <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-yellow-400/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-white/10 text-yellow-300 border border-yellow-300/30">
          EU‑versicherte Drohnenproduktion • 4K/5.1K • 24–120 FPS
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Aerial Cinematics aus Gütersloh
        </h1>
        <p className="mt-4 text-white/80 max-w-3xl mx-auto">
          Wir liefern präzise, stabile Luftaufnahmen mit eindrucksvollem Dynamikumfang –
          rechtssicher, effizient und einsatzbereit in ganz NRW.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#kontakt"
            className="px-5 py-3 rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold"
          >
            Projekt anfragen
          </a>
          <a href="#gofilm-20" className="px-5 py-3 rounded-md border border-white/20 text-white/90 hover:text-white">
            Technik ansehen
          </a>
        </div>
        <p className="mt-6 text-xs text-white/60">Operativer Standort: Gütersloh</p>
      </div>
    </section>
  );
}
