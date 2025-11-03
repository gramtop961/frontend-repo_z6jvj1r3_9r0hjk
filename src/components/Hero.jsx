import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section id="home" ref={ref} className="relative min-h-[92vh] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background video / photo */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover opacity-30"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000&auto=format&fit=crop"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-drone-sunrise-1440/1080p.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black pointer-events-none" />
      <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-yellow-400/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl pointer-events-none" />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
          className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-white/10 text-yellow-300 border border-yellow-300/30 backdrop-blur"
        >
          EU‑versicherte Drohnenproduktion • 4K/5.1K • 24–120 FPS
        </motion.span>
        <motion.h1
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight"
        >
          Aerial Cinematics aus Gütersloh
        </motion.h1>
        <motion.p
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7, ease: 'easeOut' }}
          className="mt-4 text-white/85 max-w-3xl mx-auto"
        >
          Präzise, stabile Luftaufnahmen mit eindrucksvollem Dynamikumfang – rechtssicher, effizient
          und schnell einsatzbereit in Gütersloh, der Region und ganz NRW.
        </motion.p>
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a
            href="#kontakt"
            className="px-5 py-3 rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold shadow-[0_0_40px_-10px_rgba(251,191,36,0.5)] hover:shadow-[0_0_50px_-8px_rgba(249,115,22,0.6)] transition-shadow"
          >
            Projekt anfragen
          </a>
          <a href="#gofilm-20" className="px-5 py-3 rounded-md border border-white/20 text-white/90 hover:text-white">
            Technik ansehen
          </a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="mt-6 text-xs text-white/70"
        >
          Operativer Standort: Gütersloh • Einsätze im Umkreis und NRW
        </motion.p>
      </motion.div>
    </section>
  );
}
