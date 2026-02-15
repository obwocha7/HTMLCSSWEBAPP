import React, { useState } from 'react';

export default function TaskPanel({
  objectives,
  objectiveResults,
  hints,
  onRun,
  onShowSolution,
  isComplete,
  xpReward,
}) {
  const [showHints, setShowHints] = useState(false);
  const [currentHint, setCurrentHint] = useState(0);

  return (
    <div className="glass-card p-4 space-y-4">
      {/* Objectives */}
      <div>
        <h4 className="text-sm font-bold text-cloud-white mb-2">Objectives</h4>
        <div className="space-y-2">
          {objectives.map((obj, idx) => {
            const passed = objectiveResults && objectiveResults[idx];
            return (
              <div
                key={obj.id}
                className={`flex items-start gap-2 text-sm transition-all duration-300 ${
                  passed ? 'text-neon-cyan' : 'text-cloud-dim'
                }`}
              >
                <span className={`shrink-0 mt-0.5 w-5 h-5 rounded flex items-center justify-center text-xs font-bold ${
                  passed
                    ? 'bg-neon-cyan/20 text-neon-cyan'
                    : 'bg-deep-space-lighter text-cloud-dim'
                }`}>
                  {passed ? '✓' : idx + 1}
                </span>
                <span className={passed ? 'line-through opacity-70' : ''}>{obj.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button
          onClick={onRun}
          className={`flex-1 py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-200 ${
            isComplete
              ? 'bg-neon-cyan text-deep-space shadow-glow-cyan'
              : 'bg-electric-violet hover:bg-electric-violet-light text-cloud-white shadow-glow-violet'
          }`}
        >
          {isComplete ? '✓ Complete! Next →' : '▶ Run Code'}
        </button>
      </div>

      {/* Hints */}
      {hints && hints.length > 0 && (
        <div>
          <button
            onClick={() => {
              setShowHints(!showHints);
              if (!showHints) setCurrentHint(0);
            }}
            className="text-xs text-solar-gold hover:text-solar-gold-dark transition-colors"
          >
            {showHints ? 'Hide Hints' : `💡 Need a hint? (${hints.length} available)`}
          </button>
          {showHints && (
            <div className="mt-2 p-3 rounded-lg bg-solar-gold/10 border border-solar-gold/20 animate-slide-up">
              <p className="text-sm text-solar-gold">{hints[currentHint]}</p>
              {hints.length > 1 && (
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-cloud-dim">
                    Hint {currentHint + 1}/{hints.length}
                  </span>
                  {currentHint < hints.length - 1 && (
                    <button
                      onClick={() => setCurrentHint(currentHint + 1)}
                      className="text-xs text-solar-gold hover:text-solar-gold-dark"
                    >
                      Next Hint →
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Show Solution */}
      <button
        onClick={onShowSolution}
        className="text-xs text-cloud-dim hover:text-coral-energy transition-colors"
      >
        🔓 Show Solution (no XP reward)
      </button>

      {/* XP Reward */}
      <div className="text-center text-xs text-cloud-dim">
        Reward: <span className="text-solar-gold font-semibold">+{xpReward} XP</span>
      </div>
    </div>
  );
}
