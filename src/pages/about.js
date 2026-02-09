import { MainLayout } from '../layouts/main-layout.js';
import { setSEO } from '../core/seo.js';

export async function AboutPage() {
  // Call SEO updates
  setSEO({ 
    title: 'About Us', 
    description: 'Learn more about the minimalist architecture of our Vanilla JS SPA.' 
  });
  
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>About This Project</h1>
    <p style="margin-top: var(--space-md)">
      This project demonstrates how to build a modern, scalable SPA using only native JavaScript, CSS, and HTML.
    </p>
    
    <section style="margin-top: var(--space-lg)">
      <h2>Architecture Philosophy</h2>
      <p style="margin-top: var(--space-sm)">
        We believe in using the platform. By leveraging Web Components, the History API, and modern CSS, 
        we can create experiences that are as fast and interactive as framework-based apps, but with 
        significantly less code and better long-term maintainability.
      </p>
    </section>

    <section style="margin-top: var(--space-lg)">
      <h2>Key Features</h2>
      <ul style="margin-top: var(--space-sm); list-style: disc; margin-left: var(--space-lg);">
        <li><strong>Custom Router:</strong> Handle transitions without page reloads.</li>
        <li><strong>SEO Ready:</strong> Dynamic meta tags and title updates.</li>
        <li><strong>Web Components:</strong> Encapsulated UI logic.</li>
        <li><strong>Zero Dependencies:</strong> No build-time or runtime framework overhead.</li>
      </ul>
    </section>
  `;
  
  return MainLayout(div);
}