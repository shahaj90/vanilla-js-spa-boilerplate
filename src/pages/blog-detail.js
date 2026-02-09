import { MainLayout } from '../layouts/main-layout.js';
import { setSEO } from '../core/seo.js';

export async function BlogDetailPage({ id }) {
  setSEO({ title: `Reading: ${id}`, description: `Detailed article about ${id}` });
  
  const div = document.createElement('div');
  div.innerHTML = `
    <a href="/blog" data-link style="color: var(--color-primary); display: block; margin-bottom: var(--space-md)">&larr; Back to blog</a>
    <article>
      <header>
        <span style="color: var(--color-text-muted); font-size: 0.875rem; text-transform: uppercase;">Article</span>
        <h1 style="margin-top: var(--space-xs)">Post ID: ${id}</h1>
      </header>
      
      <div style="margin-top: var(--space-xl); line-height: 1.8;">
        <p>This page is rendered dynamically based on the URL parameter <strong>${id}</strong>.</p>
        <p style="margin-top: var(--space-md)">
          In a real application, you would use this ID to fetch data from an API. Because this is a SPA, 
          the transition to this page happened without a full reload, maintaining the application state.
        </p>
        <ui-card style="margin-top: var(--space-xl)">
          <span slot="title">Dynamic Routing Fact</span>
          The router extracts the ":id" portion of the URL and passes it as a prop to this page function.
        </ui-card>
      </div>
    </article>
  `;
  
  return MainLayout(div);
}
