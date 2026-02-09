import { MainLayout } from '../layouts/main-layout.js';
import { setSEO } from '../core/seo.js';

const MOCK_POSTS = [
  { id: 'why-vanilla-js', title: 'Why Vanilla JS in 2026?', summary: 'Exploring the benefits of minimal dependencies.' },
  { id: 'web-components-guide', title: 'Mastering Web Components', summary: 'Building a truly reusable UI library.' },
  { id: 'routing-deep-dive', title: 'Routing Without Frameworks', summary: 'How the History API works under the hood.' }
];

export async function BlogPage() {
  setSEO({ title: 'Blog', description: 'Insights into modern web development with vanilla tools.' });
  
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>Our Blog</h1>
    <p style="margin-top: var(--space-sm); color: var(--color-text-muted);">Latest posts and tutorials.</p>
    
    <div style="margin-top: var(--space-lg); display: grid; gap: var(--space-md)">
      ${MOCK_POSTS.map(post => `
        <ui-card>
          <span slot="title">${post.title}</span>
          <p style="margin-bottom: var(--space-md)">${post.summary}</p>
          <a href="/blog/${post.id}" data-link>
            <ui-button>Read Article</ui-button>
          </a>
        </ui-card>
      `).join('')}
    </div>
  `;
  
  return MainLayout(div);
}
