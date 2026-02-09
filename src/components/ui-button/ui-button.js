const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host { display: inline-block; }
    button {
      background-color: var(--color-primary);
      color: white;
      border: none;
      padding: var(--space-sm) var(--space-md);
      border-radius: var(--radius-md);
      font-family: var(--font-sans);
      font-weight: var(--font-weight-bold);
      cursor: pointer;
      transition: background 0.2s;
    }
    button:hover { background-color: var(--color-primary-hover); }
  </style>
  <button><slot></slot></button>
`;

class UIButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('ui-button', UIButton);
