import './Toast.css';

export default function Toast({ message, type = 'info' }) {
  return (
    <div className={`toast toast--${type}`} role="status" aria-live="polite">
      {type === 'success' && <span aria-hidden="true">✓ </span>}
      {message}
    </div>
  );
}
