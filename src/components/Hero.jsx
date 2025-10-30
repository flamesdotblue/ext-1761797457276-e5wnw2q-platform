import React from 'react';
import Spline from '@splinetool/react-spline';
import { Film, MessageSquare } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Z9BMpz-LA54Dlbrj/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white text-xs md:text-sm px-3 py-1.5 rounded-full border border-white/20">
          <Film size={16} />
          Short Film Boards
        </span>
        <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
          Kusu ❤️ Divu
        </h1>
        <p className="mt-3 md:mt-4 max-w-2xl text-sm md:text-base text-white/80">
          A cinematic chat-to-heart journey from LinkedIn to Instagram — 24 scenes of friendship,
          dares, and a golden “Yes”.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <a
            href="#timeline"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-white/90 transition"
          >
            <MessageSquare size={18} />
            View Storyboard
          </a>
          <span className="text-white/60 text-sm">Oct 29 — Nov 3</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
