import React from 'react';

export default function AchievementToast({ toasts }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="fixed bottom-20 right-4 z-40 flex flex-col gap-2 max-w-xs">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="glass-card p-3 flex items-center gap-3 animate-toast-in"
          style={{
            borderColor: toast.color || '#7C3AED',
            boxShadow: `0 0 20px ${toast.color || '#7C3AED'}33`,
          }}
        >
          <span className="text-2xl">{toast.icon || '🎉'}</span>
          <div>
            <div className="text-sm font-bold text-cloud-white">{toast.title}</div>
            <div className="text-xs text-cloud-dim">{toast.message}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
