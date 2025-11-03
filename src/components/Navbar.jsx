import { useState } from 'react';
import { Menu, X, Camera, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: 'Start' },
    { href: '#galerie', label: 'Galerie' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-zinc-800/60 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40">
          <div className="flex items-center justify-between px-4 py-3 lg:px-6">
            <a href="#home" className="flex items-center gap-2 text-zinc-100">
              <Camera className="h-6 w-6 text-yellow-400" />
              <span className="font-semibold tracking-wide">Aeroone</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="mailto:hello@aeroone.de?subject=Anfrage%20Luftaufnahmen"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 font-medium text-black shadow ring-1 ring-yellow-300/40 hover:brightness-110 transition"
              >
                <Mail className="h-4 w-4" /> Anfragen
              </a>
            </div>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-zinc-700/60 p-2 text-zinc-200"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menü"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-zinc-800/60 px-4 py-3 space-y-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block rounded-lg px-3 py-2 text-zinc-200 hover:bg-zinc-800/60"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="mailto:hello@aeroone.de?subject=Anfrage%20Luftaufnahmen"
                className="block rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-2 text-center font-medium text-black"
                onClick={() => setOpen(false)}
              >
                Jetzt anfragen
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
