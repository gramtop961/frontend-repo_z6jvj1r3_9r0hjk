import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlowSections from './components/FlowSections';

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Navbar />
      <Hero />
      <FlowSections />
      <footer className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Aeroone – Professionelle Drohnenaufnahmen in Deutschland
      </footer>
    </div>
  );
}

export default App;
