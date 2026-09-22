import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icons.jsx';
import './Header.css';

export default function Header({ onOpenAuth, onOpenSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !btnRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    }
    function onKey(e) {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        btnRef.current?.focus();
      }
    }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#top" className="brand" aria-label="Stayfolio home">
          <Icon.Superhost className="brand__mark" width={28} height={28} />
          <span className="brand__word">stayfolio</span>
        </a>

        <button className="search-pill" aria-label="Start a search" onClick={onOpenSearch}>
          <span className="search-pill__seg">Anywhere</span>
          <span className="search-pill__divider" />
          <span className="search-pill__seg">Any week</span>
          <span className="search-pill__divider" />
          <span className="search-pill__seg search-pill__seg--muted">Add guests</span>
          <span className="search-pill__icon">
            <Icon.Search width={14} height={14} />
          </span>
        </button>

        <div className="header-actions">
          <button className="host-link" onClick={() => onOpenAuth('signup')}>Host a home</button>
          <button className="icon-btn" aria-label="Choose a language and region">
            <Icon.Globe width={18} height={18} />
          </button>
          <div className="user-menu">
            <button
              ref={btnRef}
              className="user-menu__trigger"
              aria-haspopup="true"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <Icon.Menu width={16} height={16} />
              <Icon.User width={28} height={28} className="user-menu__avatar" />
            </button>
            {menuOpen && (
              <div className="user-menu__flyout" role="menu" ref={menuRef}>
                <button
                  role="menuitem"
                  className="user-menu__item user-menu__item--bold"
                  onClick={() => { setMenuOpen(false); onOpenAuth('signup'); }}
                >
                  Sign up
                </button>
                <button
                  role="menuitem"
                  className="user-menu__item"
                  onClick={() => { setMenuOpen(false); onOpenAuth('login'); }}
                >
                  Log in
                </button>
                <div className="user-menu__sep" />
                <button role="menuitem" className="user-menu__item">Gift cards</button>
                <button role="menuitem" className="user-menu__item">Help Centre</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
