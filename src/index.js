import { homeView } from './homePage.js';
import { navView } from './navView.js';
import { handler } from './controler.js';

window.addEventListener('load', () => {
  navView();
  homeView();
  handler();
});
