import React from 'react';
import { Film, Shield, Gauge, MapPin, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

function InfoChip({ icon: Icon, title, subtitle }) {
  return (
    <motion.div
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10"
    >
      <Icon className="w-5 h-5 text-yellow-400 mt-1" />
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        {subtitle && <p className="text-xs text-white/70">{subtitle}</p>}
      </div>
    </motion.div>
  );
}

function GearBlock({ id, title, description, chips, image }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-16 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="grid lg:grid-cols-2 gap-8 items-center"
      >
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
          <p className="mt-2 text-white/70 max-w-3xl">{description}</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {chips.map((chip, i) => (
              <InfoChip key={i} {...chip} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="group relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-white/5"
        >
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-yellow-400/10 via-transparent to-orange-500/10" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function FlowSections() {
  return (
    <section className="relative bg-black">
      {/* Feature band */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <InfoChip icon={Shield} title="EU‑versichert" subtitle="Genehmigungen & Pflichten erfüllt" />
        <InfoChip icon={Film} title="Formate" subtitle="4K & 5.1K • 10‑Bit • Log" />
        <InfoChip icon={MapPin} title="Standort" subtitle="Gütersloh & Region, NRW" />
        <InfoChip icon={Gauge} title="Framerates" subtitle="24–120 FPS je nach Setup" />
      </div>

      <GearBlock
        id="nazgul-f4"
        title="Nazgul F4"
        description="Dynamische FPV‑Shots mit hoher Agilität – ideal für schnelle Verfolgungen und präzise Indoor‑Runs."
        image="https://images.unsplash.com/photo-1496619684348-0b71a5be4fd8?q=80&w=1500&auto=format&fit=crop"
        chips=[
          { icon: Film, title: 'Auflösung', subtitle: '4K Cinelog' },
          { icon: Gauge, title: 'FPS', subtitle: '48–120 FPS' },
          { icon: Shield, title: 'Stabilität', subtitle: 'Gyroflow‑ready, vibrationsarm' },
          { icon: Zap, title: 'Einsatz', subtitle: 'High‑Speed, enge Räume' },
        ]
      />

      <GearBlock
        id="nazgul-f6"
        title="Nazgul F6"
        description="Mehr Schub und Präsenz in der Luft – stabile, cineastische Linien mit reichlich Leistungsreserve."
        image="https://images.unsplash.com/photo-1520453803296-c39eabe2dab4?q=80&w=1500&auto=format&fit=crop"
        chips=[
          { icon: Film, title: 'Auflösung', subtitle: '4K Cinelog' },
          { icon: Gauge, title: 'FPS', subtitle: '48–120 FPS' },
          { icon: Shield, title: 'Sicherheit', subtitle: 'Failsafe‑Setups & VTX‑Monitoring' },
          { icon: Zap, title: 'Einsatz', subtitle: 'Outdoor, Long‑Lines' },
        ]
      />

      <GearBlock
        id="mavic-3"
        title="DJI Mavic 3"
        description="Premium‑Allrounder mit 5.1K, langer Flugzeit und erstklassiger Stabilisierung für detailreiche Establishing Shots."
        image="https://images.unsplash.com/photo-1606813907291-76b8bac9620f?q=80&w=1500&auto=format&fit=crop"
        chips=[
          { icon: Film, title: 'Auflösung', subtitle: '5.1K & 4K • 10‑Bit D‑Log' },
          { icon: Gauge, title: 'FPS', subtitle: '24–60 FPS je nach Modus' },
          { icon: Shield, title: 'Sicherheit', subtitle: 'APAS & Sensoren' },
          { icon: MapPin, title: 'Einsatz', subtitle: 'Establishing, Präzision' },
        ]
      />

      <GearBlock
        id="gofilm-20"
        title="GoFilm 20"
        description="Kompakter Cinewhoop für sichere Indoor‑Cinematics – ideal für enge Räume, People‑Safe und Werksführungen."
        image="https://images.unsplash.com/photo-1520975922215-c2f43a5f5160?q=80&w=1500&auto=format&fit=crop"
        chips=[
          { icon: Film, title: 'Auflösung', subtitle: '4K' },
          { icon: Gauge, title: 'FPS', subtitle: '48–120 FPS' },
          { icon: Shield, title: 'Sicherheit', subtitle: 'Ducts & leichte Props' },
          { icon: MapPin, title: 'Einsatz', subtitle: 'Indoor, Close‑Proximity' },
        ]
      />
    </section>
  );
}
