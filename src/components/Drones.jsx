import { motion } from 'framer-motion';
import { Drone, Camera, Shield, Battery, Map, BadgeCheck } from 'lucide-react';

export default function Drones() {
  const drones = [
    {
      name: 'DJI Inspire 3',
      tagline: 'Kino‑Level – 8K RAW, präzise Flugbahnen',
      specs: [
        '8K ProRes RAW / CinemaDNG',
        'Zenmuse X9-8K Air',
        'Dual‑Operator (Pilot + Kamera)',
        'RTK & Waypoint Pro für präzise Repeats',
      ],
      image:
        'https://images.unsplash.com/photo-1605647533135-58d82b23f8a4?q=80&w=1600&auto=format&fit=crop',
      meta: [
        { icon: Camera, label: 'Bildrate', value: 'bis 75 fps (je nach Modus)' },
        { icon: Battery, label: 'Flugzeit', value: 'bis 25–28 Min.' },
        { icon: Shield, label: 'Sicherheit', value: 'ADS‑B, Hinderniserkennung 360°' },
      ],
    },
    {
      name: 'DJI Mavic 3 Cine',
      tagline: 'Mobiles Workhorse – 5.1K ProRes, extrem effizient',
      specs: [
        '5.1K Apple ProRes 422/422HQ/4444',
        '4/3" Hasselblad Sensor',
        'Teleobjektiv für flexible Perspektiven',
        'Kompakt und schnell einsatzbereit',
      ],
      image:
        'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?q=80&w=1600&auto=format&fit=crop',
      meta: [
        { icon: Camera, label: 'Farbtiefe', value: '10‑Bit D‑Log' },
        { icon: Battery, label: 'Flugzeit', value: 'bis 46 Min.' },
        { icon: Shield, label: 'Sicherheit', value: 'Mehrfach‑Sensorik, RTH' },
      ],
    },
    {
      name: 'FPV‑Cine (Custom)',
      tagline: 'Dynamische Verfolgungen – sanfte Cinematic‑Loops',
      specs: [
        '4K/120p mit Action‑ oder Cine‑Cam',
        'GoPro/ReelSteady oder Gyroflow',
        'Indoor‑tauglich (Cinewhoop) & Outdoor‑Setups',
        'Spotter & Safety Pilot im Team',
      ],
      image:
        'https://images.unsplash.com/photo-1602080858428-57174f9431d0?q=80&w=1600&auto=format&fit=crop',
      meta: [
        { icon: Camera, label: 'Bildprofil', value: 'Flat/Log (je nach Kamera)' },
        { icon: Battery, label: 'Flugzeit', value: '3–7 Min. je nach Build' },
        { icon: Shield, label: 'Sicherheit', value: 'Fail‑safe, redundant geprüft' },
      ],
    },
  ];

  return (
    <section id="drones" className="relative overflow-hidden bg-black py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-tr from-yellow-400/20 via-amber-500/10 to-orange-600/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 text-center">
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-200/90">
            <Drone className="h-3.5 w-3.5" />
            <span>Unsere Drohnenflotte</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
            Präzision, Sicherheit und Kino‑Qualität aus der Luft
          </h2>
          <p className="mt-3 text-zinc-400 max-w-3xl mx-auto">
            Direkt unter der Galerie: Hier finden Sie die Technik, mit der wir Ihre Bilder möglich machen.
            Von flexiblen, kompakten Setups bis hin zu High‑End Kino‑Systemen – passend für jede Produktion.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {drones.map((d, idx) => (
            <motion.article
              key={d.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-900/40 hover:bg-zinc-900/70 transition-colors"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={d.image}
                  alt={d.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute left-4 bottom-3 flex items-center gap-2 text-amber-200">
                  <Drone className="h-4 w-4" />
                  <span className="text-sm font-medium">{d.name}</span>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <p className="text-amber-100/90 text-sm mb-2">{d.tagline}</p>
                <ul className="mt-2 space-y-2 text-sm text-zinc-300">
                  {d.specs.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <BadgeCheck className="mt-0.5 h-4 w-4 flex-none text-amber-400" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 grid grid-cols-1 gap-2 text-xs text-zinc-400 sm:grid-cols-3">
                  {d.meta.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-2 rounded-lg border border-zinc-800/60 bg-zinc-950/50 px-2.5 py-2">
                      <Icon className="h-3.5 w-3.5 text-amber-300" />
                      <div>
                        <div className="text-[10px] uppercase tracking-wide text-zinc-500">{label}</div>
                        <div className="text-zinc-300">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 rounded-2xl border border-zinc-800/60 bg-gradient-to-br from-zinc-950 via-zinc-950 to-zinc-900 p-6 sm:p-8"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-white text-lg sm:text-xl font-semibold">Zugelassen & versichert</h3>
              <p className="mt-1 text-zinc-400 max-w-3xl">
                Betrieb nach EU‑Drohnenverordnung, Haftpflichtversicherung und Risiko‑Assessment für jeden Dreh. 
                Flüge in Gütersloh, Umgebung und ganz NRW – Einholung notwendiger Genehmigungen inklusive.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-zinc-300 sm:grid-cols-2">
                <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-amber-400"/> Geofencing & Fail‑Safe Routings</li>
                <li className="flex items-center gap-2"><Map className="h-4 w-4 text-amber-400"/> Standort‑Scouting & NOTAM‑Check</li>
                <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-amber-400"/> EU‑Kompetenznachweise A1/A3, A2</li>
                <li className="flex items-center gap-2"><Camera className="h-4 w-4 text-amber-400"/> ND‑/Mist‑Filter, Lens‑Control, LUT‑Workflows</li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-tr from-yellow-400 via-amber-500 to-orange-600 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-500/20 transition hover:brightness-110"
              >
                Unverbindlich anfragen
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
