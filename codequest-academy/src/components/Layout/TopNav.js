import React from 'react';
import XPBar from '../Gamification/XPBar';
import StreakCounter from '../Gamification/StreakCounter';

export default function TopNav({
  playerName,
  level,
  xp,
  xpProgress,
  xpForNext,
  rank,
  gems,
  streak,
  onNavigate,
  currentView,
}) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-deep-space/90 backdrop-blur-md border-b border-card-border">
      <div className="flex items-center justify-between px-4 py-2 gap-3">
        <button
          onClick={() => onNavigate('dashboard')}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0"
        >
          <span className="text-xl">🏰</span>
          <span className="font-bold text-sm text-gradient hidden sm:inline">CodeQuest</span>
        </button>

        <XPBar
          xp={xp}
          xpProgress={xpProgress}
          level={level}
          rank={rank}
          xpForNext={xpForNext}
        />

        <div className="flex items-center gap-3 shrink-0">
          <StreakCounter streak={streak} />

          <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-deep-space-lighter">
            <span className="text-base">💎</span>
            <span className="text-sm font-bold text-electric-violet-light">{gems}</span>
          </div>

          <button
            onClick={() => onNavigate('quests')}
            className={`px-2 py-1 rounded-lg text-sm transition-colors ${
              currentView === 'quests'
                ? 'bg-electric-violet text-cloud-white'
                : 'bg-deep-space-lighter text-cloud-dim hover:text-cloud-white'
            }`}
          >
            📜 Quests
          </button>

          <button
            onClick={() => onNavigate('profile')}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
              currentView === 'profile'
                ? 'bg-electric-violet text-cloud-white ring-2 ring-electric-violet-light'
                : 'bg-deep-space-lighter text-cloud-dim hover:bg-electric-violet/50'
            }`}
            title={playerName}
          >
            {playerName ? playerName[0].toUpperCase() : '?'}
          </button>
        </div>
      </div>
    </nav>
  );
}
