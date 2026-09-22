import { useState } from 'react';
import { Icon } from './Icons.jsx';
import './Reviews.css';

export default function Reviews({ listing }) {
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? listing.reviews : listing.reviews.slice(0, 4);

  return (
    <section className="reviews" id="reviews">
      <h2 className="section-heading">
        <Icon.Star width={20} height={20} style={{ marginRight: 8, transform: 'translateY(3px)' }} />
        {listing.rating} · {listing.reviewCount} reviews
      </h2>

      <div className="reviews__bars">
        {listing.reviewCategories.map((c) => (
          <div className="reviews__bar-row" key={c.label}>
            <span className="reviews__bar-label">{c.label}</span>
            <span className="reviews__bar-track" aria-hidden="true">
              <span
                className="reviews__bar-fill"
                style={{ width: `${(c.score / 5) * 100}%` }}
              />
            </span>
            <span className="reviews__bar-score">{c.score.toFixed(1)}</span>
          </div>
        ))}
      </div>

      <ul className="reviews__grid">
        {shown.map((r) => (
          <li className="review-card" key={r.id}>
            <div className="review-card__head">
              <img src={r.avatar} alt="" className="review-card__avatar" />
              <div>
                <p className="review-card__name">{r.name}</p>
                <p className="review-card__meta">{r.location}</p>
              </div>
            </div>
            <div className="review-card__stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon.Star key={i} width={11} height={11} />
              ))}
              <span className="review-card__dot">·</span>
              <span className="review-card__date">{r.date}</span>
            </div>
            <p className="review-card__text">{r.text}</p>
          </li>
        ))}
      </ul>

      {!showAll && (
        <button className="reviews__show-all" onClick={() => setShowAll(true)}>
          Show all {listing.reviewCount} reviews
        </button>
      )}
    </section>
  );
}
