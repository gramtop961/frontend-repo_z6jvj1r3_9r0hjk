import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-4 w-[94%] max-w-7xl rounded-2xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-black/40 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#home" className="group inline-flex items-center gap-2">
            <span className="text-lg font-extrabold tracking-tight text-white md:text-xl">
              Aeroone
            </span>
            <span className="hidden h-2 w-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 md:block" />
          </a>
          <div className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
            <a href="#showcase" className="transition hover:text-white">Showcase</a>
            <a href="#gear" className="transition hover:text-white">Ausrüstung</a>
            <a href="#reviews" className="transition hover:text-white">Bewertungen</a>
            <a href="#kontakt" className="transition hover:text-white">Kontakt</a>
            <a
              href="mailto:hello@aeroone.de?subject=Service%20anfragen%20-%20Aeroone&body=Hallo%20Aeroone%2C%0A%0Ich%20m%C3%B6chte%20folgende%20Drohnen-Dienstleistung%20anfragen%3A%0A%0AProjekt%3A%20%0AOrt%3A%20%0ATermin%3A%20%0ABudget%3A%20%0A%0AVielen%20Dank!"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 font-semibold text-black shadow-lg shadow-orange-500/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-orange-500/40"
            >
              Service anfragen
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
