import React from 'react';
import { Film, Shield, Gauge, MapPin, Zap } from 'lucide-react';

function InfoChip({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
      <Icon className="w-5 h-5 text-yellow-400 mt-1" />
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        {subtitle && <p className="text-xs text-white/70">{subtitle}</p>}
      </div>
    </div>
  );
}

export default function FlowSections() {
  return (
    <section className="relative bg-black">
      {/* Feature band */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <InfoChip icon={Shield} title="EU‑versichert" subtitle="Genehmigungen & Pflichten erfüllt" />
        <InfoChip icon={Film} title="Formate" subtitle="4K & 5.1K • 10‑Bit • Log" />
        <InfoChip icon={MapPin} title="Standort" subtitle="Schnell einsatzbereit ab Gütersloh" />
        <InfoChip icon={Gauge} title="Framerates" subtitle="24–120 FPS je nach Setup" />
      </div>

      {/* Nazgul F4 */}
      <div id="nazgul-f4" className="max-w-6xl mx-auto px-6 py-16 border-t border-white/10">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Nazgul F4</h2>
        <p className="mt-2 text-white/70 max-w-3xl">
          Dynamische FPV‑Shots mit hoher Agilität – ideal für schnelle Verfolgungen und präzise Indoor‑Runs.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <InfoChip icon={Film} title="Auflösung" subtitle="4K Cinelog" />
          <InfoChip icon={Gauge} title="FPS" subtitle="48–120 FPS" />
          <InfoChip icon={Shield} title="Stabilität" subtitle="Gyroflow‑ready, vibrationsarm" />
          <InfoChip icon={Zap} title="Einsatz" subtitle="High‑Speed, enge Räume" />
        </div>
      </div>

      {/* Nazgul F6 */}
      <div id="nazgul-f6" className="max-w-6xl mx-auto px-6 py-16 border-t border-white/10">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Nazgul F6</h2>
        <p className="mt-2 text-white/70 max-w-3xl">
          Mehr Schub und Präsenz in der Luft – stabile, cineastische Linien mit reichlich Leistungsreserve.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <InfoChip icon={Film} title="Auflösung" subtitle="4K Cinelog" />
          <InfoChip icon={Gauge} title="FPS" subtitle="48–120 FPS" />
          <InfoChip icon={Shield} title="Sicherheit" subtitle="Failsafe‑Setups & VTX‑Monitoring" />
          <InfoChip icon={Zap} title="Einsatz" subtitle="Outdoor, Long‑Lines" />
        </div>
      </div>

      {/* Mavic 3 */}
      <div id="mavic-3" className="max-w-6xl mx-auto px-6 py-16 border-t border-white/10">
        <h2 className="text-2xl md:text-3xl font-bold text-white">DJI Mavic 3</h2>
        <p className="mt-2 text-white/70 max-w-3xl">
          Premium‑Allrounder mit 5.1K, langer Flugzeit und erstklassiger Stabilisierung für detailreiche Establishing Shots.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <InfoChip icon={Film} title="Auflösung" subtitle="5.1K & 4K • 10‑Bit D‑Log" />
          <InfoChip icon={Gauge} title="FPS" subtitle="24–60 FPS je nach Modus" />
          <InfoChip icon={Shield} title="Sicherheit" subtitle="APAS & Sensoren" />
          <InfoChip icon={MapPin} title="Einsatz" subtitle="Establishing, Präzision" />
        </div>
      </div>

      {/* GoFilm 20 */}
      <div id="gofilm-20" className="max-w-6xl mx-auto px-6 py-16 border-t border-white/10">
        <h2 className="text-2xl md:text-3xl font-bold text-white">GoFilm 20</h2>
        <p className="mt-2 text-white/70 max-w-3xl">
          Kompakter Cinewhoop für sichere Indoor‑Cinematics – ideal für enge Räume, People‑Safe und Werksführungen.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <InfoChip icon={Film} title="Auflösung" subtitle="4K" />
          <InfoChip icon={Gauge} title="FPS" subtitle="48–120 FPS" />
          <InfoChip icon={Shield} title="Sicherheit" subtitle="Ducts & leichte Props" />
          <InfoChip icon={MapPin} title="Einsatz" subtitle="Indoor, Close‑Proximity" />
        </div>
      </div>
    </section>
  );
}
