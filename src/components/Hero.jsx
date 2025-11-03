import React, { useEffect, useRef } from 'react';
import { Rocket } from 'lucide-react';

// Hero with background video and subtle mouse parallax
const Hero = () => {
  const wrapperRef = useRef(null);
  const videoLayerRef = useRef(null);
  const rafRef = useRef(0);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const onMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width; // -0.5..0.5
      const dy = (e.clientY - cy) / rect.height; // -0.5..0.5
      targetRef.current.x = dx * 10; // max 10px shift
      targetRef.current.y = dy * 10;
    };

    const animate = () => {
      const speed = 0.08;
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * speed;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * speed;
      if (videoLayerRef.current) {
        videoLayerRef.current.style.transform = `translate3d(${currentRef.current.x}px, ${currentRef.current.y}px, 0)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    wrapper.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      wrapper.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* Background video layer */}
      <div ref={wrapperRef} className="absolute inset-0">
        <div ref={videoLayerRef} className="h-full w-full">
          <video
            className="h-full w-full object-cover"
            src="https://cdn.coverr.co/videos/coverr-amazing-aerial-view-of-iceland-8752/1080p.mp4"
            poster="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1887&auto=format&fit=crop"
            muted
            playsInline
            autoPlay
            loop
          />
        </div>
      </div>

      {/* Gradient overlay must not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pt-32 md:pt-36">
        <span className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-4 py-1 text-sm font-medium text-yellow-400 ring-1 ring-yellow-500/30">
          <Rocket className="h-4 w-4" />
          Aeroone – Luftaufnahmen in 4K/5.1K
        </span>
        <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
          Präzise Drohnenaufnahmen
          <span className="block bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
            für Marken, Events und Immobilien
          </span>
        </h1>
        <p className="max-w-2xl text-base text-gray-200 md:text-lg">
          Wir liefern beeindruckende Luftbilder und Videos in Kinoqualität (24–60 FPS) – sicher, gesetzeskonform und deutschlandweit. Operativer Standort: Gütersloh.
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <a
            href="mailto:hello@aeroone.de?subject=Service%20anfragen%20-%20Aeroone&body=Hallo%20Aeroone%2C%0A%0Ich%20m%C3%B6chte%20folgende%20Drohnen-Dienstleistung%20anfragen%3A%0A%0AProjekt%3A%20%0AOrt%3A%20%0ATermin%3A%20%0ABudget%3A%20%0A%0AVielen%20Dank!"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-orange-500/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
          >
            Service anfragen
          </a>
          <span className="text-sm text-gray-300">Antwort innerhalb von 24h</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
