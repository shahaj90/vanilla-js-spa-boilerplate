export class Router {
  constructor(routes, containerId = 'app') {
    this.routes = routes;
    this.container = document.getElementById(containerId);
    this.init();
  }

  init() {
    window.addEventListener('popstate', () => this.resolve());
    
    // Handle link clicks globally
    document.addEventListener('click', (e) => {
      const link = e.target.closest('[data-link]');
      if (link) {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href) this.navigate(href);
      }
    });

    this.resolve();
  }

  navigate(url) {
    history.pushState(null, null, url);
    this.resolve();
  }

  resolve() {
    const path = window.location.pathname;
    const match = this.matchRoute(path);

    if (match) {
      this.render(match.route, match.params);
    } else {
      const notFoundRoute = this.routes.find(r => r.path === '*');
      if (notFoundRoute) {
        this.render(notFoundRoute);
      } else {
        this.container.innerHTML = '<h1>404 Not Found</h1>';
      }
    }
  }

  matchRoute(path) {
    for (const route of this.routes) {
      if (route.path === '*') continue;
      
      const routeSegments = route.path.split('/').filter(Boolean);
      const pathSegments = path.split('/').filter(Boolean);
      
      if (routeSegments.length !== pathSegments.length) continue;

      const keys = [];
      const pattern = route.path.replace(/:([^/]+)/g, (_, key) => {
        keys.push(key);
        return '([^/]+)';
      });

      const regex = new RegExp(`^${pattern}$`);
      const match = path.match(regex);

      if (match) {
        const params = keys.reduce((acc, key, i) => {
          acc[key] = match[i + 1];
          return acc;
        }, {});
        return { route, params };
      }
    }
    return null;
  }

  async render(route, params = {}) {
    this.container.innerHTML = '';
    
    try {
      const view = await route.view(params);
      
      if (view instanceof HTMLElement) {
        this.container.appendChild(view);
      } else {
        this.container.innerHTML = view;
      }
    } catch (error) {
      console.error('Error rendering route:', error);
      this.container.innerHTML = '<h1>Error loading page</h1>';
    }
  }
}
