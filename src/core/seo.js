import { config } from './config.js';

export function setSEO({ title, description, image, url }) {
  const appTitle = config?.appTitle || 'Vanilla SPA';
  const fullTitle = title ? `${title} | ${appTitle}` : appTitle;
  const currentUrl = url || window.location.href;

  // 1. Update Title (Browser Tab)
  document.title = fullTitle;

  // 2. Update Meta Tags Helper
  const setMeta = (attrName, attrValue, content) => {
    if (!content) return;
    let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attrName, attrValue);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  // Standard
  setMeta('name', 'description', description);
  
  // Open Graph
  setMeta('property', 'og:title', fullTitle);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:url', currentUrl);
  if (image) setMeta('property', 'og:image', image);

  // Twitter
  setMeta('name', 'twitter:title', fullTitle);
  setMeta('name', 'twitter:description', description);
  if (image) setMeta('name', 'twitter:image', image);

  // 3. Update Canonical Link
  let linkCanonical = document.querySelector('link[rel="canonical"]');
  if (!linkCanonical) {
    linkCanonical = document.createElement('link');
    linkCanonical.setAttribute('rel', 'canonical');
    document.head.appendChild(linkCanonical);
  }
  linkCanonical.setAttribute('href', currentUrl);
}