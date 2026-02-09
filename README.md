# Vanilla JavaScript SPA Boilerplate (2026)

A high-performance, production-ready Single Page Application (SPA) boilerplate built with pure Vanilla JavaScript, native Web Components, and the History API. No frameworks, no heavy dependencies—just the platform.

## 🚀 Key Features

- **Zero Frameworks:** Built entirely with native Web APIs.
- **Client-Side Routing:** Custom History API-based router supporting static and dynamic routes (`/blog/:id`).
- **Web Components:** Reusable UI components with Shadow DOM encapsulation.
- **Dynamic SEO:** Automatic updates for `document.title` and meta description tags on every route.
- **Design Tokens:** CSS variable-based styling system for consistent UI/UX.
- **Lightweight State Management:** Reactive global state using JavaScript Proxies.
- **Environment Support:** Integrated `.env` support via Vite.
- **Lazy Loading:** Pages are imported dynamically only when needed.

## 📁 Project Structure

```text
src/
  core/          # Engine (Router, Store, SEO, Config)
  components/    # Reusable Web Components (UIButton, UICard, etc.)
  layouts/       # Page wrappers (MainLayout)
  pages/         # Functional page views
  styles/        # Global CSS and Design Tokens
main.js          # App entry point & Route definitions
index.html       # Single Page Application shell
```

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
```

## 📖 Development Guide

### Adding a New Route
1. Create a new page file in `src/pages/your-page.js`.
2. Define the route in `src/main.js`:
   ```javascript
   { 
     path: '/your-path', 
     view: () => import('./pages/your-page.js').then(m => m.YourPage()) 
   }
   ```

### Creating a UI Component
1. Create a folder in `src/components/ui-my-component`.
2. Use the native `customElements.define` API.
3. Import the component in `src/main.js` to register it globally.

### Environment Variables
Variables must be prefixed with `VITE_` in your `.env` file to be accessible:
- `VITE_APP_TITLE`: Sets the base title for SEO.
- `VITE_API_URL`: Base URL for your API.

## ⚡ Performance
This boilerplate achieves near-perfect Lighthouse scores out of the box due to:
- No framework parsing/execution time.
- Minimal bundle size.
- Native browser optimizations for Web Components.

## 📄 License
MIT
