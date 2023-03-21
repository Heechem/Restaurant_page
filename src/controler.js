import { homeView } from './homePage.js';
import { menuView } from './menu.js';
import { contactView } from './contactView.js';

export const handler = function () {
  const content = document.getElementById('content');

  content.addEventListener('click', (e) => {
    const nav = e.target.closest('nav ul li');
    const headerViewDiv = document.querySelector('.header');

    const viewToBeRemoved = headerViewDiv.nextElementSibling;

    if (!nav) return;

    switch (nav.getAttribute('id')) {
      case 'menu':
        viewToBeRemoved.remove();
        menuView();
        break;
      case 'home':
        viewToBeRemoved.remove();
        homeView();
        break;
      case 'contact':
        viewToBeRemoved.remove();
        contactView();
        break;
    }
  });
};

// const clearEl = function () {
//   const content = document.getElementById('content');

//   content.replaceWith(home);
// };
