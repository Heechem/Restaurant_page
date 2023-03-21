export const navView = function () {
  const content = document.getElementById('content');
  const divNav = document.createElement('div');
  divNav.classList.add('header');

  const markupHeader = `
  <nav class="nav">
    Esteatorio
    
    <ul class="nav__list">
      <li class="nav__item" id="home">
        <a href="#">Home</a>
      </li>
      <li class="nav__item" id="menu">
        <a href="#">Menu</a>
      </li>
      <li class="nav__item" id="contact">
        <a href="#">Contact</a>
      </li>
     
    </ul>
    </nav>`;
  divNav.innerHTML = markupHeader;
  console.log(divNav, content);
  content.insertAdjacentElement('afterbegin', divNav);
};
