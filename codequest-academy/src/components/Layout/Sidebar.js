import React, { useState } from 'react';
import CompanionAvatar from '../Companion/CompanionAvatar';
import curriculum from '../../data/curriculum';

export default function Sidebar({
  companionId,
  companionName,
  level,
  companionMood,
  currentWorld,
  completedLessons,
  completedModules,
  earnedBadges,
  unlockedWorlds,
  onNavigate,
  onSelectWorld,
  collapsed,
  onToggle,
}) {
  const [showBadges, setShowBadges] = useState(false);

  return (
    <>
      <button
        onClick={onToggle}
        className="fixed top-14 left-2 z-20 w-8 h-8 rounded-lg bg-deep-space-lighter border border-card-border flex items-center justify-center text-cloud-dim hover:text-cloud-white transition-colors lg:hidden"
      >
        {collapsed ? '▶' : '◀'}
      </button>

      <aside
        className={`fixed top-12 left-0 bottom-0 z-20 bg-deep-space/95 backdrop-blur-md border-r border-card-border transition-all duration-300 overflow-y-auto ${
          collapsed ? '-translate-x-full lg:translate-x-0 lg:w-16' : 'translate-x-0 w-64'
        }`}
      >
        <div className="p-3 flex flex-col gap-4 h-full">
          {/* Companion */}
          <div className={`${collapsed ? 'lg:flex lg:justify-center hidden' : ''}`}>
            {collapsed ? (
              <CompanionAvatar
                companionId={companionId}
                companionName={companionName}
                level={level}
                mood={companionMood}
                compact
              />
            ) : (
              <div className="glass-card p-4 flex flex-col items-center">
                <CompanionAvatar
                  companionId={companionId}
                  companionName={companionName}
                  level={level}
                  mood={companionMood}
                />
              </div>
            )}
          </div>

          {/* World Map */}
          <div className={collapsed ? 'hidden lg:block' : ''}>
            <div className="text-xs font-semibold text-cloud-dim uppercase tracking-wider mb-2 px-1">
              {collapsed ? '' : 'World Map'}
            </div>
            <div className="flex flex-col gap-1.5">
              {curriculum.map((world, idx) => {
                const isUnlocked = unlockedWorlds.includes(world.id);
                const isCurrent = currentWorld === world.id;
                const totalLessons = world.modules.reduce((sum, m) => sum + m.lessons.length, 0);
                const completedCount = world.modules.reduce(
                  (sum, m) => sum + m.lessons.filter(l => completedLessons.includes(l.id)).length,
                  0
                );
                const progress = totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0;

                return (
                  <button
                    key={world.id}
                    onClick={() => isUnlocked && onSelectWorld(world.id)}
                    disabled={!isUnlocked}
                    className={`flex items-center gap-2 px-2 py-2 rounded-lg text-left transition-all duration-200 ${
                      !isUnlocked
                        ? 'opacity-40 cursor-not-allowed'
                        : isCurrent
                        ? 'bg-electric-violet/20 border border-electric-violet/40'
                        : 'hover:bg-deep-space-lighter'
                    }`}
                  >
                    <span className="text-lg">{isUnlocked ? world.icon : '🔒'}</span>
                    {!collapsed && (
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-cloud-white truncate">
                          {isUnlocked ? world.name : `World ${idx + 1}`}
                        </div>
                        {isUnlocked && (
                          <div className="w-full h-1 bg-deep-space-lighter rounded-full mt-1">
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{
                                width: `${progress}%`,
                                backgroundColor: world.color,
                              }}
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Badges Quick View */}
          {!collapsed && (
            <div>
              <button
                onClick={() => setShowBadges(!showBadges)}
                className="flex items-center justify-between w-full text-xs font-semibold text-cloud-dim uppercase tracking-wider mb-2 px-1 hover:text-cloud-white transition-colors"
              >
                <span>Badges ({earnedBadges.length})</span>
                <span>{showBadges ? '▲' : '▼'}</span>
              </button>
              {showBadges && (
                <div className="flex flex-wrap gap-1.5 animate-slide-up">
                  {earnedBadges.length === 0 ? (
                    <div className="text-xs text-cloud-dim px-1">Complete lessons to earn badges!</div>
                  ) : (
                    earnedBadges.slice(0, 12).map(badgeId => (
                      <div
                        key={badgeId}
                        className="w-8 h-8 rounded-lg bg-deep-space-lighter flex items-center justify-center text-sm"
                        title={badgeId}
                      >
                        🏅
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          )}

          {/* Navigation */}
          {!collapsed && (
            <div className="mt-auto pb-4">
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="text-xs text-cloud-dim hover:text-cloud-white px-2 py-1.5 rounded hover:bg-deep-space-lighter transition-colors text-left"
                >
                  🏠 Dashboard
                </button>
                <button
                  onClick={() => onNavigate('worldmap')}
                  className="text-xs text-cloud-dim hover:text-cloud-white px-2 py-1.5 rounded hover:bg-deep-space-lighter transition-colors text-left"
                >
                  🗺️ World Map
                </button>
                <button
                  onClick={() => onNavigate('profile')}
                  className="text-xs text-cloud-dim hover:text-cloud-white px-2 py-1.5 rounded hover:bg-deep-space-lighter transition-colors text-left"
                >
                  👤 Profile
                </button>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
