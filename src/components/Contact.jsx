import React from 'react';

const Contact = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 md:p-12">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              Bereit für atemberaubende Luftaufnahmen?
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-gray-400 md:text-base">
              Beschreiben Sie kurz Ihr Projekt – wir melden uns innerhalb von 24 Stunden mit einem
              unverbindlichen Angebot.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="mailto:hello@aeroone.de?subject=Service%20anfragen%20-%20Aeroone&body=Hallo%20Aeroone%2C%0A%0Ich%20m%C3%B6chte%20folgende%20Drohnen-Dienstleistung%20anfragen%3A%0A%0AProjekt%3A%20%0AOrt%3A%20%0ATermin%3A%20%0ABudget%3A%20%0A%0AVielen%20Dank!"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-orange-500/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
            >
              Service anfragen
            </a>
            <a
              href="tel:+49-0000-000000"
              className="inline-flex items-center justify-center rounded-md border border-yellow-400/30 px-6 py-3 text-sm font-semibold text-yellow-300 transition hover:bg-yellow-400/10 focus:outline-none focus:ring-2 focus:ring-yellow-400/30"
            >
              Jetzt anrufen
            </a>
          </div>
        </div>

        <div className="mt-6 grid gap-4 text-xs text-gray-400 md:grid-cols-3">
          <div>EU-weit versichert & zertifiziert</div>
          <div>24–60 FPS | 4K/5.1K</div>
          <div>Operativ innerhalb von 72 Stunden verfügbar</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
