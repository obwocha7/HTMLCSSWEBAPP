import React, { useState, useCallback, useMemo, useEffect } from 'react';
import SlidePanel from './SlidePanel';
import CodeEditor from './CodeEditor';
import LivePreview from './LivePreview';
import TaskPanel from './TaskPanel';
import ParticleExplosion from '../Gamification/ParticleExplosion';
import curriculum from '../../data/curriculum';

function findLesson(lessonId) {
  for (const world of curriculum) {
    for (const mod of world.modules) {
      const idx = mod.lessons.findIndex(l => l.id === lessonId);
      if (idx !== -1) {
        return {
          lesson: mod.lessons[idx],
          module: mod,
          world,
          lessonIndex: idx,
          nextLesson: mod.lessons[idx + 1] || null,
        };
      }
    }
  }
  return null;
}

function findNextLessonGlobal(lessonId) {
  let found = false;
  for (const world of curriculum) {
    for (const mod of world.modules) {
      for (const lesson of mod.lessons) {
        if (found) return lesson;
        if (lesson.id === lessonId) found = true;
      }
    }
  }
  return null;
}

function validateCode(lesson, code) {
  if (!lesson.validation) {
    return lesson.objectives.map(() => code.trim().length > 0);
  }
  try {
    return lesson.validation(code);
  } catch {
    return lesson.objectives.map(() => false);
  }
}

export default function LessonView({
  lessonId,
  completedLessons,
  onCompleteLesson,
  onNavigateLesson,
  onBack,
  companionMood,
  setCompanionMood,
  addToast,
}) {
  const found = useMemo(() => findLesson(lessonId), [lessonId]);
  const [code, setCode] = useState('');
  const [previewCode, setPreviewCode] = useState('');
  const [objectiveResults, setObjectiveResults] = useState(null);
  const [isComplete, setIsComplete] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (found) {
      setCode(found.lesson.starterCode || '');
      setPreviewCode('');
      setObjectiveResults(null);
      setIsComplete(completedLessons.includes(found.lesson.id));
      setShowParticles(false);
      setShowSuccess(false);
      if (setCompanionMood) setCompanionMood('idle');
    }
  }, [lessonId, found, completedLessons, setCompanionMood]);

  const handleRun = useCallback(() => {
    if (!found) return;

    if (isComplete) {
      const next = findNextLessonGlobal(lessonId);
      if (next) {
        onNavigateLesson(next.id);
      } else {
        onBack();
      }
      return;
    }

    setPreviewCode(code);
    const results = validateCode(found.lesson, code);
    setObjectiveResults(results);

    const allPassed = results.every(Boolean);

    if (allPassed) {
      setIsComplete(true);
      setShowParticles(true);
      setShowSuccess(true);
      if (setCompanionMood) setCompanionMood('success');
      onCompleteLesson(found.lesson.id, found.lesson.xpReward);
      if (addToast) {
        addToast({
          title: 'Lesson Complete!',
          message: `+${found.lesson.xpReward} XP earned!`,
          icon: '🎉',
          color: '#06D6A0',
        });
      }
      setTimeout(() => {
        setShowParticles(false);
        setShowSuccess(false);
      }, 2000);
    } else {
      if (setCompanionMood) setCompanionMood('error');
      setTimeout(() => {
        if (setCompanionMood) setCompanionMood('idle');
      }, 3000);
    }
  }, [found, code, isComplete, lessonId, onCompleteLesson, onNavigateLesson, onBack, setCompanionMood, addToast]);

  const handleShowSolution = useCallback(() => {
    if (found && found.lesson.solution) {
      setCode(found.lesson.solution);
      setPreviewCode(found.lesson.solution);
    }
  }, [found]);

  if (!found) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4">🔍</div>
        <h2 className="text-xl font-bold text-cloud-white mb-2">Lesson Not Found</h2>
        <button onClick={onBack} className="btn-primary mt-4">
          Back to World Map
        </button>
      </div>
    );
  }

  const { lesson, world } = found;

  return (
    <div className="space-y-4 animate-slide-up">
      {/* Lesson Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="text-cloud-dim hover:text-cloud-white transition-colors text-sm px-2 py-1 rounded-lg hover:bg-deep-space-lighter"
          >
            ← Back
          </button>
          <div>
            <div className="text-xs text-cloud-dim">{world.name}</div>
            <h2 className="text-lg font-bold text-cloud-white">{lesson.title}</h2>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {lesson.type === 'concept' && (
            <span className="text-xs px-2 py-1 rounded-full bg-electric-violet/20 text-electric-violet-light">
              Concept
            </span>
          )}
          {lesson.type === 'guided' && (
            <span className="text-xs px-2 py-1 rounded-full bg-neon-cyan/20 text-neon-cyan">
              Guided
            </span>
          )}
          {lesson.type === 'challenge' && (
            <span className="text-xs px-2 py-1 rounded-full bg-solar-gold/20 text-solar-gold">
              ⭐ Challenge
            </span>
          )}
        </div>
      </div>

      {/* Slides */}
      {lesson.slides && <SlidePanel slides={lesson.slides} lessonId={lesson.id} />}

      {/* Editor + Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 relative">
        <ParticleExplosion active={showParticles} x={200} y={200} />
        <div className="h-[350px]">
          <CodeEditor
            code={code}
            onChange={setCode}
            language="html"
          />
        </div>
        <div className="h-[350px]">
          <LivePreview code={previewCode} showSuccess={showSuccess} />
        </div>
      </div>

      {/* Task Panel */}
      <TaskPanel
        objectives={lesson.objectives}
        objectiveResults={objectiveResults}
        hints={lesson.hints}
        onRun={handleRun}
        onShowSolution={handleShowSolution}
        isComplete={isComplete}
        xpReward={lesson.xpReward}
      />
    </div>
  );
}
