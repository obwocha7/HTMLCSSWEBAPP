import React from 'react';

export default function XPBar({ xp, xpProgress, level, rank, xpForNext, compact = false }) {
  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <div className="text-xs font-semibold text-solar-gold">Lv.{level}</div>
        <div className="w-24 h-2 bg-deep-space-lighter rounded-full overflow-hidden">
          <div
            className="xp-bar-fill h-full rounded-full"
            style={{ width: `${Math.min(xpProgress, 100)}%` }}
          />
        </div>
        <div className="text-xs text-cloud-dim">{xp}/{xpForNext}</div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 flex-1 max-w-md">
      <div className="flex items-center gap-1.5">
        <span className="text-sm font-bold" style={{ color: rank.color }}>
          {level}
        </span>
        <span className="text-xs text-cloud-dim hidden sm:inline">{rank.title}</span>
      </div>
      <div className="flex-1 h-3 bg-deep-space-lighter rounded-full overflow-hidden relative">
        <div
          className="xp-bar-fill h-full rounded-full"
          style={{ width: `${Math.min(xpProgress, 100)}%` }}
        />
      </div>
      <div className="text-xs text-cloud-dim whitespace-nowrap">
        {xp} / {xpForNext} XP
      </div>
    </div>
  );
}
