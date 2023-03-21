export const homeView = function () {
  const divHome = document.createElement('div');

  const headerViewDiv = document.querySelector('.header');
  divHome.setAttribute('id', 'home__view');

  const markupMain = `
<main class="container">
        <h2>L'art de la sandwicherie</h2>
        <h4 class="container__story">Our story</h4>
        <p class="container__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis dolorem
          amet eos soluta hic voluptates, iusto animi laborum aut dignissimos
          cum consequuntur nobis excepturi? Nam quasi numquam quam nesciunt
          fugit.
        </p>
        <h4 class="container__story">Customers feedback</h4>
        <p class="container__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, est et
          optio esse minus, accusantium corporis numquam, dignissimos asperiores
          impedit atque ipsam quis error modi enim quaerat cupiditate
          consequatur. Laboriosam.
        </p>
        <h4 class="container__story">Our main dishes</h4>
        <li class="container__dishes">Breakfast</li>
        <li class="container__dishes">Brunch & Lunch</li>
        <li class="container__dishes">Dinner</li>
        <div class="contianer__dishes">To consume or take away</div>
      </main>`;
  divHome.innerHTML = markupMain;
  headerViewDiv.insertAdjacentElement('afterend', divHome);
};
