const cardTemplate = document.createElement('template');
cardTemplate.innerHTML = `
  <style>
    :host { display: block; }
    .card {
      background: var(--color-bg);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: var(--space-lg);
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    }
    .title { margin-bottom: var(--space-sm); font-size: var(--font-size-lg); font-weight: bold; }
  </style>
  <div class="card">
    <div class="title"><slot name="title"></slot></div>
    <div class="content"><slot></slot></div>
  </div>
`;

class UICard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(cardTemplate.content.cloneNode(true));
  }
}

customElements.define('ui-card', UICard);
