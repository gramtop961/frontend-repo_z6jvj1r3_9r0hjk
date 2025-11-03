import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kontakt" className="relative bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">Projekt anfragen</h3>
          <p className="mt-3 text-white/70">
            Erzählen Sie uns kurz von Ihrem Vorhaben. Wir melden uns schnell mit Verfügbarkeit, 
            Einschätzung und einem transparenten Angebot.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <a href="mailto:hello@aeroone.de" className="inline-flex items-center gap-3 text-white/90 hover:text-white">
              <Mail className="w-5 h-5 text-yellow-400" /> hello@aeroone.de
            </a>
            <a href="tel:+491234567890" className="inline-flex items-center gap-3 text-white/90 hover:text-white">
              <Phone className="w-5 h-5 text-yellow-400" /> +49 123 456 7890
            </a>
            <p className="inline-flex items-center gap-3 text-white/60">
              <MapPin className="w-5 h-5 text-yellow-400" /> Operativer Standort: Gütersloh • Region: Bielefeld, Paderborn, Münsterland, NRW
            </p>
          </div>
        </div>
        <div className="rounded-xl border border-white/10 p-6 bg-white/5">
          <ul className="space-y-3 text-sm text-white/80">
            <li>• Rechtssichere, EU‑versicherte Einsätze</li>
            <li>• 4K/5.1K, 10‑Bit, Log‑Profile</li>
            <li>• FPV & Cinewhoop: 48–120 FPS</li>
            <li>• Schnelle Verfügbarkeit in Gütersloh & Umgebung</li>
          </ul>
          <a
            href="mailto:hello@aeroone.de?subject=Projektanfrage%20Aeroone"
            className="mt-6 inline-flex px-5 py-3 rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold"
          >
            Unverbindlich anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
