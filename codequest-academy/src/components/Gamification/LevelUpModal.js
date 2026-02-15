import React, { useEffect, useState } from 'react';

const RANK_TITLES = [
  { min: 1, max: 5, title: 'Code Sprout' },
  { min: 6, max: 15, title: 'Tag Tamer' },
  { min: 16, max: 25, title: 'Style Sorcerer' },
  { min: 26, max: 35, title: 'Layout Legend' },
  { min: 36, max: 45, title: 'Responsive Ranger' },
  { min: 46, max: 50, title: 'Web Wizard' },
];

function getRank(level) {
  return RANK_TITLES.find(r => level >= r.min && level <= r.max) || RANK_TITLES[0];
}

export default function LevelUpModal({ level, onDismiss }) {
  const [particles, setParticles] = useState([]);
  const [visible, setVisible] = useState(false);
  const rank = getRank(level);

  useEffect(() => {
    setVisible(true);
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4,
      color: ['#7C3AED', '#06D6A0', '#FFD166', '#EF476F', '#8B5CF6'][Math.floor(Math.random() * 5)],
      delay: Math.random() * 0.5,
      duration: Math.random() * 1 + 1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full animate-particle-burst"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
      <div
        className={`relative glass-card p-8 text-center max-w-sm mx-4 transition-all duration-500 ${
          visible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}
        style={{
          boxShadow: '0 0 60px rgba(124, 58, 237, 0.4), 0 0 120px rgba(6, 214, 160, 0.2)',
        }}
      >
        <div className="text-6xl mb-4 animate-bounce-slow">⭐</div>
        <h2 className="text-3xl font-bold text-gradient mb-2">Level Up!</h2>
        <div className="text-5xl font-bold text-solar-gold mb-2">{level}</div>
        <div className="text-lg text-electric-violet-light font-semibold mb-4">
          {rank.title}
        </div>
        <p className="text-cloud-dim text-sm mb-6">
          Amazing progress! Keep coding to unlock new worlds and abilities!
        </p>
        <button
          onClick={onDismiss}
          className="btn-primary text-lg px-8 py-3"
        >
          Continue Quest
        </button>
      </div>
    </div>
  );
}
