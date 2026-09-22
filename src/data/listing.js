// Mock data for the listing. All images are royalty-free Unsplash photographs
// loaded at runtime — nothing is bundled or scraped from any reference site.
const img = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const photos = [
  { id: 'p1', src: img('photo-1613977257363-707ba9348227'), alt: 'Cliffside cabin exterior at golden hour overlooking the ocean' },
  { id: 'p2', src: img('photo-1600607687939-ce8a6c25118c'), alt: 'Bright open-plan living room with floor-to-ceiling windows' },
  { id: 'p3', src: img('photo-1600585154340-be6161a56a0c'), alt: 'Primary bedroom with king bed facing the coastline' },
  { id: 'p4', src: img('photo-1584622650111-993a426fbf0a'), alt: 'Spa-style bathroom with freestanding soaking tub' },
  { id: 'p5', src: img('photo-1600566753086-00f18fb6b3ea'), alt: 'Private redwood deck with hot tub at dusk' },
  { id: 'p6', src: img('photo-1600210492493-0946911123ea'), alt: 'Chef\u2019s kitchen with marble island and pendant lighting' },
  { id: 'p7', src: img('photo-1560448204-e02f11c3d0e2'), alt: 'Second bedroom with reading nook' },
  { id: 'p8', src: img('photo-1600047509807-ba8f99d2cdde'), alt: 'Dining area with panoramic ocean view' },
  { id: 'p9', src: img('photo-1600566752355-35792bedcfea'), alt: 'Fire pit lounge area under string lights' },
  { id: 'p10', src: img('photo-1571003123894-1f0594d2b5d9'), alt: 'Walk-in shower with stone tile' },
  { id: 'p11', src: img('photo-1598928506311-c55ded91a20c'), alt: 'Home office nook with ocean-facing desk' },
  { id: 'p12', src: img('photo-1600121848594-d8644e57abab'), alt: 'Aerial view of the property among redwood trees' },
];

export const host = {
  name: 'Marguerite',
  isSuperhost: true,
  yearsHosting: 6,
  avatar: img('photo-1544005313-94ddf0286df2', 200),
  reviews: 812,
  responseRate: 100,
  responseTime: 'within an hour',
};

export const listing = {
  title: 'Cliffside Aerie — Architectural Retreat above Big Sur',
  type: 'Entire home',
  location: 'Big Sur, California, United States',
  rating: 4.97,
  reviewCount: 328,
  isGuestFavorite: true,
  guests: 8,
  bedrooms: 4,
  beds: 5,
  baths: 3,
  pricePerNight: 412,
  cleaningFee: 150,
  serviceFee: 96,
  currency: '$',
  coords: { lat: 36.2704, lng: -121.8081 },
  highlights: [
    {
      icon: 'door',
      title: 'Self check-in',
      body: 'Check yourself in with the keypad.',
    },
    {
      icon: 'sparkle',
      title: 'Marguerite is a Superhost',
      body: 'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.',
    },
    {
      icon: 'calendar',
      title: 'Free cancellation before Jan 3',
      body: 'Get a full refund if you change your mind.',
    },
  ],
  description: `Perched on a private bluff two miles south of the village, this redwood-and-glass retreat was built in 2019 to frame an unbroken view of the Pacific from nearly every room. Wake up to fog rolling off the water, spend the afternoon on the heated deck, and fall asleep to the sound of the surf two hundred feet below.

The open living area holds a wood-burning stove, a chef's kitchen stocked with Le Creuset, and a dining table for ten. Three of the four bedrooms open directly onto the deck. The primary suite has a soaking tub positioned to catch the sunset.

Nearby: McWay Falls (9 min drive), Nepenthe restaurant (12 min), and a private trailhead to the cove below (accessible only to guests of this home).`,
  amenities: [
    { icon: 'view', label: 'Ocean view' },
    { icon: 'wifi', label: 'Fast wifi — 300 Mbps' },
    { icon: 'kitchen', label: 'Full kitchen' },
    { icon: 'washer', label: 'Washer & dryer' },
    { icon: 'fire', label: 'Indoor fireplace' },
    { icon: 'hottub', label: 'Private hot tub' },
    { icon: 'parking', label: 'Free parking on premises' },
    { icon: 'workspace', label: 'Dedicated workspace' },
    { icon: 'tv', label: '65" HDTV with Netflix' },
    { icon: 'ac', label: 'Central air conditioning' },
    { icon: 'heating', label: 'Central heating' },
    { icon: 'smoke', label: 'Smoke alarm' },
  ],
  reviewCategories: [
    { label: 'Cleanliness', score: 5.0 },
    { label: 'Accuracy', score: 4.9 },
    { label: 'Check-in', score: 5.0 },
    { label: 'Communication', score: 5.0 },
    { label: 'Location', score: 4.9 },
    { label: 'Value', score: 4.8 },
  ],
  reviews: [
    {
      id: 'r1',
      name: 'Daniela',
      location: '2 years on Airbnb',
      avatar: img('photo-1517841905240-472988babdf9', 200),
      date: 'October 2026',
      text: 'This place stopped us in our tracks the moment we opened the gate. The deck alone is worth the trip — we barely left it. Marguerite left a handwritten guide to the coastline that we followed for three days.',
    },
    {
      id: 'r2',
      name: 'Owen',
      location: '5 years on Airbnb',
      avatar: img('photo-1500648767791-00dcc994a43e', 200),
      date: 'September 2026',
      text: 'Quiet, private, and the photos genuinely undersell the view. Communication with the host was fast and easy. The hot tub at night with no light pollution was a highlight of our whole year.',
    },
    {
      id: 'r3',
      name: 'Priya',
      location: '3 years on Airbnb',
      avatar: img('photo-1531123897727-8f129e1688ce', 200),
      date: 'August 2026',
      text: 'Immaculately kept and thoughtfully designed. The kitchen had everything we needed to cook every night. Worth every mile of the drive down Highway 1.',
    },
    {
      id: 'r4',
      name: 'Marcus',
      location: '1 year on Airbnb',
      avatar: img('photo-1506794778202-cad84cf45f1d', 200),
      date: 'July 2026',
      text: 'We celebrated an anniversary here and it exceeded every expectation. Self check-in was seamless and the house was spotless on arrival.',
    },
    {
      id: 'r5',
      name: 'Hannah',
      location: '4 years on Airbnb',
      avatar: img('photo-1487412720507-e7ab37603c6f', 200),
      date: 'June 2026',
      text: 'One of the best stays we\u2019ve had anywhere. The bedroom skylight for stargazing was an unexpected joy. Would return in a heartbeat.',
    },
    {
      id: 'r6',
      name: 'Felix',
      location: '6 years on Airbnb',
      avatar: img('photo-1500917293891-ef795e70e1f6', 200),
      date: 'May 2026',
      text: 'Everything about this stay felt considered, from the espresso setup to the reading light by the tub. Big Sur at its best.',
    },
  ],
};
