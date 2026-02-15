import React from 'react';
import BadgeGrid from '../Gamification/BadgeGrid';
import CompanionAvatar from '../Companion/CompanionAvatar';
import curriculum from '../../data/curriculum';

export default function ProfilePage({
  playerName,
  level,
  rank,
  xp,
  xpProgress,
  xpForNext,
  xpForCurrent,
  gems,
  streak,
  completedLessons,
  completedModules,
  completedCapstones,
  earnedBadges,
  bugsFixed,
  perfectLessons,
  companionId,
  companionName,
}) {
  const totalLessons = curriculum.reduce(
    (sum, w) => sum + w.modules.reduce((s, m) => s + m.lessons.length, 0),
    0
  );

  const stats = [
    { label: 'Level', value: level, color: '#7C3AED' },
    { label: 'Total XP', value: xp.toLocaleString(), color: '#06D6A0' },
    { label: 'Gems', value: gems, color: '#8B5CF6' },
    { label: 'Streak', value: `${streak} days`, color: '#FFD166' },
    { label: 'Lessons Done', value: `${completedLessons.length}/${totalLessons}`, color: '#06D6A0' },
    { label: 'Capstones', value: completedCapstones.length, color: '#EF476F' },
    { label: 'Bugs Fixed', value: bugsFixed, color: '#EF476F' },
    { label: 'Perfect Runs', value: perfectLessons, color: '#FFD166' },
  ];

  return (
    <div className="space-y-6 animate-slide-up max-w-3xl mx-auto">
      {/* Profile Header */}
      <div className="glass-card p-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(ellipse at 30% 50%, ${rank.color} 0%, transparent 70%)`,
          }}
        />
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-electric-violet to-neon-cyan flex items-center justify-center text-3xl font-bold text-cloud-white shadow-glow-violet">
            {playerName ? playerName[0].toUpperCase() : '?'}
          </div>
          <div className="text-center sm:text-left flex-1">
            <h1 className="text-2xl font-bold text-cloud-white">{playerName}</h1>
            <div className="flex items-center gap-2 justify-center sm:justify-start mt-1">
              <span
                className="text-sm font-semibold px-3 py-0.5 rounded-full"
                style={{ backgroundColor: `${rank.color}22`, color: rank.color }}
              >
                {rank.title}
              </span>
              <span className="text-sm text-cloud-dim">Level {level}</span>
            </div>
            {/* XP Progress */}
            <div className="mt-3 max-w-sm">
              <div className="flex justify-between text-xs text-cloud-dim mb-1">
                <span>{xp - xpForCurrent} / {xpForNext - xpForCurrent} XP to next level</span>
                <span>{Math.round(xpProgress)}%</span>
              </div>
              <div className="w-full h-3 bg-deep-space-lighter rounded-full overflow-hidden">
                <div
                  className="xp-bar-fill h-full rounded-full"
                  style={{ width: `${Math.min(xpProgress, 100)}%` }}
                />
              </div>
            </div>
          </div>
          <div className="shrink-0">
            <CompanionAvatar
              companionId={companionId}
              companionName={companionName}
              level={level}
              mood="idle"
            />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map(stat => (
          <div key={stat.label} className="glass-card p-3 text-center">
            <div className="text-xl font-bold" style={{ color: stat.color }}>
              {stat.value}
            </div>
            <div className="text-xs text-cloud-dim">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Badges */}
      <div>
        <h2 className="text-lg font-bold text-cloud-white mb-3">
          Badges ({earnedBadges.length})
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-electric-violet-light mb-2">Mastery Badges</h3>
            <BadgeGrid earnedBadges={earnedBadges} category="mastery" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neon-cyan mb-2">Behavior Badges</h3>
            <BadgeGrid earnedBadges={earnedBadges} category="behavior" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-solar-gold mb-2">Secret Badges</h3>
            <BadgeGrid earnedBadges={earnedBadges} category="secret" />
          </div>
        </div>
      </div>

      {/* World Progress */}
      <div>
        <h2 className="text-lg font-bold text-cloud-white mb-3">World Progress</h2>
        <div className="space-y-3">
          {curriculum.map(world => {
            const worldLessons = world.modules.reduce((sum, m) => sum + m.lessons.length, 0);
            const worldCompleted = world.modules.reduce(
              (sum, m) => sum + m.lessons.filter(l => completedLessons.includes(l.id)).length,
              0
            );
            const progress = worldLessons > 0 ? (worldCompleted / worldLessons) * 100 : 0;

            return (
              <div key={world.id} className="glass-card p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{world.icon}</span>
                    <span className="text-sm font-semibold text-cloud-white">{world.name}</span>
                  </div>
                  <span className="text-xs text-cloud-dim">
                    {worldCompleted}/{worldLessons}
                  </span>
                </div>
                <div className="w-full h-2 bg-deep-space-lighter rounded-full">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${progress}%`, backgroundColor: world.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
