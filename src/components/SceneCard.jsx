import React from 'react';
import { Music, Clock } from 'lucide-react';

const SceneCard = ({ index, scene }) => {
  const { title, duration_sec, prompt, audio_notes } = scene;
  return (
    <article className="group relative rounded-xl border border-white/10 bg-white/5 p-4 md:p-5 hover:bg-white/[0.08] transition">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-fuchsia-500/0 via-cyan-400/0 to-amber-300/0 group-hover:from-fuchsia-500/[0.06] group-hover:via-cyan-400/[0.05] group-hover:to-amber-300/[0.06] pointer-events-none" />

      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/10 text-xs font-semibold">
            {index}
          </span>
          <h3 className="text-base md:text-lg font-semibold leading-tight">{title}</h3>
        </div>
        <div className="flex items-center gap-1 text-white/70 text-xs">
          <Clock size={14} />
          <span>{duration_sec}s</span>
        </div>
      </header>

      <div className="mt-3 text-sm text-white/85 leading-relaxed">
        {prompt}
      </div>

      {audio_notes && (
        <div className="mt-4 flex items-start gap-2 text-xs text-white/70">
          <Music size={14} className="mt-0.5" />
          <p className="leading-relaxed">{audio_notes}</p>
        </div>
      )}
    </article>
  );
};

export default SceneCard;
