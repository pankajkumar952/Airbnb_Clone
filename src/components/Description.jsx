import { useState } from 'react';
import './Description.css';

export default function Description({ text }) {
  const [expanded, setExpanded] = useState(false);
  const paragraphs = text.trim().split('\n\n');

  return (
    <section className="description">
      <div className={`description__body ${expanded ? 'is-expanded' : ''}`}>
        {(expanded ? paragraphs : paragraphs.slice(0, 1)).map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      {!expanded && paragraphs.length > 1 && (
        <button className="description__toggle" onClick={() => setExpanded(true)}>
          Show more <span aria-hidden="true">›</span>
        </button>
      )}
      {expanded && (
        <button className="description__toggle" onClick={() => setExpanded(false)}>
          Show less <span aria-hidden="true">‹</span>
        </button>
      )}
    </section>
  );
}
