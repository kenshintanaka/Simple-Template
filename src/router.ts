import { getById, qsa } from '@/lib';
import { HomePage, NotFoundPage } from '@/pages';

// THIS IMPORT IS DEFINITLY REQUIRED
// Don't ask me why though :D
import { h } from '@/h';

// REMEMBER TO ADD EVERY PAGE
const routes: { [key: string]: () => HTMLElement } = {
  '/': HomePage,
};

/**
 * Handles rendering the correct page based on the URL hash and updating nav links.
 */
const handleRouteChange = () => {
  const appRoot = getById('app-root');
  if (!appRoot) {
    console.error('Application root element #app-root not found!');
    return;
  }

  const path = window.location.hash.slice(1) || '/';

  // This will probably use the fallback page if it work correctly (I really hope this shit works)
  const PageComponent = routes[path] || NotFoundPage;

  appRoot.innerHTML = ''; // This is a MUST if it's not here then the whole thing will probably break
  appRoot.appendChild(PageComponent());
};

/**
 * Sets up the router by adding event listeners for navigation.
 */
export const initializeRouter = () => {
  window.addEventListener('hashchange', handleRouteChange);
  window.addEventListener('DOMContentLoaded', handleRouteChange);
};
