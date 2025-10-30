import React from 'react';
import { scenes } from '../data/scenes';
import SceneCard from './SceneCard';

const Timeline = () => {
  return (
    <section id="timeline" className="relative bg-gradient-to-b from-black to-[#0b0b0f]">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">Storyboard Timeline</h2>
          <p className="mt-2 text-white/70 max-w-2xl">
            24 scenes, each 8 seconds, capturing a playful, romantic progression from first contact to a new beginning.
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {scenes.map((scene, idx) => (
            <SceneCard key={idx} index={idx + 1} scene={scene} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
