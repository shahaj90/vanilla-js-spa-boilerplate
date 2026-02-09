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
      width: 100%;
    }
    button:hover { background-color: var(--color-primary-hover); }
  </style>
  <button id="native-button"><slot></slot></button>
`;

class UIButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const btn = this.shadowRoot.querySelector('#native-button');
    btn.addEventListener('click', (e) => {
      // If inside a form and type is submit, manually trigger form submission
      if (this.getAttribute('type') === 'submit') {
        const form = this.closest('form');
        if (form) {
          // Dispatch a submit event so the form's submit listener catches it
          const submitEvent = new Event('submit', { cancelable: true, bubbles: true });
          form.dispatchEvent(submitEvent);
        }
      }
      
      // Also propagate the click event out of the shadow DOM
      this.dispatchEvent(new CustomEvent('ui-click', {
        detail: { originalEvent: e },
        bubbles: true,
        composed: true
      }));
    });
  }
}

customElements.define('ui-button', UIButton);