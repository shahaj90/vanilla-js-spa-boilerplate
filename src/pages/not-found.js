import { MainLayout } from '../layouts/main-layout.js';
import { setSEO } from '../core/seo.js';

export async function NotFoundPage() {
  setSEO({ title: '404 - Not Found', description: 'The page you are looking for does not exist.' });
  
  const div = document.createElement('div');
  div.style.textAlign = 'center';
  div.style.marginTop = 'var(--space-xl)';
  
  div.innerHTML = `
    <h1 style="font-size: 4rem;">404</h1>
    <p style="font-size: var(--font-size-lg); margin-top: var(--space-md)">Oops! The page you're looking for has vanished.</p>
    <div style="margin-top: var(--space-xl)">
      <a href="/" data-link>
        <ui-button>Return Home</ui-button>
      </a>
    </div>
  `;
  
  return MainLayout(div);
}
