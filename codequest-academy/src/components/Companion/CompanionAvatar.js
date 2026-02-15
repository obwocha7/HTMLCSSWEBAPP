import React, { useState, useEffect } from 'react';
import companions from '../../data/companions';

export default function CompanionAvatar({ companionId, companionName, level, mood = 'idle', compact = false }) {
  const [message, setMessage] = useState('');
  const [showBubble, setShowBubble] = useState(false);
  const companion = companions.find(c => c.id === companionId);

  useEffect(() => {
    if (!companion) return;
    const messages = mood === 'success'
      ? companion.successMessages
      : mood === 'error'
      ? companion.hintMessages
      : companion.idleMessages;
    const msg = messages[Math.floor(Math.random() * messages.length)];
    setMessage(msg.replace('{line}', '?'));
    setShowBubble(true);
    const timer = setTimeout(() => setShowBubble(false), 4000);
    return () => clearTimeout(timer);
  }, [mood, companion]);

  useEffect(() => {
    if (!companion) return;
    const interval = setInterval(() => {
      if (mood === 'idle') {
        const msg = companion.idleMessages[Math.floor(Math.random() * companion.idleMessages.length)];
        setMessage(msg);
        setShowBubble(true);
        setTimeout(() => setShowBubble(false), 3000);
      }
    }, 12000);
    return () => clearInterval(interval);
  }, [companion, mood]);

  if (!companion) return null;

  const evolution = [...companion.evolutions].reverse().find(e => level >= e.level) || companion.evolutions[0];

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-xl">{companion.emoji}</span>
        <span className="text-xs text-cloud-dim">{companionName || companion.name}</span>
      </div>
    );
  }

  return (
    <div className="companion-container flex flex-col items-center">
      {showBubble && (
        <div className="companion-speech-bubble max-w-[200px] whitespace-normal text-center">
          {message}
        </div>
      )}
      <div
        className={`text-5xl ${
          mood === 'success' ? 'animate-companion-excited' :
          mood === 'error' ? 'animate-pulse' :
          'animate-companion-idle'
        }`}
      >
        {companion.emoji}
      </div>
      <div className="mt-1 text-xs font-semibold text-cloud-white">
        {companionName || companion.name}
      </div>
      <div className="text-[10px] text-cloud-dim flex items-center gap-1">
        {evolution.accessory && <span>{evolution.accessory}</span>}
        {evolution.form}
      </div>
    </div>
  );
}
