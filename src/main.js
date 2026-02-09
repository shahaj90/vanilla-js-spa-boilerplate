// Register Web Components
import './components/ui-button/ui-button.js';
import './components/ui-card/ui-card.js';
import './components/ui-navbar/ui-navbar.js';

import { Router } from './core/router.js';

// Route definitions
const routes = [
  { 
    path: '/', 
    view: () => import('./pages/home.js').then(m => m.HomePage()) 
  },
  { 
    path: '/about', 
    view: () => import('./pages/about.js').then(m => m.AboutPage()) 
  },
  { 
    path: '/blog', 
    view: () => import('./pages/blog.js').then(m => m.BlogPage()) 
  },
  { 
    path: '/blog/:id', 
    view: (params) => import('./pages/blog-detail.js').then(m => m.BlogDetailPage(params)) 
  },
  { 
    path: '/login', 
    view: () => import('./pages/login.js').then(m => m.LoginPage()) 
  },
  { 
    path: '*', 
    view: () => import('./pages/not-found.js').then(m => m.NotFoundPage()) 
  }
];

// Initialize Router
// This will automatically handle the initial route and setup global link listeners
new Router(routes);
