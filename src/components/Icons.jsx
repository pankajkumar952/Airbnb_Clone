// Small, dependency-free SVG icon set. Kept in one file so every icon shares
// the same stroke weight and viewBox conventions.
const base = { width: 20, height: 20, viewBox: '0 0 32 32', 'aria-hidden': true, focusable: false };

export const Icon = {
  Search: (p) => (
    <svg {...base} {...p}><path fill="currentColor" d="M13 24a11 11 0 1 1 7.78-3.22A11 11 0 0 1 13 24Zm0-20a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm16.7 25.71-8-8a1 1 0 0 1 1.41-1.42l8 8a1 1 0 0 1-1.41 1.42Z"/></svg>
  ),
  Menu: (p) => (
    <svg {...base} {...p}><path fill="currentColor" d="M2 6h28v2H2zM2 15h28v2H2zM2 24h28v2H2z"/></svg>
  ),
  User: (p) => (
    <svg {...base} {...p}><path fill="currentColor" d="M16 16a6.5 6.5 0 1 0-6.5-6.5A6.51 6.51 0 0 0 16 16Zm0-11a4.5 4.5 0 1 1-4.5 4.5A4.51 4.51 0 0 1 16 5Zm10 24h-2a8 8 0 0 0-16 0H6a10 10 0 0 1 20 0Z"/></svg>
  ),
  Globe: (p) => (
    <svg {...base} {...p}><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm10.9 10H21.5a19.6 19.6 0 0 0-2.4-7.2A12 12 0 0 1 26.9 12ZM16 4c1.5 0 3.4 3 4.2 8H11.8c.8-5 2.7-8 4.2-8ZM4 16a12 12 0 0 1 .3-2.6h5.9a24 24 0 0 0 0 5.2H4.3A12 12 0 0 1 4 16Zm1.1 4h5.4a19.6 19.6 0 0 0 2.4 7.2A12 12 0 0 1 5.1 20Zm0-8A12 12 0 0 1 12.9 4.8 19.6 19.6 0 0 0 10.5 12H5.1ZM16 28c-1.5 0-3.4-3-4.2-8h8.4c-.8 5-2.7 8-4.2 8Zm4.6-10h-9.2a21.8 21.8 0 0 1 0-4h9.2a21.8 21.8 0 0 1 0 4Zm.3 9.2a19.6 19.6 0 0 0 2.4-7.2h5.4a12 12 0 0 1-7.8 7.2ZM21.8 18a24 24 0 0 0 0-5.2h5.9a12.2 12.2 0 0 1 0 5.2Z"/></svg>
  ),
  Star: (p) => (
    <svg {...base} {...p}><path fill="currentColor" d="M15.1 1.98a1 1 0 0 1 1.8 0l4.02 8.15 9 1.31a1 1 0 0 1 .56 1.71l-6.51 6.35 1.54 8.97a1 1 0 0 1-1.45 1.05L16 25.4l-8.06 4.12a1 1 0 0 1-1.45-1.05l1.54-8.97-6.51-6.35a1 1 0 0 1 .56-1.71l9-1.31Z"/></svg>
  ),
  Heart: (p) => (
    <svg {...base} {...p}><path fill="currentColor" d="M16 28.72a2.44 2.44 0 0 1-1.55-.56C6.5 21.62 3 17.87 3 13.28 3 8.63 6.5 5 11 5c2.06 0 3.94.9 5 2.41C17.06 5.9 18.94 5 21 5c4.5 0 8 3.63 8 8.28 0 4.59-3.5 8.34-11.45 14.88a2.44 2.44 0 0 1-1.55.56Z"/></svg>
  ),
  Share: (p) => (
    <svg {...base} viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M13.5 3.44a.75.75 0 0 1 .8.06l6 4.5a.75.75 0 0 1 0 1.2l-6 4.5A.75.75 0 0 1 13 13v-3.03c-3.85.16-6.1 1.4-7.53 3.3a10.4 10.4 0 0 0-1.6 3.4.75.75 0 0 1-1.47-.14C2 9.1 6.63 6.6 13 6.28V3.5c0-.13.02-.25.06-.36a.75.75 0 0 1 .44-.7Z"/></svg>
  ),
  Grid: (p) => (
    <svg {...base} viewBox="0 0 16 16" {...p}><path fill="currentColor" d="M6.25 0h-5A1.25 1.25 0 0 0 0 1.25v5A1.25 1.25 0 0 0 1.25 7.5h5A1.25 1.25 0 0 0 7.5 6.25v-5A1.25 1.25 0 0 0 6.25 0Zm-1 5H2.5V2.5h2.75Zm9.5-5h-5A1.25 1.25 0 0 0 8.5 1.25v5a1.25 1.25 0 0 0 1.25 1.25h5A1.25 1.25 0 0 0 16 6.25v-5A1.25 1.25 0 0 0 14.75 0Zm-1 5h-2.75V2.5h2.75ZM6.25 8.5h-5A1.25 1.25 0 0 0 0 9.75v5A1.25 1.25 0 0 0 1.25 16h5a1.25 1.25 0 0 0 1.25-1.25v-5A1.25 1.25 0 0 0 6.25 8.5Zm-1 5H2.5v-2.75h2.75ZM14.75 8.5h-5a1.25 1.25 0 0 0-1.25 1.25v5A1.25 1.25 0 0 0 9.75 16h5A1.25 1.25 0 0 0 16 14.75v-5a1.25 1.25 0 0 0-1.25-1.25Zm-1 5h-2.75v-2.75h2.75Z"/></svg>
  ),
  Close: (p) => (
    <svg {...base} viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
  ),
  ChevronLeft: (p) => (
    <svg {...base} viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
  ),
  ChevronRight: (p) => (
    <svg {...base} viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>
  ),
  Superhost: (p) => (
    <svg {...base} viewBox="0 0 24 24" {...p}><path fill="currentColor" d="m12 1 2.6 5.9L21 8l-4.5 4.4L17.6 19 12 15.8 6.4 19l1.1-6.6L3 8l6.4-1.1Z"/></svg>
  ),
  Door: (p) => <svg {...base} viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M6 2h9a2 2 0 0 1 2 2v16h2v2H5v-2h1Zm2 2v16h7V4Zm5 8v2h-1.5v-2Z"/></svg>,
  Calendar: (p) => <svg {...base} viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M7 2v2H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3V2h-2v2H9V2Zm12 6v11H5V8Z"/></svg>,
  Sparkle: (p) => <svg {...base} viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M11 2 9.3 8.4 3 10l6.3 1.6L11 18l1.6-6.4L19 10l-6.4-1.6Zm7 12-.8 3-3 .8 3 .8.8 3 .8-3 3-.8-3-.8Z"/></svg>,
  Wifi: (p) => <svg {...base} viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M12 20a1.6 1.6 0 1 0 0-3.2A1.6 1.6 0 0 0 12 20Zm-4.6-4.6 1.7 1.7a4 4 0 0 1 5.8 0l1.7-1.7a6.4 6.4 0 0 0-9.2 0ZM4 11l1.7 1.7a10.9 10.9 0 0 1 12.6 0L20 11a13.3 13.3 0 0 0-16 0Z"/></svg>,
  Kitchen: (p) => <svg {...base} viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M4 2h2v20H4Zm4 0h12v2H8Zm0 4h12v2H8Zm0 4h12v14h-2v-6h-8v6H8Zm2 2v4h4v-4Z"/></svg>,
  Washer: (p) => <svg {...base} viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M5 2h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm1 2v3h12V4ZM12 20a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"/></svg>,
  Fire: (p) => <svg {...base} viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M12 2c1 3-3 4-3 8a3 3 0 0 0 6 0c1 1 2 3 2 5a5 5 0 1 1-10 0c0-4 3-6 3-9 0-1.5.5-3 2-4Z"/></svg>,
  Hottub: (p) => <svg {...base} viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M4 14a3 3 0 0 1 3-3c1.2 0 2 .6 3 1.6 1-1 1.8-1.6 3-1.6s2 .6 3 1.6c1-1 1.8-1.6 3-1.6a3 3 0 0 1 3 3v2H4Zm0 4h16v2H4Z"/></svg>,
  Parking: (p) => <svg {...base} viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm5 4v10h2v-3h1.5a3.5 3.5 0 0 0 0-7Zm2 2h1.5a1.5 1.5 0 0 1 0 3H12Z"/></svg>,
  Workspace: (p) => <svg {...base} viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M3 4h18v12H3Zm2 2v8h14V6ZM2 18h20v2H2Z"/></svg>,
  Tv: (p) => <svg {...base} viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M3 4h18v13H3Zm2 2v9h14V6ZM9 19h6v2H9Z"/></svg>,
  Ac: (p) => <svg {...base} viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M3 5h18v6H3Zm2 2v2h2V7Zm4 0v2h2V7Zm4 0v2h2V7Zm4 0v2h2V7ZM3 13h4v6H3Zm6 0h4v9H9Zm6 0h6v4h-6Z"/></svg>,
  Heating: (p) => <svg {...base} viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M4 4h2v16H4Zm4 0h2v16H8Zm4 0h2v16h-2Zm4 0h2v16h-2Z" opacity=".3"/><path fill="currentColor" d="M6 2c1.5 2 2.2 3.4 0 6-1.4 1.7-1.2 3 0 4 1.2-1 1.4-2.3 0-4C4.8 6.4 4.5 4 6 2Z"/></svg>,
  Smoke: (p) => <svg {...base} viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm0 2a7 7 0 1 1-7 7 7 7 0 0 1 7-7Zm-1 3v5l4 2 .8-1.6L13 12V8Z"/></svg>,
  View: (p) => <svg {...base} viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M2 18h20l-6-8-4 5-3-4Zm4-9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg>,
  Check: (p) => <svg {...base} viewBox="0 0 24 24" {...p}><path fill="currentColor" d="m9 16.2-3.5-3.6L4 14l5 5 11-11-1.4-1.4z"/></svg>,
  Flag: (p) => <svg {...base} viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M6 2h2v20H6Zm2 2h11l-3 4 3 4H8Z"/></svg>,
  Pin: (p) => <svg {...base} viewBox="0 0 24 24" {...p}><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/></svg>,
};
