import { useState, useEffect, useRef } from 'react';
import { useOverlay } from '../hooks/useOverlay.js';
import { Icon } from './Icons.jsx';
import './Lightbox.css';

export default function Lightbox({ photos, index, isOpen, onClose, onChangeIndex }) {
  const [direction, setDirection] = useState('next');
  const liveRef = useRef(null);

  const goNext = () => {
    setDirection('next');
    onChangeIndex((index + 1) % photos.length);
  };
  const goPrev = () => {
    setDirection('prev');
    onChangeIndex((index - 1 + photos.length) % photos.length);
  };

  const containerRef = useOverlay({
    isOpen,
    onClose,
    onKey: (e) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    },
  });

  useEffect(() => {
    if (liveRef.current) {
      liveRef.current.textContent = `Photo ${index + 1} of ${photos.length}`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, isOpen]);

  if (!isOpen) return null;
  const photo = photos[index];

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${photos.length}`}
      ref={containerRef}
    >
      <div className="visually-hidden" aria-live="polite" ref={liveRef} />

      <div className="lightbox__header">
        <button className="lightbox__close" onClick={onClose} aria-label="Close photo viewer">
          <Icon.Close width={22} height={22} />
        </button>
        <span className="lightbox__counter">{index + 1} / {photos.length}</span>
      </div>

      <button
        className="lightbox__nav lightbox__nav--prev"
        onClick={goPrev}
        aria-label="Previous photo"
      >
        <Icon.ChevronLeft width={22} height={22} />
      </button>

      <div className="lightbox__stage">
        <img
          key={photo.id}
          src={photo.src}
          alt={photo.alt}
          className={`lightbox__image lightbox__image--${direction}`}
        />
      </div>

      <button
        className="lightbox__nav lightbox__nav--next"
        onClick={goNext}
        aria-label="Next photo"
      >
        <Icon.ChevronRight width={22} height={22} />
      </button>

      <p className="lightbox__caption">{photo.alt}</p>
    </div>
  );
}
