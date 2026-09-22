import { Icon } from './Icons.jsx';
import './MapSection.css';

export default function MapSection({ listing }) {
  return (
    <section className="map-section" id="location">
      <h2 className="section-heading">Where you'll be</h2>
      <p className="map-section__location">{listing.location}</p>
      <div className="map-section__canvas" role="img" aria-label={`Approximate map location for ${listing.location}`}>
        <svg viewBox="0 0 800 320" preserveAspectRatio="xMidYMid slice" className="map-section__svg">
          <rect width="800" height="320" fill="#EAE7E1" />
          {Array.from({ length: 10 }).map((_, i) => (
            <path
              key={`h${i}`}
              d={`M0 ${i * 34} Q 400 ${i * 34 + (i % 2 === 0 ? 24 : -24)} 800 ${i * 34}`}
              stroke="#DAD6CC"
              strokeWidth="1"
              fill="none"
            />
          ))}
          {Array.from({ length: 14 }).map((_, i) => (
            <path
              key={`v${i}`}
              d={`M${i * 58} 0 Q ${i * 58 + (i % 2 === 0 ? 24 : -24)} 160 ${i * 58} 320`}
              stroke="#DAD6CC"
              strokeWidth="1"
              fill="none"
            />
          ))}
        </svg>
        <div className="map-section__pin">
          <Icon.Pin width={30} height={30} />
        </div>
      </div>
      <p className="map-section__note">
        Exact location provided after booking. Big Sur is known for dramatic coastline, redwood forest, and limited cell reception.
      </p>
    </section>
  );
}
