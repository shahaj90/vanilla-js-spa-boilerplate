import { config } from './config.js';

export function setSEO({ title, description }) {
  document.title = title ? `${title} | ${config.appTitle}` : config.appTitle;
  
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description || 'Default description');
  }
}
