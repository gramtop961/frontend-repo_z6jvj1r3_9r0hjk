import React, { useState } from 'react';
import { Menu, X, Camera, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: 'Start' },
    { href: '#nazgul-f4', label: 'Nazgul F4' },
    { href: '#nazgul-f6', label: 'Nazgul F6' },
    { href: '#mavic-3', label: 'Mavic 3' },
    { href: '#gofilm-20', label: 'GoFilm 20' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white">
          <Camera className="w-6 h-6 text-yellow-400" />
          <span className="font-semibold tracking-wide">Aeroone</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-white/80 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="mailto:hello@aeroone.de"
            className="ml-2 inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-medium"
          >
            <Mail className="w-4 h-4" /> Angebot anfragen
          </a>
        </nav>

        <button
          className="md:hidden text-white"
          aria-label="Menü öffnen"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/90">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/90 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="mailto:hello@aeroone.de"
              className="mt-2 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-medium"
            >
              <Mail className="w-4 h-4" /> Angebot anfragen
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
