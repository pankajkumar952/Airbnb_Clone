import { useState, useRef, useEffect } from 'react';
import { Icon } from './Icons.jsx';
import './BookingCard.css';

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  return d.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' });
}

function daysBetween(a, b) {
  if (!a || !b) return 0;
  const da = new Date(a);
  const db = new Date(b);
  if (isNaN(da) || isNaN(db)) return 0;
  const diff = (db - da) / (1000 * 60 * 60 * 24);
  return diff > 0 ? Math.round(diff) : 0;
}

function today() {
  return new Date().toISOString().split('T')[0];
}

function addDays(dateStr, n) {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + n);
  return d.toISOString().split('T')[0];
}

export default function BookingCard({ listing, onAuth }) {
  const [checkIn, setCheckIn] = useState('2027-01-02');
  const [checkOut, setCheckOut] = useState('2027-01-07');
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [guests, setGuests] = useState(1);
  const [reserved, setReserved] = useState(false);
  const [error, setError] = useState('');
  const guestsRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (
        guestsOpen &&
        guestsRef.current &&
        !guestsRef.current.contains(e.target) &&
        !triggerRef.current.contains(e.target)
      ) {
        setGuestsOpen(false);
      }
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [guestsOpen]);

  const nights = daysBetween(checkIn, checkOut);
  const subtotal = listing.pricePerNight * nights;
  const total = subtotal + listing.cleaningFee + listing.serviceFee;

  const handleCheckIn = (e) => {
    const val = e.target.value;
    setCheckIn(val);
    setReserved(false);
    setError('');
    // Auto-advance checkout if needed
    if (checkOut && val >= checkOut) {
      setCheckOut(addDays(val, 1));
    }
  };

  const handleCheckOut = (e) => {
    const val = e.target.value;
    setReserved(false);
    setError('');
    if (val <= checkIn) {
      setError('Checkout must be after check-in.');
      return;
    }
    setCheckOut(val);
  };

  const handleReserve = () => {
    if (!checkIn || !checkOut) {
      setError('Please select check-in and checkout dates.');
      return;
    }
    if (nights <= 0) {
      setError('Checkout must be after check-in.');
      return;
    }
    setError('');
    setReserved(true);
  };

  return (
    <aside className="booking-card" aria-label="Booking">
      <div className="booking-card__price-row">
        <span className="booking-card__price">{listing.currency}{listing.pricePerNight}</span>
        <span className="booking-card__unit">night</span>
        <span className="booking-card__spacer" />
        <span className="booking-card__rating">
          <Icon.Star width={13} height={13} /> {listing.rating} · <a href="#reviews">{listing.reviewCount} reviews</a>
        </span>
      </div>

      <div className="booking-card__fields">
        <div className="booking-card__dates">
          <label className="booking-card__field">
            <span className="booking-card__field-label">CHECK-IN</span>
            <input
              type="date"
              value={checkIn}
              min={today()}
              onChange={handleCheckIn}
              aria-label="Check-in date"
            />
          </label>
          <label className="booking-card__field booking-card__field--border-left">
            <span className="booking-card__field-label">CHECKOUT</span>
            <input
              type="date"
              value={checkOut}
              min={checkIn ? addDays(checkIn, 1) : today()}
              onChange={handleCheckOut}
              aria-label="Checkout date"
            />
          </label>
        </div>
        <div className="booking-card__guests">
          <button
            ref={triggerRef}
            className="booking-card__field booking-card__field--full"
            onClick={() => setGuestsOpen((v) => !v)}
            aria-haspopup="true"
            aria-expanded={guestsOpen}
          >
            <span className="booking-card__field-label">GUESTS</span>
            <span className="booking-card__field-value">
              {guests} guest{guests > 1 ? 's' : ''}
            </span>
          </button>
          {guestsOpen && (
            <div className="booking-card__guests-flyout" ref={guestsRef}>
              <div className="booking-card__stepper">
                <div>
                  <p className="booking-card__stepper-label">Guests</p>
                  <p className="booking-card__stepper-sub">Max {listing.guests} guests</p>
                </div>
                <div className="booking-card__stepper-controls">
                  <button
                    aria-label="Decrease guests"
                    disabled={guests <= 1}
                    onClick={() => setGuests((g) => Math.max(1, g - 1))}
                  >
                    –
                  </button>
                  <span aria-live="polite">{guests}</span>
                  <button
                    aria-label="Increase guests"
                    disabled={guests >= listing.guests}
                    onClick={() => setGuests((g) => Math.min(listing.guests, g + 1))}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {error && <p className="booking-card__error" role="alert">{error}</p>}

      <button className="booking-card__reserve" onClick={handleReserve}>
        Reserve
      </button>

      <p className="booking-card__note" role="status">
        {reserved ? '✓ Request submitted! You won\'t be charged yet.' : 'You won\'t be charged yet'}
      </p>

      {nights > 0 && (
        <div className="booking-card__breakdown">
          <div className="booking-card__line">
            <span className="booking-card__line-underline">
              {listing.currency}{listing.pricePerNight} × {nights} night{nights !== 1 ? 's' : ''}
            </span>
            <span>{listing.currency}{subtotal.toLocaleString()}</span>
          </div>
          <div className="booking-card__line">
            <span className="booking-card__line-underline">Cleaning fee</span>
            <span>{listing.currency}{listing.cleaningFee}</span>
          </div>
          <div className="booking-card__line">
            <span className="booking-card__line-underline">Service fee</span>
            <span>{listing.currency}{listing.serviceFee}</span>
          </div>
          <div className="booking-card__total">
            <span>Total before taxes</span>
            <span>{listing.currency}{total.toLocaleString()}</span>
          </div>
        </div>
      )}
    </aside>
  );
}
