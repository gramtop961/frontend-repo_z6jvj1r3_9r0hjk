import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import QualityGallery from './components/QualityGallery.jsx';
import Drones from './components/Drones.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <QualityGallery />
        <Drones />
      </main>
      <footer id="kontakt" className="border-t border-zinc-800/60 bg-black/80 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-400">© {new Date().getFullYear()} Aeroone – Luftbildproduktion aus Gütersloh</p>
          <div className="text-sm text-zinc-500">Impressum • Datenschutz</div>
        </div>
      </footer>
    </div>
  );
}
