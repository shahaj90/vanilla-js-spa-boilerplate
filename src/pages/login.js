import { AuthLayout } from '../layouts/auth-layout.js';
import { setSEO } from '../core/seo.js';

export async function LoginPage() {
  setSEO({ title: 'Login', description: 'Log in to your account.' });
  
  const form = document.createElement('form');
  form.innerHTML = `
    <h2 style="margin-bottom: var(--space-md)">Welcome Back</h2>
    <div style="display: flex; flex-direction: column; gap: var(--space-md)">
      <div>
        <label style="display: block; margin-bottom: var(--space-xs); font-size: 0.875rem;">Email</label>
        <input type="email" placeholder="you@example.com" style="width: 100%; padding: var(--space-sm); border: 1px solid var(--color-border); border-radius: var(--radius-md);">
      </div>
      <div>
        <label style="display: block; margin-bottom: var(--space-xs); font-size: 0.875rem;">Password</label>
        <input type="password" placeholder="••••••••" style="width: 100%; padding: var(--space-sm); border: 1px solid var(--color-border); border-radius: var(--radius-md);">
      </div>
      <ui-button type="submit" style="width: 100%; margin-top: var(--space-sm);">Sign In</ui-button>
    </div>
  `;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login feature would go here!');
  });
  
  return AuthLayout(form);
}
