import { useState } from 'react';
import { useOverlay } from '../hooks/useOverlay.js';
import { Icon } from './Icons.jsx';
import './ContactModal.css';

export default function ContactModal({ host, onClose, onSend }) {
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const containerRef = useOverlay({ isOpen: true, onClose });

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) { setErrors({ message: 'Please write a message.' }); return; }
    setErrors({});
    setLoading(true);
    setTimeout(() => { setLoading(false); onSend(); }, 800);
  };

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Contact host">
      <div className="modal-panel contact-modal" ref={containerRef}>
        <div className="modal-panel__header">
          <button className="modal-panel__close" onClick={onClose} aria-label="Close"><Icon.Close width={20} height={20} /></button>
          <h2 className="modal-panel__title">Contact {host.name}</h2>
        </div>
        <div className="modal-panel__body">
          <div className="contact-modal__host">
            <img src={host.avatar} alt="" className="contact-modal__avatar" />
            <div>
              <p className="contact-modal__name">{host.name}</p>
              <p className="contact-modal__meta">Responds {host.responseTime} · {host.responseRate}% response rate</p>
            </div>
          </div>

          <form className="contact-modal__form" onSubmit={handleSend} noValidate>
            <div className="auth-modal__field">
              <label htmlFor="contact-msg">Your message</label>
              <textarea
                id="contact-msg"
                rows={5}
                value={message}
                onChange={(e) => { setMessage(e.target.value); setErrors({}); }}
                placeholder="Hi Marguerite, I'm interested in your listing and wanted to ask…"
                aria-invalid={!!errors.message}
                className="contact-modal__textarea"
              />
              {errors.message && <span className="auth-modal__error">{errors.message}</span>}
              <span className="contact-modal__count">{message.length}/500</span>
            </div>

            <button type="submit" className="auth-modal__submit" disabled={loading || message.length > 500}>
              {loading ? 'Sending…' : 'Send message'}
            </button>
          </form>

          <p className="contact-modal__note">
            <Icon.Flag width={14} height={14} style={{ verticalAlign: '-2px', marginRight: 4 }} />
            To protect your payment, never transfer money or communicate outside Stayfolio.
          </p>
        </div>
      </div>
    </div>
  );
}
