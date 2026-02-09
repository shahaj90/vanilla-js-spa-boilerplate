const navTemplate = document.createElement('template');
navTemplate.innerHTML = `
  <style>
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--space-md) var(--space-xl);
      border-bottom: 1px solid var(--color-border);
      background: var(--color-bg);
    }
    .logo { font-weight: bold; font-size: var(--font-size-lg); }
    .links { display: flex; gap: var(--space-lg); }
  </style>
  <nav>
    <div class="logo">VanillaSPA</div>
    <div class="links">
      <slot></slot>
    </div>
  </nav>
`;

class UINavbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(navTemplate.content.cloneNode(true));
  }
}

customElements.define('ui-navbar', UINavbar);
