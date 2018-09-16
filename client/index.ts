import renderApp from './render-app';
import App from '../app';

const appContainer: HTMLElement | null = document.getElementById('app');

if (module.hot) {
  module.hot.accept('./index.ts');
  module.hot.accept('../app', () => {
    const NewApp = require('../app').default;
    renderApp(appContainer, NewApp);
  });
}

// undo display:none in development (used to avoid flash of unstyled content).
// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV === 'development') {
  setTimeout(() => {
    document.body.style.display = '';
    renderApp(appContainer, App);
  }, 0);
} else {
  renderApp(appContainer, App);
}
