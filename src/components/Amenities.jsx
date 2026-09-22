import { useState } from 'react';
import { Icon } from './Icons.jsx';
import { useOverlay } from '../hooks/useOverlay.js';
import './Amenities.css';

const AMENITY_ICON = {
  view: Icon.View, wifi: Icon.Wifi, kitchen: Icon.Kitchen, washer: Icon.Washer,
  fire: Icon.Fire, hottub: Icon.Hottub, parking: Icon.Parking, workspace: Icon.Workspace,
  tv: Icon.Tv, ac: Icon.Ac, heating: Icon.Heating, smoke: Icon.Smoke,
};

export default function Amenities({ amenities }) {
  const [open, setOpen] = useState(false);
  const containerRef = useOverlay({ isOpen: open, onClose: () => setOpen(false) });
  const shown = amenities.slice(0, 6);

  return (
    <section className="amenities" id="amenities">
      <h2 className="section-heading">What this place offers</h2>
      <ul className="amenities__grid">
        {shown.map((a) => {
          const Cmp = AMENITY_ICON[a.icon];
          return (
            <li className="amenities__item" key={a.label}>
              <Cmp width={24} height={24} />
              <span>{a.label}</span>
            </li>
          );
        })}
      </ul>
      <button className="amenities__show-all" onClick={() => setOpen(true)}>
        Show all {amenities.length} amenities
      </button>

      {open && (
        <div className="amenities-modal" role="dialog" aria-modal="true" aria-label="All amenities">
          <div className="amenities-modal__panel" ref={containerRef}>
            <div className="amenities-modal__header">
              <button
                className="amenities-modal__close"
                onClick={() => setOpen(false)}
                aria-label="Close amenities list"
              >
                <Icon.Close width={20} height={20} />
              </button>
            </div>
            <div className="amenities-modal__body">
              <h3>What this place offers</h3>
              <ul className="amenities-modal__list">
                {amenities.map((a) => {
                  const Cmp = AMENITY_ICON[a.icon];
                  return (
                    <li key={a.label}>
                      <Cmp width={24} height={24} />
                      <span>{a.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
