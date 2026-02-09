export function MainLayout(content) {
  const layout = document.createElement('div');
  layout.style.display = 'flex';
  layout.style.flexDirection = 'column';
  layout.style.minHeight = '100vh';
  
  layout.innerHTML = `
    <ui-navbar>
      <a href="/" data-link>Home</a>
      <a href="/about" data-link>About</a>
      <a href="/blog" data-link>Blog</a>
    </ui-navbar>
    <main style="padding: var(--space-xl); flex: 1; max-width: 1200px; margin: 0 auto; width: 100%;">
      <div id="page-content"></div>
    </main>
    <footer style="padding: var(--space-md); text-align: center; border-top: 1px solid var(--color-border); background: var(--color-bg-alt);">
      &copy; 2026 Vanilla JS SPA
    </footer>
  `;
  
  const pageContent = layout.querySelector('#page-content');
  if (content instanceof HTMLElement) {
    pageContent.appendChild(content);
  } else {
    pageContent.innerHTML = content;
  }
  
  return layout;
}
