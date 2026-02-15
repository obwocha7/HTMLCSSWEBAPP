import React, { useEffect, useState } from 'react';

export default function ParticleExplosion({ active, x = 50, y = 50, color = '#06D6A0' }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (!active) {
      setParticles([]);
      return;
    }
    const colors = ['#7C3AED', '#06D6A0', '#FFD166', '#EF476F', '#8B5CF6'];
    const newParticles = Array.from({ length: 20 }, (_, i) => {
      const angle = (i / 20) * Math.PI * 2;
      const velocity = 40 + Math.random() * 60;
      return {
        id: i,
        startX: x,
        startY: y,
        endX: x + Math.cos(angle) * velocity,
        endY: y + Math.sin(angle) * velocity,
        size: Math.random() * 6 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: 0.4 + Math.random() * 0.4,
      };
    });
    setParticles(newParticles);
    const timer = setTimeout(() => setParticles([]), 1000);
    return () => clearTimeout(timer);
  }, [active, x, y, color]);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.startX,
            top: p.startY,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            animation: `particleMove${p.id} ${p.duration}s ease-out forwards`,
          }}
        >
          <style>{`
            @keyframes particleMove${p.id} {
              0% { transform: translate(0, 0) scale(1); opacity: 1; }
              100% { transform: translate(${p.endX - p.startX}px, ${p.endY - p.startY}px) scale(0); opacity: 0; }
            }
          `}</style>
        </div>
      ))}
    </div>
  );
}
