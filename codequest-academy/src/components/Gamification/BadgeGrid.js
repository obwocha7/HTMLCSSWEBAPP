import React from 'react';
import badges from '../../data/badges';

export default function BadgeGrid({ earnedBadges, category = 'all' }) {
  const allBadges = category === 'all'
    ? [...badges.mastery, ...badges.behavior, ...badges.secret]
    : badges[category] || [];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
      {allBadges.map(badge => {
        const earned = earnedBadges.includes(badge.id);
        return (
          <div
            key={badge.id}
            className={`badge-card ${earned ? 'earned' : 'locked'}`}
            title={earned ? badge.description : '???'}
          >
            <span className="text-3xl">{earned ? badge.icon : '🔒'}</span>
            <span className="text-xs font-semibold text-center leading-tight">
              {earned ? badge.name : '???'}
            </span>
            {earned && (
              <span className="text-[10px] text-cloud-dim text-center leading-tight">
                {badge.description}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
