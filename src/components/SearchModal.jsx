import { useState, useRef } from 'react';
import { useOverlay } from '../hooks/useOverlay.js';
import { Icon } from './Icons.jsx';
import './SearchModal.css';

const SUGGESTIONS = ['Big Sur, California', 'Malibu, California', 'Carmel-by-the-Sea', 'Santa Barbara', 'Lake Tahoe', 'Napa Valley'];

export default function SearchModal({ onClose, onSearch }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const containerRef = useOverlay({ isOpen: true, onClose });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query.trim());
  };

  const handleSuggestion = (s) => {
    setQuery(s);
    onSearch(s);
  };

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Search">
      <div className="modal-panel search-modal" ref={containerRef}>
        <div className="modal-panel__header">
          <button className="modal-panel__close" onClick={onClose} aria-label="Close"><Icon.Close width={20} height={20} /></button>
          <h2 className="modal-panel__title">Where to?</h2>
        </div>
        <div className="modal-panel__body">
          <form className="search-modal__form" onSubmit={handleSubmit}>
            <div className="search-modal__input-wrap">
              <Icon.Search width={18} height={18} className="search-modal__icon" />
              <input
                ref={inputRef}
                type="search"
                className="search-modal__input"
                placeholder="Search destinations"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                aria-label="Search destinations"
              />
            </div>
            <button type="submit" className="search-modal__btn" disabled={!query.trim()}>Search</button>
          </form>

          <p className="search-modal__label">Suggested destinations</p>
          <ul className="search-modal__suggestions">
            {SUGGESTIONS.map((s) => (
              <li key={s}>
                <button className="search-modal__suggestion" onClick={() => handleSuggestion(s)}>
                  <span className="search-modal__pin"><Icon.Pin width={16} height={16} /></span>
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
