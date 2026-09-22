import { useState, useRef } from 'react';
import { useOverlay } from '../hooks/useOverlay.js';
import { Icon } from './Icons.jsx';
import './AuthModal.css';

export default function AuthModal({ mode, onClose, onSwitch, onSuccess }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const containerRef = useOverlay({ isOpen: true, onClose });

  const isSignup = mode === 'signup';

  const validate = () => {
    const e = {};
    if (isSignup && !name.trim()) e.name = 'Name is required.';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) e.email = 'Enter a valid email.';
    if (password.length < 6) e.password = 'Password must be at least 6 characters.';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setLoading(true);
    // Simulate async auth
    setTimeout(() => {
      setLoading(false);
      onSuccess(isSignup ? name.trim() : email.split('@')[0]);
    }, 900);
  };

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={isSignup ? 'Sign up' : 'Log in'}>
      <div className="modal-panel" ref={containerRef}>
        <div className="modal-panel__header">
          <button className="modal-panel__close" onClick={onClose} aria-label="Close">
            <Icon.Close width={20} height={20} />
          </button>
          <h2 className="modal-panel__title">{isSignup ? 'Create account' : 'Log in'}</h2>
        </div>

        <div className="modal-panel__body">
          <p className="auth-modal__welcome">
            {isSignup ? 'Welcome to Stayfolio' : 'Welcome back'}
          </p>

          <form className="auth-modal__form" onSubmit={handleSubmit} noValidate>
            {isSignup && (
              <div className="auth-modal__field">
                <label htmlFor="auth-name">Full name</label>
                <input
                  id="auth-name"
                  type="text"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setErrors((x) => ({ ...x, name: '' })); }}
                  autoComplete="name"
                  placeholder="Jane Smith"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <span className="auth-modal__error">{errors.name}</span>}
              </div>
            )}

            <div className="auth-modal__field">
              <label htmlFor="auth-email">Email address</label>
              <input
                id="auth-email"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setErrors((x) => ({ ...x, email: '' })); }}
                autoComplete="email"
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
              />
              {errors.email && <span className="auth-modal__error">{errors.email}</span>}
            </div>

            <div className="auth-modal__field">
              <label htmlFor="auth-password">Password</label>
              <input
                id="auth-password"
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setErrors((x) => ({ ...x, password: '' })); }}
                autoComplete={isSignup ? 'new-password' : 'current-password'}
                placeholder="At least 6 characters"
                aria-invalid={!!errors.password}
              />
              {errors.password && <span className="auth-modal__error">{errors.password}</span>}
            </div>

            <button type="submit" className="auth-modal__submit" disabled={loading}>
              {loading ? 'Please wait…' : isSignup ? 'Create account' : 'Log in'}
            </button>
          </form>

          <div className="auth-modal__divider"><span>or</span></div>

          <div className="auth-modal__socials">
            <button className="auth-modal__social-btn">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Continue with Google
            </button>
            <button className="auth-modal__social-btn">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Continue with Apple
            </button>
          </div>

          <p className="auth-modal__switch">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button className="auth-modal__switch-btn" onClick={() => onSwitch(isSignup ? 'login' : 'signup')}>
              {isSignup ? 'Log in' : 'Sign up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
