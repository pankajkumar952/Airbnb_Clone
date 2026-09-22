import { Icon } from './Icons.jsx';
import './HostSection.css';

export default function HostSection({ host, onContact }) {
  return (
    <section className="host-section">
      <div className="host-section__card">
        <img src={host.avatar} alt="" className="host-section__avatar" />
        <div>
          <h2 className="host-section__name">Hosted by {host.name}</h2>
          <p className="host-section__meta">{host.yearsHosting} years hosting</p>
        </div>
      </div>
      <ul className="host-section__stats">
        <li>
          <strong>{host.reviews}</strong>
          <span>Reviews</span>
        </li>
        <li>
          <strong className="host-section__stat-star">
            <Icon.Star width={14} height={14} /> 4.97
          </strong>
          <span>Rating</span>
        </li>
        <li>
          <strong>{host.isSuperhost ? 'Yes' : 'No'}</strong>
          <span>Superhost</span>
        </li>
      </ul>
      <p className="host-section__body">
        {host.isSuperhost && (
          <>
            <Icon.Superhost width={16} height={16} className="host-section__badge-icon" /> Superhosts are experienced, highly rated hosts committed to providing great stays.<br />
          </>
        )}
        Response rate: {host.responseRate}% · Responds {host.responseTime}
      </p>
      <button className="host-section__contact" onClick={onContact}>Contact host</button>
    </section>
  );
}
