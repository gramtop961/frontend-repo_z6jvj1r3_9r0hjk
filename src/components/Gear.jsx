import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Film, Gauge, ShieldCheck } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6, ease: 'easeOut' } }),
};

const Gear = () => {
  return (
    <section id="gear" className="relative mx-auto max-w-7xl px-6 py-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-10"
      >
        <motion.h2 variants={fadeUp} className="text-2xl font-semibold text-white md:text-3xl">
          Unsere Aufnahmen
          <span className="ml-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            und Drohnenflotte
          </span>
        </motion.h2>
        <motion.p variants={fadeUp} custom={1} className="mt-2 max-w-2xl text-sm text-gray-400 md:text-base">
          Kinoqualität aus der Luft: gestochen scharf, stabilisiert und farbtreu. Wir liefern Material,
          das in Social, Web und TV überzeugt.
        </motion.p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-xl border border-white/10 bg-neutral-900/60 p-5 backdrop-blur"
        >
          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400/15 text-yellow-300 ring-1 ring-yellow-400/30">
            <Camera className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold text-white">Bildqualität</h3>
          <p className="mt-2 text-sm text-gray-300">4K/5.1K in 24–60 FPS, flache Profile (D-Log), hohe Bitraten für flexible Postproduktion.</p>
          <ul className="mt-3 space-y-1 text-sm text-gray-400">
            <li>• Präzise Belichtung und natürliche Farben</li>
            <li>• Cinematische Bewegungen und sanfte Parallaxen</li>
            <li>• Saubere Night- und Low-Light-Performance</li>
          </ul>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-xl border border-white/10 bg-neutral-900/60 p-5 backdrop-blur"
        >
          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400/15 text-yellow-300 ring-1 ring-yellow-400/30">
            <Film className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold text-white">Drohnen</h3>
          <ul className="mt-2 space-y-2 text-sm text-gray-300">
            <li><span className="font-medium text-white">DJI Mavic 3</span> – knackscharf, stabil und leise. Ideal für Werbung und Immobilien.</li>
            <li><span className="font-medium text-white">Nazgul F4 / F6</span> – FPV für dynamische Verfolgungen mit High-Speed Präzision.</li>
            <li><span className="font-medium text-white">GoFilm 20</span> – kompakter Cinewhoop für enge Innenräume und sichere Close-Ups.</li>
          </ul>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-yellow-400/15 px-2.5 py-1 text-yellow-300 ring-1 ring-yellow-400/30">ND-Filter</span>
            <span className="rounded-full bg-yellow-400/15 px-2.5 py-1 text-yellow-300 ring-1 ring-yellow-400/30">CineWhoop</span>
            <span className="rounded-full bg-yellow-400/15 px-2.5 py-1 text-yellow-300 ring-1 ring-yellow-400/30">FPV</span>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-xl border border-white/10 bg-neutral-900/60 p-5 backdrop-blur"
        >
          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400/15 text-yellow-300 ring-1 ring-yellow-400/30">
            <Gauge className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold text-white">Sicherheit & Prozesse</h3>
          <p className="mt-2 text-sm text-gray-300">EU-weit versichert, Genehmigungen inklusive, strukturierte Flight-Checks.</p>
          <ul className="mt-3 space-y-1 text-sm text-gray-400">
            <li>• Standort- und Luftraumprüfung (A1/A3, SORA bei Bedarf)</li>
            <li>• Redundante Speichermedien & Sicherung</li>
            <li>• Übergabe in ProRes/High Bitrate H.264/H.265</li>
          </ul>
          <div className="mt-3 inline-flex items-center gap-2 text-xs text-green-300">
            <ShieldCheck className="h-4 w-4" />
            Zertifiziert & versichert
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gear;
