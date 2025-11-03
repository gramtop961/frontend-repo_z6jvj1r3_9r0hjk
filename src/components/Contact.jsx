import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kontakt" className="relative bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white">Kontakt & Buchung</h2>
            <p className="mt-3 text-zinc-300">
              Sagen Sie uns kurz, was Sie planen – wir melden uns mit einer Empfehlung, Verfügbarkeit und einem fairen Angebot.
            </p>

            <div className="mt-6 space-y-3 text-zinc-100">
              <a href="mailto:hello@aeroone.de" className="flex items-center gap-3 hover:text-white">
                <Mail className="h-5 w-5 text-yellow-400" /> hello@aeroone.de
              </a>
              <a href="tel:+4915112345678" className="flex items-center gap-3 hover:text-white">
                <Phone className="h-5 w-5 text-yellow-400" /> +49 151 12345678
              </a>
              <p className="flex items-center gap-3 text-zinc-300">
                <MapPin className="h-5 w-5 text-yellow-400" /> Gütersloh • Region: Bielefeld, Paderborn, Münsterland, NRW
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-300">
              <span className="rounded-full border border-zinc-700/70 px-3 py-1">Genehmigungen & Versicherung</span>
              <span className="rounded-full border border-zinc-700/70 px-3 py-1">Location‑Scouting</span>
              <span className="rounded-full border border-zinc-700/70 px-3 py-1">Konzept & Schnitt</span>
              <span className="rounded-full border border-zinc-700/70 px-3 py-1">RAW/LOG Color Grading</span>
            </div>

            <a
              href="mailto:hello@aeroone.de?subject=Unverbindliche%20Anfrage%20Luftaufnahmen"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 font-semibold text-black ring-1 ring-yellow-300/40 hover:brightness-110"
            >
              Unverbindlich anfragen
            </a>
          </div>

          <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6">
            <h3 className="text-white font-semibold">Was wir liefern</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">
              <li>Stabilisierte 4K/6K Luftaufnahmen in Kinoqualität (ProRes/10‑Bit Log)</li>
              <li>FPV‑Action für dynamische Werbe‑ und Eventclips</li>
              <li>Saubere, rechtssichere Flugplanung inkl. Einholung von Genehmigungen</li>
              <li>Individuelles Color Grading und Mastering für Ihr Zielmedium</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
