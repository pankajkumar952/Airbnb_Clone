import { Icon } from './Icons.jsx';
import './PhotoGrid.css';

export default function PhotoGrid({ photos, onOpenTour, onOpenLightbox }) {
  const shown = photos.slice(0, 5);

  return (
    <div className="photo-grid" aria-label="Property photos">
      <button
        className="photo-grid__cell photo-grid__cell--hero"
        onClick={() => onOpenLightbox(0)}
        aria-label={`View photo 1 of ${photos.length}: ${shown[0].alt}`}
      >
        <img src={shown[0].src} alt={shown[0].alt} loading="eager" />
      </button>
      {shown.slice(1).map((p, i) => (
        <button
          key={p.id}
          className="photo-grid__cell"
          onClick={() => onOpenLightbox(i + 1)}
          aria-label={`View photo ${i + 2} of ${photos.length}: ${p.alt}`}
        >
          <img src={p.src} alt={p.alt} loading="lazy" />
        </button>
      ))}
      <button className="photo-grid__show-all" onClick={onOpenTour}>
        <Icon.Grid width={16} height={16} />
        Show all photos
      </button>
    </div>
  );
}
