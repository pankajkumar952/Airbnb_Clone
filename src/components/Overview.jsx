import { Icon } from './Icons.jsx';
import './Overview.css';

const HIGHLIGHT_ICON = {
  door: Icon.Door,
  sparkle: Icon.Sparkle,
  calendar: Icon.Calendar,
};

export default function Overview({ listing, host }) {
  return (
    <section className="overview">
      <div className="overview__top">
        <div>
          <h2 className="overview__heading">
            {listing.type} hosted by {host.name}
          </h2>
          <p className="overview__sub">
            {listing.guests} guests · {listing.bedrooms} bedrooms · {listing.beds} beds · {listing.baths} baths
          </p>
        </div>
        <img className="overview__avatar" src={host.avatar} alt={`${host.name}, host`} />
      </div>

      <ul className="highlights">
        {listing.highlights.map((h) => {
          const Cmp = HIGHLIGHT_ICON[h.icon];
          return (
            <li className="highlights__item" key={h.title}>
              <Cmp width={26} height={26} className="highlights__icon" />
              <div>
                <p className="highlights__title">{h.title}</p>
                <p className="highlights__body">{h.body}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
