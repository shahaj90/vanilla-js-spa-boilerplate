/**
 * Centralized configuration helper.
 * Vite requires environment variables to be prefixed with VITE_
 * to be exposed to the client-side code.
 */

export const config = {
  appTitle: import.meta.env.VITE_APP_TITLE || 'Vanilla SPA',
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  isDebug: import.meta.env.VITE_DEBUG_MODE === 'true',
  version: '1.0.0'
};
