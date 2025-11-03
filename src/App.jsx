import React from 'react';
import Hero from './components/Hero';
import VideoShowcase from './components/VideoShowcase';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Hero />
      <VideoShowcase />
      <Reviews />
      <Contact />
      <footer className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Aeroone – Professionelle Drohnenaufnahmen in Deutschland
      </footer>
    </div>
  );
}

export default App;
