import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/a6HhFsV3-DN9Z-yP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pt-28 md:pt-36">
        <span className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-4 py-1 text-sm font-medium text-yellow-400 ring-1 ring-yellow-500/30">
          <Rocket className="h-4 w-4" />
          Aeroone – Luftaufnahmen in 4K/5.1K
        </span>
        <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
          Präzise Drohnenaufnahmen
          <span className="block bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">für Marken, Events und Immobilien</span>
        </h1>
        <p className="max-w-2xl text-base text-gray-300 md:text-lg">
          Wir liefern beeindruckende Luftbilder und Videos in Kinoqualität (24–60 FPS) – sicher, gesetzeskonform und deutschlandweit.
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <a
            href="mailto:hello@aeroone.de?subject=Service%20anfragen%20-%20Aeroone&body=Hallo%20Aeroone%2C%0A%0Ich%20m%C3%B6chte%20folgende%20Drohnen-Dienstleistung%20anfragen%3A%0A%0AProjekt%3A%20%0AOrt%3A%20%0ATermin%3A%20%0ABudget%3A%20%0A%0AVielen%20Dank!"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-orange-500/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
          >
            Service anfragen
          </a>
          <span className="text-sm text-gray-400">Antwort innerhalb von 24h</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
