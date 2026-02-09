import { MainLayout } from '../layouts/main-layout.js';
import { setSEO } from '../core/seo.js';
import { config } from '../core/config.js';

export async function HomePage() {
  setSEO({ title: 'Home', description: 'Welcome to our Vanilla JS SPA' });
  
  const div = document.createElement('div');
  div.innerHTML = `
    <h1>Welcome Home</h1>
    ${config.isDebug ? '<span style="background: #fee2e2; color: #dc2626; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: bold;">DEBUG MODE</span>' : ''}
    <p style="margin-top: var(--space-md)">This is a high-performance SPA without frameworks.</p>
    
    <div style="margin-top: var(--space-xl); display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--space-lg);">
      <ui-card>
        <span slot="title">Web Components</span>
        These are built with native Web Components and Shadow DOM for perfect style isolation.
      </ui-card>
      
      <ui-card>
        <span slot="title">API Configuration</span>
        Connected to: <code style="background: var(--color-bg-alt); padding: 2px 4px;">${config.apiUrl}</code>
      </ui-card>
    </div>
  `;
  
  return MainLayout(div);
}
