import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlowSections from './components/FlowSections';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <FlowSections />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-white/50 text-xs">
        © {new Date().getFullYear()} Aeroone – Luftaufnahmen aus Gütersloh
      </footer>
    </div>
  );
}

export default App;
