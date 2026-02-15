import React from 'react';

export default function StreakCounter({ streak }) {
  return (
    <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-deep-space-lighter">
      <span className="text-base">🔥</span>
      <span className="text-sm font-bold text-solar-gold">{streak}</span>
    </div>
  );
}
