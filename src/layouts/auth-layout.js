export function AuthLayout(content) {
  const layout = document.createElement('div');
  layout.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: var(--color-bg-alt);
    padding: var(--space-lg);
  `;
  
  layout.innerHTML = `
    <div style="width: 100%; max-width: 400px;">
      <div style="text-align: center; margin-bottom: var(--space-xl);">
        <a href="/" data-link style="font-size: var(--font-size-xl); font-weight: bold; color: var(--color-primary);">VanillaSPA</a>
      </div>
      <ui-card id="auth-content"></ui-card>
      <div style="text-align: center; margin-top: var(--space-lg);">
        <a href="/" data-link style="font-size: 0.875rem; color: var(--color-text-muted);">&larr; Back to home</a>
      </div>
    </div>
  `;
  
  const card = layout.querySelector('#auth-content');
  if (content instanceof HTMLElement) {
    card.appendChild(content);
  } else {
    card.innerHTML = content;
  }
  
  return layout;
}
