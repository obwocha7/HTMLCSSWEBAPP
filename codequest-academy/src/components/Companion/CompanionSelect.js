import React, { useState } from 'react';
import companions from '../../data/companions';

export default function CompanionSelect({ onSelect, playerName, onSetName }) {
  const [selectedId, setSelectedId] = useState(null);
  const [name, setName] = useState('');
  const [companionCustomName, setCompanionCustomName] = useState('');
  const [step, setStep] = useState(playerName ? 'companion' : 'name');
  const [ageGroup, setAgeGroup] = useState('10-13');

  const handleNameSubmit = () => {
    if (name.trim()) {
      onSetName(name.trim());
      setStep('age');
    }
  };

  const handleAgeSubmit = () => {
    setStep('companion');
  };

  const handleSelect = () => {
    if (selectedId) {
      const comp = companions.find(c => c.id === selectedId);
      onSelect(selectedId, companionCustomName.trim() || comp.name, ageGroup);
    }
  };

  return (
    <div className="min-h-screen bg-deep-space flex items-center justify-center p-4">
      <div className="stars-bg">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        {step === 'name' && (
          <div className="glass-card p-8 text-center animate-slide-up">
            <div className="text-5xl mb-4">🚀</div>
            <h1 className="text-3xl font-bold text-gradient mb-2">Welcome to CodeQuest Academy!</h1>
            <p className="text-cloud-dim mb-8">Your epic coding adventure begins here. What should we call you?</p>
            <div className="max-w-xs mx-auto">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleNameSubmit()}
                placeholder="Enter your name..."
                className="w-full bg-deep-space-lighter border border-card-border rounded-lg px-4 py-3 text-cloud-white text-center text-lg focus:outline-none focus:border-electric-violet transition-colors"
                autoFocus
                maxLength={20}
              />
              <button
                onClick={handleNameSubmit}
                disabled={!name.trim()}
                className="btn-primary w-full mt-4 py-3 text-lg disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Begin Adventure
              </button>
            </div>
          </div>
        )}

        {step === 'age' && (
          <div className="glass-card p-8 text-center animate-slide-up">
            <div className="text-5xl mb-4">🎂</div>
            <h2 className="text-2xl font-bold text-cloud-white mb-2">Hey {name}!</h2>
            <p className="text-cloud-dim mb-6">Pick your age group so we can customize your experience:</p>
            <div className="flex gap-4 justify-center mb-8">
              <button
                onClick={() => setAgeGroup('7-9')}
                className={`glass-card p-6 cursor-pointer transition-all duration-300 flex-1 max-w-[200px] ${
                  ageGroup === '7-9' ? 'border-neon-cyan shadow-glow-cyan scale-105' : 'hover:border-electric-violet'
                }`}
              >
                <div className="text-3xl mb-2">🌟</div>
                <div className="font-bold text-lg">Ages 7-9</div>
                <div className="text-xs text-cloud-dim mt-1">Bigger text, warmer colors</div>
              </button>
              <button
                onClick={() => setAgeGroup('10-13')}
                className={`glass-card p-6 cursor-pointer transition-all duration-300 flex-1 max-w-[200px] ${
                  ageGroup === '10-13' ? 'border-neon-cyan shadow-glow-cyan scale-105' : 'hover:border-electric-violet'
                }`}
              >
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-bold text-lg">Ages 10-13</div>
                <div className="text-xs text-cloud-dim mt-1">Pro layout, cooler tones</div>
              </button>
            </div>
            <button onClick={handleAgeSubmit} className="btn-primary py-3 px-8 text-lg">
              Next
            </button>
          </div>
        )}

        {step === 'companion' && (
          <div className="glass-card p-8 text-center animate-slide-up">
            <h2 className="text-2xl font-bold text-gradient mb-2">Choose Your Companion!</h2>
            <p className="text-cloud-dim mb-6">
              Your companion will guide you through every quest, celebrate your wins, and help when you're stuck.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {companions.map(comp => (
                <button
                  key={comp.id}
                  onClick={() => {
                    setSelectedId(comp.id);
                    setCompanionCustomName('');
                  }}
                  className={`glass-card p-5 cursor-pointer transition-all duration-300 text-left ${
                    selectedId === comp.id
                      ? 'border-electric-violet shadow-glow-violet scale-[1.02]'
                      : 'hover:border-electric-violet/50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-4xl">{comp.emoji}</span>
                    <div>
                      <div className="font-bold text-cloud-white">{comp.name}</div>
                      <div className="text-xs text-cloud-dim">{comp.type}</div>
                      <div className="text-xs text-cloud-dim mt-1">{comp.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {selectedId && (
              <div className="mb-6 animate-slide-up">
                <p className="text-sm text-cloud-dim mb-2">Give your companion a custom name (optional):</p>
                <input
                  type="text"
                  value={companionCustomName}
                  onChange={(e) => setCompanionCustomName(e.target.value)}
                  placeholder={companions.find(c => c.id === selectedId)?.name || 'Custom name...'}
                  className="w-full max-w-xs mx-auto bg-deep-space-lighter border border-card-border rounded-lg px-4 py-2 text-cloud-white text-center focus:outline-none focus:border-electric-violet transition-colors"
                  maxLength={20}
                />
              </div>
            )}

            <button
              onClick={handleSelect}
              disabled={!selectedId}
              className="btn-primary py-3 px-8 text-lg disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Start My Quest!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
