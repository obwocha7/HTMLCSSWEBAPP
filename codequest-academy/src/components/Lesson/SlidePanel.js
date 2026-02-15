import React, { useState, useMemo } from 'react';
import { getSlideImage } from '../../data/slideImages';

export default function SlidePanel({ slides, lessonId }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Reset slide index when lessonId changes
  const [prevLessonId, setPrevLessonId] = useState(lessonId);
  if (lessonId !== prevLessonId) {
    setPrevLessonId(lessonId);
    setCurrentSlide(0);
  }

  const slideImage = useMemo(
    () => getSlideImage(lessonId, currentSlide),
    [lessonId, currentSlide]
  );

  if (!slides || slides.length === 0) return null;

  const slide = slides[currentSlide];

  return (
    <div className="glass-card p-4 overflow-hidden">
      {/* Slide counter + dots */}
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs text-cloud-dim">
          Slide {currentSlide + 1} of {slides.length}
        </div>
        <div className="flex gap-1">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentSlide ? 'bg-electric-violet w-4' : 'bg-deep-space-lighter'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Image + Text layout */}
      <div className={slideImage ? 'flex flex-col sm:flex-row gap-4 items-start' : ''}>
        {/* SVG Illustration */}
        {slideImage && (
          <div
            key={`${lessonId}-${currentSlide}`}
            className="w-full sm:w-1/2 flex-shrink-0 rounded-lg overflow-hidden bg-deep-space-light/50 border border-card-border animate-slide-up"
          >
            <div
              className="w-full"
              dangerouslySetInnerHTML={{ __html: slideImage }}
            />
          </div>
        )}

        {/* Text content */}
        <div className={slideImage ? 'flex-1 min-w-0' : ''}>
          <h3 className="text-base font-bold text-cloud-white mb-2">{slide.title}</h3>
          <p className="text-sm text-cloud-dim leading-relaxed">{slide.content}</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
          disabled={currentSlide === 0}
          className="text-xs text-cloud-dim hover:text-cloud-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors px-3 py-1 rounded-lg hover:bg-deep-space-lighter"
        >
          ← Previous
        </button>
        <button
          onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
          disabled={currentSlide === slides.length - 1}
          className="text-xs text-electric-violet-light hover:text-electric-violet disabled:opacity-30 disabled:cursor-not-allowed transition-colors px-3 py-1 rounded-lg hover:bg-deep-space-lighter"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
