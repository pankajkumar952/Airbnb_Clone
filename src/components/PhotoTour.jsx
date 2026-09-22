import { useOverlay } from '../hooks/useOverlay.js';
import { Icon } from './Icons.jsx';
import './PhotoTour.css';

export default function PhotoTour({ photos, isOpen, onClose, onOpenLightbox, onShare }) {
  const containerRef = useOverlay({ isOpen, onClose });

  if (!isOpen) return null;

  return (
    <div
      className="tour-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="All photos"
      ref={containerRef}
    >
      <div className="tour-overlay__header">
        <button className="tour-overlay__close" onClick={onClose} aria-label="Close photo tour">
          <Icon.Close width={20} height={20} />
        </button>
        <div className="tour-overlay__actions">
          <button className="tour-overlay__pill" onClick={onShare}>
            <Icon.Share width={16} height={16} /> Share
          </button>
          <button className="tour-overlay__pill">
            <Icon.Heart width={16} height={16} /> Save
          </button>
        </div>
      </div>

      <div className="tour-overlay__body">
        <div className="tour-grid">
          {photos.map((p, i) => (
            <button
              key={p.id}
              className={`tour-grid__item ${i % 5 === 0 ? 'tour-grid__item--wide' : ''}`}
              onClick={() => onOpenLightbox(i)}
              aria-label={`Open photo ${i + 1} of ${photos.length} in full view: ${p.alt}`}
            >
              <img src={p.src} alt={p.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
