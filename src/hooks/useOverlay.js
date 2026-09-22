import { useEffect, useRef } from 'react';

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

/**
 * Traps focus inside an overlay, restores it to the trigger element on close,
 * locks background scroll, and wires Escape to `onClose`.
 * `onKey` receives every keydown so callers can add arrow-key navigation etc.
 */
export function useOverlay({ isOpen, onClose, onKey }) {
  const containerRef = useRef(null);
  const previouslyFocused = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    previouslyFocused.current = document.activeElement;

    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const container = containerRef.current;
    const focusFirst = () => {
      const focusables = container?.querySelectorAll(FOCUSABLE);
      (focusables && focusables[0] ? focusables[0] : container)?.focus();
    };
    // Defer so the overlay has mounted into the DOM.
    const id = requestAnimationFrame(focusFirst);

    function handleKeydown(e) {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key === 'Tab' && container) {
        const focusables = Array.from(container.querySelectorAll(FOCUSABLE)).filter(
          (el) => el.offsetParent !== null
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
      onKey?.(e);
    }

    document.addEventListener('keydown', handleKeydown, true);
    return () => {
      cancelAnimationFrame(id);
      document.removeEventListener('keydown', handleKeydown, true);
      document.body.style.overflow = original;
      previouslyFocused.current?.focus?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return containerRef;
}
