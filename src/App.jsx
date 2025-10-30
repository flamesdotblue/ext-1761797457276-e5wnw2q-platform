import React from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <main className="relative z-10">
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}

export default App;
