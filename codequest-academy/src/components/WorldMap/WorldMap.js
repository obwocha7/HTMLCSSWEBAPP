import React from 'react';
import curriculum from '../../data/curriculum';

export default function WorldMap({
  currentWorld,
  completedLessons,
  completedModules,
  completedCapstones,
  onSelectWorld,
  onStartLesson,
  onNavigate,
}) {
  const world = curriculum.find(w => w.id === currentWorld);

  if (!world) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4">🗺️</div>
        <h2 className="text-xl font-bold text-cloud-white mb-2">Select a World</h2>
        <p className="text-cloud-dim">Choose a world from the sidebar to begin!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-slide-up">
      {/* World Header */}
      <div
        className="glass-card p-6 relative overflow-hidden"
        style={{
          borderColor: `${world.color}33`,
          boxShadow: `0 0 30px ${world.color}15`,
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, ${world.color} 0%, transparent 70%)`,
          }}
        />
        <div className="relative z-10 flex items-center gap-4">
          <span className="text-5xl">{world.icon}</span>
          <div>
            <h1 className="text-2xl font-bold text-cloud-white">{world.name}</h1>
            <p className="text-sm text-cloud-dim">{world.subtitle}</p>
            <p className="text-xs text-cloud-dim mt-1">{world.description}</p>
          </div>
        </div>
      </div>

      {/* World Selector Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {curriculum.map((w) => {
          const isCurrent = w.id === currentWorld;
          return (
            <button
              key={w.id}
              onClick={() => onSelectWorld(w.id)}
              className={`shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                isCurrent
                  ? 'text-cloud-white'
                  : 'bg-deep-space-lighter text-cloud-dim hover:text-cloud-white'
              }`}
              style={isCurrent ? { backgroundColor: `${w.color}33`, color: w.color } : {}}
            >
              {w.icon} {w.name}
            </button>
          );
        })}
      </div>

      {/* Modules & Lessons */}
      <div className="space-y-6">
        {world.modules.map((module, modIdx) => {
          const moduleLessons = module.lessons;
          const completedInModule = moduleLessons.filter(l => completedLessons.includes(l.id)).length;
          const allComplete = completedInModule === moduleLessons.length;

          return (
            <div key={module.id} className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{module.icon}</span>
                <div>
                  <h3 className="text-base font-bold text-cloud-white">{module.name}</h3>
                  <div className="text-xs text-cloud-dim">
                    {completedInModule}/{moduleLessons.length} lessons
                    {allComplete && <span className="text-neon-cyan ml-2">✓ Complete</span>}
                  </div>
                </div>
              </div>

              {/* Lesson Path */}
              <div className="ml-4 border-l-2 border-deep-space-lighter pl-4 space-y-2">
                {moduleLessons.map((lesson, lessonIdx) => {
                  const isCompleted = completedLessons.includes(lesson.id);

                  return (
                    <button
                      key={lesson.id}
                      onClick={() => onStartLesson(lesson.id)}
                      className={`lesson-card w-full text-left flex items-center gap-3 ${
                        isCompleted ? 'completed' : 'active'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                          isCompleted
                            ? 'bg-neon-cyan text-deep-space'
                            : 'bg-electric-violet text-cloud-white animate-pulse-glow'
                        }`}
                      >
                        {isCompleted ? '✓' : lessonIdx + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-cloud-white truncate">
                          {lesson.title}
                        </div>
                        <div className="text-xs text-cloud-dim truncate">
                          {lesson.description}
                        </div>
                      </div>
                      <div className="text-xs text-cloud-dim shrink-0 flex items-center gap-1">
                        {lesson.type === 'challenge' && <span className="text-solar-gold">⭐</span>}
                        <span>+{lesson.xpReward} XP</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Capstone */}
        {world.capstone && (
          <div className="mt-6">
            <div
              className="glass-card p-5 relative overflow-hidden"
              style={{
                borderColor: `${world.color}44`,
                boxShadow: `0 0 20px ${world.color}20`,
              }}
            >
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  background: `linear-gradient(135deg, ${world.color}, transparent)`,
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">⭐</span>
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: world.color }}>
                    Capstone Project
                  </span>
                </div>
                <h3 className="text-lg font-bold text-cloud-white mb-1">{world.capstone.title}</h3>
                <p className="text-sm text-cloud-dim mb-3">{world.capstone.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-solar-gold font-semibold">+{world.capstone.xpReward} XP</span>
                  {completedCapstones.includes(world.capstone.id) ? (
                    <span className="text-sm text-neon-cyan font-semibold">✓ Completed</span>
                  ) : (
                    <button
                      onClick={() => onNavigate('lesson')}
                      className="btn-primary text-sm py-1.5 px-4"
                    >
                      Start Capstone
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
