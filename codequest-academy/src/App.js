import React, { useState, useCallback } from 'react';
import useGameState from './hooks/useGameState';
import CompanionSelect from './components/Companion/CompanionSelect';
import TopNav from './components/Layout/TopNav';
import Sidebar from './components/Layout/Sidebar';
import BottomBar from './components/Layout/BottomBar';
import Dashboard from './components/Dashboard/Dashboard';
import WorldMap from './components/WorldMap/WorldMap';
import LessonView from './components/Lesson/LessonView';
import ProfilePage from './components/Profile/ProfilePage';
import LevelUpModal from './components/Gamification/LevelUpModal';
import AchievementToast from './components/Gamification/AchievementToast';

function StarsBackground() {
  return (
    <div className="stars-bg">
      {Array.from({ length: 80 }, (_, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${1 + Math.random() * 2}s`,
            opacity: Math.random() * 0.5 + 0.2,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const game = useGameState();
  const [currentView, setCurrentView] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [companionMood, setCompanionMood] = useState('idle');

  const handleNavigate = useCallback((view) => {
    setCurrentView(view);
  }, []);

  const handleSelectWorld = useCallback((worldId) => {
    game.setCurrentWorld(worldId);
    setCurrentView('worldmap');
  }, [game]);

  const handleStartLesson = useCallback((lessonId) => {
    game.setCurrentLesson(lessonId);
    setCurrentView('lesson');
  }, [game]);

  const handleCompleteLesson = useCallback((lessonId, xpReward) => {
    game.completeLesson(lessonId, xpReward);
  }, [game]);

  const handleNavigateLesson = useCallback((lessonId) => {
    game.setCurrentLesson(lessonId);
  }, [game]);

  const handleCompanionSelect = useCallback((companionId, companionName, ageGroup) => {
    game.setCompanion(companionId, companionName);
    if (ageGroup) game.setAgeGroup(ageGroup);
  }, [game]);

  const handleSetPlayerName = useCallback((name) => {
    game.setPlayerName(name);
  }, [game]);

  // Onboarding: no companion selected yet
  if (!game.companionId) {
    return (
      <CompanionSelect
        onSelect={handleCompanionSelect}
        playerName={game.playerName}
        onSetName={handleSetPlayerName}
      />
    );
  }

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return (
          <Dashboard
            playerName={game.playerName}
            level={game.level}
            rank={game.rank}
            xp={game.xp}
            xpProgress={game.xpProgress}
            xpForNext={game.xpForNext}
            streak={game.streak}
            gems={game.gems}
            completedLessons={game.completedLessons}
            completedModules={game.completedModules}
            completedCapstones={game.completedCapstones}
            earnedBadges={game.earnedBadges}
            companionId={game.companionId}
            companionName={game.companionName}
            onNavigate={handleNavigate}
            onSelectWorld={handleSelectWorld}
            onStartLesson={handleStartLesson}
          />
        );
      case 'worldmap':
      case 'quests':
        return (
          <WorldMap
            currentWorld={game.currentWorld}
            completedLessons={game.completedLessons}
            completedModules={game.completedModules}
            completedCapstones={game.completedCapstones}
            onSelectWorld={handleSelectWorld}
            onStartLesson={handleStartLesson}
            onNavigate={handleNavigate}
          />
        );
      case 'lesson':
        return (
          <LessonView
            lessonId={game.currentLesson}
            completedLessons={game.completedLessons}
            onCompleteLesson={handleCompleteLesson}
            onNavigateLesson={handleNavigateLesson}
            onBack={() => setCurrentView('worldmap')}
            companionMood={companionMood}
            setCompanionMood={setCompanionMood}
            addToast={game.addToast}
          />
        );
      case 'profile':
        return (
          <ProfilePage
            playerName={game.playerName}
            level={game.level}
            rank={game.rank}
            xp={game.xp}
            xpProgress={game.xpProgress}
            xpForNext={game.xpForNext}
            xpForCurrent={game.xpForCurrent}
            gems={game.gems}
            streak={game.streak}
            completedLessons={game.completedLessons}
            completedModules={game.completedModules}
            completedCapstones={game.completedCapstones}
            earnedBadges={game.earnedBadges}
            bugsFixed={game.bugsFixed}
            perfectLessons={game.perfectLessons}
            companionId={game.companionId}
            companionName={game.companionName}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-deep-space text-cloud-white font-body">
      <StarsBackground />

      <TopNav
        playerName={game.playerName}
        level={game.level}
        xp={game.xp}
        xpProgress={game.xpProgress}
        xpForNext={game.xpForNext}
        rank={game.rank}
        gems={game.gems}
        streak={game.streak}
        onNavigate={handleNavigate}
        currentView={currentView}
      />

      <Sidebar
        companionId={game.companionId}
        companionName={game.companionName}
        level={game.level}
        companionMood={companionMood}
        currentWorld={game.currentWorld}
        completedLessons={game.completedLessons}
        completedModules={game.completedModules}
        earnedBadges={game.earnedBadges}
        onNavigate={handleNavigate}
        onSelectWorld={handleSelectWorld}
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      <main
        className={`relative z-10 pt-14 pb-14 transition-all duration-300 ${
          sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'
        } px-4 sm:px-6`}
      >
        <div className="max-w-5xl mx-auto py-4">
          {renderContent()}
        </div>
      </main>

      <BottomBar
        onNavigate={handleNavigate}
        onResetProgress={game.resetProgress}
      />

      <AchievementToast toasts={game.toasts} />

      {game.showLevelUp && (
        <LevelUpModal
          level={game.newLevel}
          onDismiss={game.dismissLevelUp}
        />
      )}
    </div>
  );
}
