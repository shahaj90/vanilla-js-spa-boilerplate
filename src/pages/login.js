import { AuthLayout } from '../layouts/auth-layout.js';
import { setSEO } from '../core/seo.js';

export async function LoginPage() {
  setSEO({ title: 'Login', description: 'Log in to your account.' });
  
  const div = document.createElement('div');
  div.innerHTML = `
    <h2 style="margin-bottom: var(--space-md)">Welcome Back</h2>
    <form id="login-form" novalidate>
      <div style="display: flex; flex-direction: column; gap: var(--space-md)">
        <div>
          <label style="display: block; margin-bottom: var(--space-xs); font-size: 0.875rem;">Email</label>
          <input 
            type="email" 
            id="email-input"
            name="email"
            placeholder="you@example.com" 
            style="width: 100%; padding: var(--space-sm); border: 1px solid var(--color-border); border-radius: var(--radius-md); transition: border-color 0.2s;"
          >
          <div id="email-error" style="color: #dc2626; font-size: 0.75rem; margin-top: 4px; height: 1rem; visibility: hidden;"></div>
        </div>
        
        <div>
          <label style="display: block; margin-bottom: var(--space-xs); font-size: 0.875rem;">Password</label>
          <input 
            type="password" 
            id="password-input"
            name="password"
            placeholder="••••••••" 
            style="width: 100%; padding: var(--space-sm); border: 1px solid var(--color-border); border-radius: var(--radius-md); transition: border-color 0.2s;"
          >
          <div id="password-error" style="color: #dc2626; font-size: 0.75rem; margin-top: 4px; height: 1rem; visibility: hidden;"></div>
        </div>

        <ui-button type="submit" style="width: 100%; margin-top: var(--space-sm);">Sign In</ui-button>
      </div>
    </form>
  `;

  const form = div.querySelector('#login-form');
  const emailInput = div.querySelector('#email-input');
  const passwordInput = div.querySelector('#password-input');
  const emailError = div.querySelector('#email-error');
  const passwordError = div.querySelector('#password-error');

  const validateEmail = (val) => {
    if (!val) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'Invalid email address';
    return null;
  };

  const validatePassword = (val) => {
    if (!val) return 'Password is required';
    if (val.length < 6) return 'Password must be at least 6 characters';
    return null;
  };

  const updateUI = (input, errorEl, errorMessage) => {
    if (errorMessage) {
      errorEl.textContent = errorMessage;
      errorEl.style.visibility = 'visible';
      input.style.borderColor = '#dc2626';
    } else {
      errorEl.style.visibility = 'hidden';
      input.style.borderColor = 'var(--color-border)';
    }
  };

  // Real-time validation as user types
  emailInput.addEventListener('input', () => {
    updateUI(emailInput, emailError, validateEmail(emailInput.value.trim()));
  });

  passwordInput.addEventListener('input', () => {
    updateUI(passwordInput, passwordError, validatePassword(passwordInput.value));
  });

  // Final check on submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailErr = validateEmail(emailInput.value.trim());
    const passErr = validatePassword(passwordInput.value);

    updateUI(emailInput, emailError, emailErr);
    updateUI(passwordInput, passwordError, passErr);

    if (!emailErr && !passErr) {
      console.log('Form is valid. Sending to API...');
      alert('Success! Form submitted.');
    }
  });

  return AuthLayout(div);
}