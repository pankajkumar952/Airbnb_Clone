# 🏡 Stayfolio — Airbnb Listing Page Clone

<p align="center">
  <strong>A pixel-fidelity vacation rental listing experience built with React + Vite.</strong>
</p>

<p align="center">
  <a href="https://airbnbclone-blond.vercel.app/">
    <img src="https://img.shields.io/badge/🚀%20Live%20Demo-Visit%20Website-black?style=for-the-badge" alt="Live Demo">
  </a>
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 18">
  <img src="https://img.shields.io/badge/Vite-5+-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License">
</p>

<p align="center">
  <strong>Designed & Built by Er. Pankaj Kumar</strong>
</p>

<p align="center">
  © 2026 · MIT Licensed · Desktop-first UI exercise
</p>

---

## 🌐 Live Demo

### 🚀 Try the project online

**Live Website:**  
👉 https://airbnbclone-blond.vercel.app/

> Explore the complete listing experience, photo gallery, photo tour, lightbox, booking card, amenities modal, reviews, host section, and keyboard-accessible overlays.

---

## ✨ Project Overview

**Stayfolio** is a modern property-listing interface inspired by the visual language of vacation-rental platforms.

The project focuses on **pixel-level UI implementation, interactive behavior, accessibility, component architecture, and responsive visual details** rather than backend functionality.

It includes a complete listing experience with:

- 🏠 Property information
- 🖼️ Interactive photo gallery
- 📸 Full-screen Photo Tour
- 🔍 Single-photo Lightbox
- ⭐ Ratings and reviews
- 👤 Host information
- 🛏️ Capacity and property details
- 🧰 Amenities section
- 📅 Booking card
- 👥 Guest selector
- 💰 Dynamic price breakdown
- ⌨️ Keyboard navigation
- ♿ Accessibility-focused modal behavior

---

## 🎯 Main Highlights

| Feature | Description |
|---|---|
| 🏡 **Listing Page** | Complete property listing experience with gallery, title, rating, host details, amenities, reviews and location |
| 🖼️ **Photo Gallery** | Interactive hero image layout with multiple property photographs |
| 📸 **Photo Tour** | Full-screen gallery displaying the complete collection of property images |
| 🔍 **Lightbox** | Focused single-image viewer with previous/next navigation |
| ⌨️ **Keyboard Navigation** | Use `←` and `→` to navigate photos |
| ♿ **Accessible Overlays** | Focus management, focus trapping and Escape-to-close behavior |
| 🧰 **Amenities Modal** | Expandable amenities experience with "show all" functionality |
| 👥 **Guest Stepper** | Interactive guest quantity controls |
| 💰 **Price Breakdown** | Live booking calculation based on selected guests |
| ⭐ **Reviews** | Review cards and category-based rating visualization |
| 👤 **Host Profile** | Host information and profile section |
| 📍 **Location Section** | Property location presentation |
| 🎨 **Design System** | Centralized design tokens for consistent spacing, typography and styling |

---

## 🖥️ User Experience

The application is structured around a realistic property-booking flow.

### 1. 🏠 Listing Experience

The main page contains:

- Large hero image gallery
- Property title
- Rating information
- Share and save actions
- Host information
- Guest capacity
- Property type
- Bedroom/bathroom information
- Expandable description
- Amenities preview
- Booking card
- Price calculation
- Reviews
- Host profile
- Location information

---

### 2. 📸 Photo Tour

Clicking **"Show all photos"** opens a full-screen photo experience.

Users can:

- Browse the complete image collection
- Scroll through all property images
- Open individual images
- Return to the listing page

---

### 3. 🔍 Lightbox

Individual property images can be opened in a dedicated Lightbox.

Features include:

- Previous image
- Next image
- Image counter
- Keyboard navigation
- Smooth transition
- Focus management
- Escape-to-close
- Focus restoration

Keyboard shortcuts:

```text
←   Previous photo
→   Next photo
ESC Close viewer
TAB Navigate interactive controls
```

---

## ♿ Accessibility

Accessibility was treated as part of the interaction design rather than as an afterthought.

All major overlays use a shared accessibility pattern.

### Overlay behavior

When an overlay opens:

1. Focus moves inside the overlay.
2. Keyboard `Tab` navigation remains inside the active dialog.
3. `Escape` closes the overlay.
4. Focus returns to the element that opened it.
5. Background scrolling is controlled while the overlay is active.

This behavior is implemented for:

- Photo Tour
- Lightbox
- Amenities Modal

The goal is to provide **keyboard parity**, not simply visual similarity.

---

## 🧱 Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| ⚛️ **Frontend** | React 18 | Component-based UI development |
| ⚡ **Build Tool** | Vite | Fast development and optimized production builds |
| 🎨 **Styling** | Plain CSS | Precise control over layout and visual fidelity |
| 🧠 **State** | React `useState` | Lightweight local UI state management |
| 📦 **Data** | JavaScript mock module | Static listing, review and pricing data |
| 🖼️ **Images** | Unsplash URLs | Property photography without bundled binary assets |
| 🎯 **Icons** | Inline SVG | Lightweight custom icon implementation |
| 🚀 **Deployment** | Vercel | Static production deployment |
| 🔧 **Version Control** | Git + GitHub | Source-code management |

---

## 💡 Why These Technologies?

### React

React makes it easy to break the interface into reusable components such as:

```text
Header
Gallery
ListingDetails
Amenities
BookingCard
Reviews
HostProfile
PhotoTour
Lightbox
Modal
```

### Vite

Vite provides:

- Fast development server
- Quick hot reload
- Simple configuration
- Optimized production builds

### Plain CSS

Pixel-fidelity interfaces often require precise control over:

- Spacing
- Typography
- Borders
- Shadows
- Responsive behavior
- Animations
- Component-specific layouts

For that reason, the project uses regular CSS instead of introducing a utility-heavy styling system.

### React State

The project does not require a global state-management library.

Local React state is sufficient for:

- Guest selection
- Modal visibility
- Current photo
- Booking calculations
- Expand/collapse behavior

---

## 📂 Project Structure

```text
airbnb-clone/
│
├── src/
│   │
│   ├── components/
│   │   ├── Header/
│   │   ├── Gallery/
│   │   ├── ListingDetails/
│   │   ├── Amenities/
│   │   ├── BookingCard/
│   │   ├── Reviews/
│   │   ├── HostProfile/
│   │   ├── PhotoTour/
│   │   ├── Lightbox/
│   │   └── Icons.jsx
│   │
│   ├── data/
│   │   └── listing.js
│   │
│   ├── hooks/
│   │   └── useOverlay.js
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── architecture/
│   ├── architecture-diagram.png
│   ├── architecture-diagram.svg
│   └── ARCHITECTURE.md
│
├── prompts/
│   └── PROMPTS.md
│
├── .claude/
│   ├── agents/
│   │   ├── ui-fidelity-reviewer
│   │   ├── a11y-auditor
│   │   └── code-structure-reviewer
│   │
│   ├── skills/
│   │   └── pixel-fidelity-review/
│   │
│   └── CLAUDE.md
│
├── LICENSE
└── README.md
```

---

## 🚀 Run Locally

### Requirements

Make sure you have:

- **Node.js 18+**
- **npm**

### Installation

```bash
# Clone the repository
git clone <YOUR_GITHUB_REPOSITORY_URL>

# Enter the project directory
cd airbnb-clone

# Install dependencies
npm install

# Start development server
npm run dev
```

Vite will provide a local URL, normally:

```text
http://localhost:5173
```

Open it in your browser.

---

## 🛠️ Available Commands

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Production Build

```bash
npm run build
```

Creates the optimized production bundle inside:

```text
dist/
```

### Preview Production Build

```bash
npm run preview
```

Runs the production build locally for final verification.

---

## 🌐 Deployment

The application is a static Vite application and can be deployed to modern static hosting platforms.

### Vercel

The current production deployment is hosted on Vercel:

**Live Demo:**  
https://airbnbclone-blond.vercel.app/

Typical Vercel configuration:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
```

Vercel normally detects the Vite configuration automatically.

### Other Hosting Options

The same production build can also be deployed using:

- Netlify
- Cloudflare Pages
- GitHub Pages
- Any static hosting provider

---

## 🧠 Architecture

The UI is organized around reusable React components rather than a single large page component.

### High-Level Flow

```text
                    ┌──────────────────┐
                    │   React App      │
                    └────────┬─────────┘
                             │
             ┌───────────────┼────────────────┐
             │               │                │
             ▼               ▼                ▼
        Listing UI       Gallery UI       Booking UI
             │               │                │
             │               ├────────┐       │
             │               │        │       │
             ▼               ▼        ▼       ▼
        Amenities        Photo Tour  Lightbox Price State
             │
             ▼
       Shared Overlay Hook
             │
             ▼
    Focus / Escape / Scroll Lock
```

The project also includes a production-scale architecture document describing how a real vacation-rental platform could evolve to include:

- Frontend
- Backend APIs
- Authentication
- Database
- Object storage
- Search
- Caching
- Booking services
- Payment services
- Deployment infrastructure

Architecture documentation:

```text
architecture/ARCHITECTURE.md
```

Diagram:

```text
architecture/architecture-diagram.png
```

---

## 🤖 AI-Assisted Development

This project was developed with assistance from **Claude Code**.

AI assistance was used as part of a structured development and review workflow.

### Discovery Pass

Before implementation, the interface was analyzed to identify:

- Screens
- Interactive components
- Modal behavior
- Keyboard interactions
- Accessibility requirements
- Component boundaries
- Visual patterns

### Review Agents

The project includes dedicated review configurations for:

```text
ui-fidelity-reviewer
a11y-auditor
code-structure-reviewer
```

These were used to perform repeatable reviews of:

- UI fidelity
- Accessibility
- Component organization
- Code structure

### Reusable Skill

The repository also contains a reusable:

```text
pixel-fidelity-review
```

skill documenting the process used for recreating interfaces while maintaining original implementation details.

Prompt documentation:

```text
prompts/PROMPTS.md
```

---

## 🎨 Design Principles

The implementation follows several design principles.

### 01 — Component First

Large sections are broken into focused React components rather than placing the complete application inside one component.

### 02 — Reusable Interaction Logic

Overlay behavior is centralized through:

```text
useOverlay.js
```

This avoids duplicating focus-management and Escape-key behavior across different modals.

### 03 — Explicit Design Tokens

Shared visual values are maintained through the global stylesheet.

This helps maintain consistency across:

- Colors
- Typography
- Spacing
- Border radius
- Shadows

### 04 — Accessibility by Design

Keyboard navigation and focus behavior are implemented alongside the visual UI.

### 05 — No Unnecessary Dependencies

The project intentionally avoids large UI or state-management libraries where they do not provide meaningful value.

---

## 📊 Project Scope

This project is intentionally focused on **frontend UI fidelity**.

### Included

- Listing interface
- Gallery
- Photo Tour
- Lightbox
- Amenities
- Booking UI
- Guest stepper
- Price calculation
- Reviews
- Host profile
- Location section
- Keyboard navigation
- Accessibility behavior

### Not Included

- Real user authentication
- Real property database
- Real booking system
- Payment processing
- Backend APIs
- Persistent reservations
- Real-time availability
- Production marketplace infrastructure

The architecture documentation demonstrates how these capabilities could be added in a production-scale implementation.

---

## ⚖️ Originality & Scope

This project is an independent frontend UI exercise.

- No markup, CSS, class names, or implementation code was copied from an existing clone.
- The interface was rebuilt from first principles using the publicly recognizable visual language of vacation-rental listing platforms.
- Property content is represented using original/mock data.
- Photography is loaded from Unsplash URLs.
- Airbnb is a trademark of Airbnb, Inc.
- This project is **not affiliated with, sponsored by, or endorsed by Airbnb, Inc.**
- The project is intended as a non-commercial UI/engineering exercise.
- The implementation is desktop-first, according to the original task scope.

---

## 📜 License

This project is licensed under the **MIT License**.

See the:

```text
LICENSE
```

file for the complete license text.

---

## 👨‍💻 About the Developer

### Er. Pankaj Kumar

**Software Developer | Full Stack Developer | AI/ML Enthusiast**

I build modern web applications with a focus on:

- Java
- Spring Boot
- Python
- FastAPI
- React.js
- JavaScript
- TypeScript
- SQL
- REST APIs
- AI/ML
- Generative AI
- Full Stack Development

---

## 🔗 Connect & Explore

<p align="center">

<a href="https://github.com/pankajkumar952">
  <img src="https://img.shields.io/badge/GitHub-Pankaj%20Kumar-181717?style=for-the-badge&logo=github" alt="GitHub">
</a>

<a href="https://www.linkedin.com/in/pankaj-kumar-0b82a8238/">
  <img src="https://img.shields.io/badge/LinkedIn-Pankaj%20Kumar-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
</a>

<a href="https://airbnbclone-blond.vercel.app/">
  <img src="https://img.shields.io/badge/Live%20Project-Stayfolio-black?style=for-the-badge&logo=vercel" alt="Live Project">
</a>

</p>

---

<p align="center">

<strong>⭐ If you find this project interesting, consider giving the repository a star!</strong>

<br><br>

Built with ❤️ and React by <strong>Er. Pankaj Kumar</strong>

</p>
