import { useRef, useState } from 'react';
import { useOverlay } from '../hooks/useOverlay.js';
import { Icon } from './Icons.jsx';
import './ShareModal.css';

const SHARE_URL = typeof window !== 'undefined' ? window.location.href : 'https://stayfolio.example.com/listing/cliffside-aerie';

export default function ShareModal({ listing, onClose, onCopy }) {
  const containerRef = useOverlay({ isOpen: true, onClose });
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SHARE_URL);
    } catch {
      // fallback
    }
    setCopied(true);
    onCopy?.();
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOptions = [
    { label: 'Copy link', icon: '🔗', action: handleCopy },
    { label: 'Share via Email', icon: '✉️', action: () => { window.location.href = `mailto:?subject=${encodeURIComponent(listing.title)}&body=${encodeURIComponent(SHARE_URL)}`; } },
    { label: 'Share on WhatsApp', icon: '💬', action: () => window.open(`https://wa.me/?text=${encodeURIComponent(listing.title + ' ' + SHARE_URL)}`, '_blank') },
    { label: 'Share on Twitter / X', icon: '𝕏', action: () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(listing.title)}&url=${encodeURIComponent(SHARE_URL)}`, '_blank') },
    { label: 'Share on Facebook', icon: '📘', action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}`, '_blank') },
  ];

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Share this listing">
      <div className="modal-panel share-modal" ref={containerRef}>
        <div className="modal-panel__header">
          <button className="modal-panel__close" onClick={onClose} aria-label="Close"><Icon.Close width={20} height={20} /></button>
          <h2 className="modal-panel__title">Share this place</h2>
        </div>
        <div className="modal-panel__body">
          <div className="share-modal__preview">
            <img src={`https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=200&q=80`} alt="" className="share-modal__thumb" />
            <div>
              <p className="share-modal__name">{listing.title}</p>
              <p className="share-modal__loc">{listing.location}</p>
            </div>
          </div>

          <div className="share-modal__url-row">
            <input
              className="share-modal__url-input"
              readOnly
              value={SHARE_URL}
              aria-label="Listing URL"
              onFocus={(e) => e.target.select()}
            />
            <button className="share-modal__copy-btn" onClick={handleCopy}>
              {copied ? '✓ Copied' : 'Copy'}
            </button>
          </div>

          <ul className="share-modal__list">
            {shareOptions.map((opt) => (
              <li key={opt.label}>
                <button className="share-modal__item" onClick={opt.action}>
                  <span className="share-modal__icon">{opt.icon}</span>
                  <span>{opt.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
