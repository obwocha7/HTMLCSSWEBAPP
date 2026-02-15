import { useState, useCallback, useEffect } from 'react';

const LEVEL_THRESHOLDS = [
  0, 100, 250, 450, 700, 1000, 1400, 1900, 2500, 3200,
  4000, 5000, 6200, 7600, 9200, 11000, 13000, 15200, 17600, 20200,
  23000, 26000, 29200, 32600, 36200, 40000, 44000, 48200, 52600, 57200,
  62000, 67000, 72200, 77600, 83200, 89000, 95000, 101200, 107600, 114200,
  121000, 128000, 135200, 142600, 150200, 158000, 166000, 174200, 182600, 191200,
];

const RANK_TITLES = [
  { min: 1, max: 5, title: 'Code Sprout', color: '#06D6A0' },
  { min: 6, max: 15, title: 'Tag Tamer', color: '#7C3AED' },
  { min: 16, max: 25, title: 'Style Sorcerer', color: '#FFD166' },
  { min: 26, max: 35, title: 'Layout Legend', color: '#EF476F' },
  { min: 36, max: 45, title: 'Responsive Ranger', color: '#06D6A0' },
  { min: 46, max: 50, title: 'Web Wizard', color: '#FFD166' },
];

const DEFAULT_STATE = {
  playerName: '',
  companionId: null,
  companionName: '',
  xp: 0,
  level: 1,
  gems: 50,
  streak: 0,
  lastActiveDate: null,
  completedLessons: [],
  completedModules: [],
  completedCapstones: [],
  earnedBadges: [],
  unlockedWorlds: ['world-1', 'world-2', 'world-3', 'world-4', 'world-5'],
  currentWorld: 'world-1',
  currentLesson: null,
  codeSnippets: [],
  bugsFixed: 0,
  perfectLessons: 0,
  editorTheme: 'vs-dark',
  companionAccessories: [],
  toasts: [],
  showLevelUp: false,
  newLevel: 1,
  ageGroup: '10-13',
};

function getLevel(xp) {
  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_THRESHOLDS[i]) return i + 1;
  }
  return 1;
}

function getRank(level) {
  return RANK_TITLES.find(r => level >= r.min && level <= r.max) || RANK_TITLES[0];
}

function getXPForNextLevel(level) {
  if (level >= LEVEL_THRESHOLDS.length) return LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1];
  return LEVEL_THRESHOLDS[level];
}

function getXPForCurrentLevel(level) {
  if (level <= 1) return 0;
  return LEVEL_THRESHOLDS[level - 1];
}

export default function useGameState() {
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem('codequest-state');
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...DEFAULT_STATE, ...parsed, toasts: [], showLevelUp: false };
      }
    } catch (e) { /* ignore */ }
    return DEFAULT_STATE;
  });

  useEffect(() => {
    const { toasts, showLevelUp, ...saveable } = state;
    localStorage.setItem('codequest-state', JSON.stringify(saveable));
  }, [state]);

  const addToast = useCallback((toast) => {
    const id = Date.now() + Math.random();
    setState(prev => ({
      ...prev,
      toasts: [...prev.toasts, { ...toast, id }],
    }));
    setTimeout(() => {
      setState(prev => ({
        ...prev,
        toasts: prev.toasts.filter(t => t.id !== id),
      }));
    }, 4000);
  }, []);

  const gainXP = useCallback((amount) => {
    setState(prev => {
      const newXP = prev.xp + amount;
      const newLevel = getLevel(newXP);
      const leveledUp = newLevel > prev.level;
      return {
        ...prev,
        xp: newXP,
        level: newLevel,
        showLevelUp: leveledUp,
        newLevel: leveledUp ? newLevel : prev.newLevel,
      };
    });
  }, []);

  const completeLesson = useCallback((lessonId, xpReward) => {
    setState(prev => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      const newCompleted = [...prev.completedLessons, lessonId];
      const newXP = prev.xp + xpReward;
      const newLevel = getLevel(newXP);
      const leveledUp = newLevel > prev.level;
      const newGems = prev.gems + Math.floor(xpReward / 10);
      return {
        ...prev,
        completedLessons: newCompleted,
        xp: newXP,
        level: newLevel,
        gems: newGems,
        showLevelUp: leveledUp,
        newLevel: leveledUp ? newLevel : prev.newLevel,
      };
    });
  }, []);

  const completeModule = useCallback((moduleId) => {
    setState(prev => {
      if (prev.completedModules.includes(moduleId)) return prev;
      return { ...prev, completedModules: [...prev.completedModules, moduleId] };
    });
  }, []);

  const completeCapstone = useCallback((capstoneId, worldId, xpReward) => {
    setState(prev => {
      if (prev.completedCapstones.includes(capstoneId)) return prev;
      const worldIndex = ['world-1', 'world-2', 'world-3', 'world-4', 'world-5'].indexOf(worldId);
      const nextWorld = ['world-1', 'world-2', 'world-3', 'world-4', 'world-5'][worldIndex + 1];
      const newUnlocked = nextWorld && !prev.unlockedWorlds.includes(nextWorld)
        ? [...prev.unlockedWorlds, nextWorld]
        : prev.unlockedWorlds;
      const newXP = prev.xp + xpReward;
      const newLevel = getLevel(newXP);
      return {
        ...prev,
        completedCapstones: [...prev.completedCapstones, capstoneId],
        unlockedWorlds: newUnlocked,
        xp: newXP,
        level: newLevel,
        gems: prev.gems + 100,
      };
    });
  }, []);

  const earnBadge = useCallback((badgeId) => {
    setState(prev => {
      if (prev.earnedBadges.includes(badgeId)) return prev;
      return {
        ...prev,
        earnedBadges: [...prev.earnedBadges, badgeId],
        gems: prev.gems + 25,
      };
    });
  }, []);

  const setCompanion = useCallback((companionId, companionName) => {
    setState(prev => ({ ...prev, companionId, companionName }));
  }, []);

  const setPlayerName = useCallback((playerName) => {
    setState(prev => ({ ...prev, playerName }));
  }, []);

  const setCurrentWorld = useCallback((worldId) => {
    setState(prev => ({ ...prev, currentWorld: worldId }));
  }, []);

  const setCurrentLesson = useCallback((lessonId) => {
    setState(prev => ({ ...prev, currentLesson: lessonId }));
  }, []);

  const dismissLevelUp = useCallback(() => {
    setState(prev => ({ ...prev, showLevelUp: false }));
  }, []);

  const incrementBugsFixed = useCallback(() => {
    setState(prev => ({ ...prev, bugsFixed: prev.bugsFixed + 1 }));
  }, []);

  const setAgeGroup = useCallback((ageGroup) => {
    setState(prev => ({ ...prev, ageGroup }));
  }, []);

  const resetProgress = useCallback(() => {
    setState(DEFAULT_STATE);
    localStorage.removeItem('codequest-state');
  }, []);

  const rank = getRank(state.level);
  const xpForNext = getXPForNextLevel(state.level);
  const xpForCurrent = getXPForCurrentLevel(state.level);
  const xpProgress = xpForNext > xpForCurrent
    ? ((state.xp - xpForCurrent) / (xpForNext - xpForCurrent)) * 100
    : 100;

  return {
    ...state,
    rank,
    xpProgress,
    xpForNext,
    xpForCurrent,
    gainXP,
    completeLesson,
    completeModule,
    completeCapstone,
    earnBadge,
    setCompanion,
    setPlayerName,
    setCurrentWorld,
    setCurrentLesson,
    dismissLevelUp,
    incrementBugsFixed,
    setAgeGroup,
    addToast,
    resetProgress,
  };
}
