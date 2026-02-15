import React, { useState } from 'react';

export default function BottomBar({ onNavigate, onResetProgress }) {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-deep-space/90 backdrop-blur-md border-t border-card-border">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('dashboard')}
              className="text-xs text-cloud-dim hover:text-cloud-white px-2 py-1 rounded hover:bg-deep-space-lighter transition-colors"
            >
              🏠 Home
            </button>
            <button
              onClick={() => onNavigate('worldmap')}
              className="text-xs text-cloud-dim hover:text-cloud-white px-2 py-1 rounded hover:bg-deep-space-lighter transition-colors"
            >
              🗺️ Map
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/HTML', '_blank')}
              className="text-xs text-cloud-dim hover:text-neon-cyan px-2 py-1 rounded hover:bg-deep-space-lighter transition-colors"
            >
              📚 Docs
            </button>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="text-xs text-cloud-dim hover:text-cloud-white px-2 py-1 rounded hover:bg-deep-space-lighter transition-colors"
            >
              ⚙️ Settings
            </button>
          </div>
        </div>
      </div>

      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="glass-card p-6 max-w-sm w-full mx-4 animate-pop">
            <h3 className="text-lg font-bold text-cloud-white mb-4">Settings</h3>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  if (window.confirm('Are you sure? This will erase ALL your progress!')) {
                    onResetProgress();
                    setShowSettings(false);
                  }
                }}
                className="text-sm text-coral-energy hover:text-coral-energy-dark px-3 py-2 rounded-lg border border-coral-energy/30 hover:bg-coral-energy/10 transition-colors text-left"
              >
                🗑️ Reset All Progress
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="btn-primary text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
