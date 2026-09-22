import { useState } from 'react';
import { Icon } from './Icons.jsx';
import './TitleBar.css';

export default function TitleBar({ listing, onShare, onSaveToast }) {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    const next = !saved;
    setSaved(next);
    onSaveToast?.(next ? 'Saved to your Wish List!' : 'Removed from Wish List', next ? 'success' : 'info');
  };

  return (
    <div className="title-bar">
      <h1 className="title-bar__title">{listing.title}</h1>
      <div className="title-bar__row">
        <div className="title-bar__meta">
          <span className="title-bar__rating">
            <Icon.Star width={14} height={14} /> {listing.rating}
          </span>
          <span className="title-bar__dot">·</span>
          <a href="#reviews" className="title-bar__link">{listing.reviewCount} reviews</a>
          <span className="title-bar__dot">·</span>
          <a href="#location" className="title-bar__link title-bar__location">{listing.location}</a>
        </div>
        <div className="title-bar__actions">
          <button className="title-bar__action" onClick={onShare} aria-label="Share this listing">
            <Icon.Share width={16} height={16} /> Share
          </button>
          <button
            className="title-bar__action"
            onClick={handleSave}
            aria-pressed={saved}
            aria-label={saved ? 'Remove from saved' : 'Save to Wish List'}
          >
            <Icon.Heart width={16} height={16} className={saved ? 'is-saved' : ''} />
            {saved ? 'Saved' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
}
