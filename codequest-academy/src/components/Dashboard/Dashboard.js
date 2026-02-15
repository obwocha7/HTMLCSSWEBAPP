import React from 'react';
import curriculum from '../../data/curriculum';

export default function Dashboard({
  playerName,
  level,
  rank,
  xp,
  xpProgress,
  xpForNext,
  streak,
  gems,
  completedLessons,
  completedModules,
  completedCapstones,
  earnedBadges,
  companionId,
  companionName,
  onNavigate,
  onSelectWorld,
  onStartLesson,
}) {
  const totalLessons = curriculum.reduce(
    (sum, w) => sum + w.modules.reduce((s, m) => s + m.lessons.length, 0),
    0
  );
  const completedCount = completedLessons.length;

  // Find next lesson to continue
  let nextLesson = null;
  let nextWorld = null;
  for (const world of curriculum) {
    for (const mod of world.modules) {
      for (const lesson of mod.lessons) {
        if (!completedLessons.includes(lesson.id)) {
          nextLesson = lesson;
          nextWorld = world;
          break;
        }
      }
      if (nextLesson) break;
    }
    if (nextLesson) break;
  }

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Hero Section */}
      <div className="glass-card p-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: 'radial-gradient(ellipse at 30% 50%, #7C3AED 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10">
          <h1 className="text-2xl sm:text-3xl font-bold mb-1">
            Welcome back, <span className="text-gradient">{playerName}</span>!
          </h1>
          <p className="text-cloud-dim text-sm mb-4">
            {rank.title} · Level {level} · {completedCount}/{totalLessons} lessons completed
          </p>

          {nextLesson && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="flex-1">
                <div className="text-xs text-cloud-dim uppercase tracking-wider mb-1">Continue Your Quest</div>
                <div className="text-lg font-semibold text-cloud-white">{nextLesson.title}</div>
                <div className="text-xs text-cloud-dim">{nextWorld.name} · +{nextLesson.xpReward} XP</div>
              </div>
              <button
                onClick={() => {
                  onSelectWorld(nextWorld.id);
                  onStartLesson(nextLesson.id);
                }}
                className="btn-primary py-3 px-6 text-base whitespace-nowrap"
              >
                Continue Quest →
              </button>
            </div>
          )}

          {!nextLesson && (
            <div className="text-center py-4">
              <div className="text-4xl mb-2">🎉</div>
              <div className="text-lg font-bold text-gradient">All lessons completed!</div>
              <div className="text-sm text-cloud-dim">You are a true Web Wizard!</div>
            </div>
          )}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="glass-card p-4 text-center">
          <div className="text-2xl font-bold text-electric-violet-light">{level}</div>
          <div className="text-xs text-cloud-dim">Level</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-2xl font-bold text-neon-cyan">{xp}</div>
          <div className="text-xs text-cloud-dim">Total XP</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-2xl font-bold text-solar-gold">{streak}🔥</div>
          <div className="text-xs text-cloud-dim">Day Streak</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-2xl font-bold text-coral-energy">{earnedBadges.length}</div>
          <div className="text-xs text-cloud-dim">Badges</div>
        </div>
      </div>

      {/* World Progress */}
      <div>
        <h2 className="text-lg font-bold text-cloud-white mb-3">Your Worlds</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {curriculum.map((world) => {
            const worldLessons = world.modules.reduce((sum, m) => sum + m.lessons.length, 0);
            const worldCompleted = world.modules.reduce(
              (sum, m) => sum + m.lessons.filter(l => completedLessons.includes(l.id)).length,
              0
            );
            const progress = worldLessons > 0 ? (worldCompleted / worldLessons) * 100 : 0;
            const capDone = completedCapstones.includes(world.capstone?.id);

            return (
              <button
                key={world.id}
                onClick={() => onSelectWorld(world.id)}
                className="glass-card p-4 text-left transition-all duration-300 hover:border-electric-violet hover:shadow-glow-violet cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{world.icon}</span>
                  <div>
                    <div className="font-bold text-cloud-white text-sm">{world.name}</div>
                    <div className="text-xs text-cloud-dim">{world.subtitle}</div>
                  </div>
                </div>
                <div className="w-full h-2 bg-deep-space-lighter rounded-full mb-2">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${progress}%`, backgroundColor: world.color }}
                  />
                </div>
                <div className="flex justify-between text-xs text-cloud-dim">
                  <span>{worldCompleted}/{worldLessons} lessons</span>
                  {capDone && <span className="text-neon-cyan">✓ Capstone</span>}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Recent Badges */}
      {earnedBadges.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-cloud-white">Recent Badges</h2>
            <button
              onClick={() => onNavigate('profile')}
              className="text-xs text-electric-violet-light hover:text-electric-violet transition-colors"
            >
              View All →
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {earnedBadges.slice(-5).reverse().map(badgeId => (
              <div key={badgeId} className="badge-card earned shrink-0 w-20">
                <span className="text-2xl">🏅</span>
                <span className="text-[10px] text-cloud-dim text-center">{badgeId}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
