import { MainLayout } from '../layouts/main-layout.js';
import { setSEO } from '../core/seo.js';

export async function AboutPage() {
  setSEO({ title: 'About', description: 'Learn more about this minimalist SPA boilerplate.' });
  
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>About This Project</h1>
    <p style="margin-top: var(--space-md)">
      This project demonstrates how to build a modern, scalable SPA using only native JavaScript, CSS, and HTML.
    </p>
    
    <section style="margin-top: var(--space-lg)">
      <h2>Key Features</h2>
      <ul style="margin-top: var(--space-sm); list-style: disc; margin-left: var(--space-lg);">
        <li>Custom client-side router with dynamic params.</li>
        <li>Dynamic SEO management.</li>
        <li>Web Components for UI encapsulation.</li>
        <li>Simple Proxy-based state management.</li>
        <li>Clean, modular folder structure.</li>
      </ul>
    </section>
  `;
  
  return MainLayout(div);
}
