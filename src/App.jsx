import { useState } from 'react';
import Header from './components/Header.jsx';
import PhotoGrid from './components/PhotoGrid.jsx';
import PhotoTour from './components/PhotoTour.jsx';
import Lightbox from './components/Lightbox.jsx';
import TitleBar from './components/TitleBar.jsx';
import Overview from './components/Overview.jsx';
import Description from './components/Description.jsx';
import Amenities from './components/Amenities.jsx';
import BookingCard from './components/BookingCard.jsx';
import Reviews from './components/Reviews.jsx';
import HostSection from './components/HostSection.jsx';
import MapSection from './components/MapSection.jsx';
import Footer from './components/Footer.jsx';
import AuthModal from './components/AuthModal.jsx';
import ShareModal from './components/ShareModal.jsx';
import ContactModal from './components/ContactModal.jsx';
import SearchModal from './components/SearchModal.jsx';
import Toast from './components/Toast.jsx';
import { photos, listing, host } from './data/listing.js';
import './App.css';

export default function App() {
  const [tourOpen, setTourOpen] = useState(false);
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  // Global modal state
  const [authModal, setAuthModal] = useState({ open: false, mode: 'login' }); // mode: login | signup
  const [shareModal, setShareModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [toast, setToast] = useState(null);

  const openLightbox = (index) => setLightbox({ open: true, index });
  const closeLightbox = () => setLightbox((s) => ({ ...s, open: false }));

  const showToast = (msg, type = 'info') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div id="top">
      <Header
        onOpenAuth={(mode) => setAuthModal({ open: true, mode })}
        onOpenSearch={() => setSearchModal(true)}
      />

      <main className="page">
        <div className="container container--wide">
          <PhotoGrid
            photos={photos}
            onOpenTour={() => setTourOpen(true)}
            onOpenLightbox={openLightbox}
          />
        </div>

        <div className="container layout">
          <div className="layout__main">
            <TitleBar
              listing={listing}
              onShare={() => setShareModal(true)}
              onSaveToast={showToast}
            />
            <Overview listing={listing} host={host} />
            <Description text={listing.description} />
            <Amenities amenities={listing.amenities} />
          </div>
          <div className="layout__side">
            <BookingCard listing={listing} onAuth={() => setAuthModal({ open: true, mode: 'signup' })} />
          </div>
        </div>

        <div className="container">
          <Reviews listing={listing} />
          <HostSection host={host} onContact={() => setContactModal(true)} />
          <MapSection listing={listing} />
        </div>
      </main>

      <Footer />

      {/* Overlays */}
      <PhotoTour
        photos={photos}
        isOpen={tourOpen}
        onClose={() => setTourOpen(false)}
        onOpenLightbox={(i) => {
          setTourOpen(false);
          openLightbox(i);
        }}
        onShare={() => setShareModal(true)}
      />

      <Lightbox
        photos={photos}
        index={lightbox.index}
        isOpen={lightbox.open}
        onClose={closeLightbox}
        onChangeIndex={(i) => setLightbox((s) => ({ ...s, index: i }))}
      />

      {authModal.open && (
        <AuthModal
          mode={authModal.mode}
          onClose={() => setAuthModal((s) => ({ ...s, open: false }))}
          onSwitch={(mode) => setAuthModal({ open: true, mode })}
          onSuccess={(name) => {
            setAuthModal((s) => ({ ...s, open: false }));
            showToast(`Welcome${name ? ', ' + name : ''}! You're signed in.`, 'success');
          }}
        />
      )}

      {shareModal && (
        <ShareModal
          listing={listing}
          onClose={() => setShareModal(false)}
          onCopy={() => showToast('Link copied to clipboard!', 'success')}
        />
      )}

      {contactModal && (
        <ContactModal
          host={host}
          onClose={() => setContactModal(false)}
          onSend={() => {
            setContactModal(false);
            showToast('Message sent to Marguerite!', 'success');
          }}
        />
      )}

      {searchModal && (
        <SearchModal
          onClose={() => setSearchModal(false)}
          onSearch={(q) => {
            setSearchModal(false);
            showToast(`Searching for "${q}"…`, 'info');
          }}
        />
      )}

      {toast && <Toast message={toast.msg} type={toast.type} />}
    </div>
  );
}
