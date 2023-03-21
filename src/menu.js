export const menuView = function () {
  const menu = document.createElement('div');
  const headerViewDiv = document.querySelector('.header');
  menu.setAttribute('id', 'menu__view');

  menu.classList.add('menu__container');
  const markupMeun = ` 
    <div class="card__menu">
      <h2 class="card__title">
        CHEESY SCRAMBLED EGG BUTTER BRIOCHE SANDWICH TRAY
      </h2>
      <p class="card_name">
        Served with a sriracha aioli, fresh spinach, cheddar cheese and 3
        freshly folded eggs. Your choice of bacon sausage or avocado.
        Garnish with pickles & hot peppers. Please request hot sauce,
        ketchup, plates & napkins if needed.
      </p>
      <div class="card__price">
        <li>Small 4 ppl $57.76</li>
        <li>Medium 9 ppl $123.71</li>
        <li>Large 12 ppl in $163.28</li>
      </div>
      <img
        src="/images/photo-1550507992-eb63ffee0847.jpeg"
        alt=""
        class="card__img"
      />
    </div>

    <div class="card__menu">
      <h2 class="card__title">ASSORTED LUNCH PANINI TRAY</h2>
      <p class="card_name">
        Your choice or chicken, beef, smoked salmon, vegetarian or VEGAN.
        Garnished with pickles and hot peppers. Please request hot sauce,
        ketchup, napkins and plates if needed.
      </p>
      <div class="card__price">
        <li>Small 4 ppl $66</li>
        <li>Medium 7 ppl $111.75</li>
        <li>Large 10 ppl $157.50</li>
      </div>
      <img
        src="/images/photo-1559466273-d95e72debaf8.jpeg"
        alt=""
        class="card__img"
      />
    </div>

    <div class="card__menu">
      <h2 class="card__title">LUNCH TIME BURGER TRAY</h2>
      <p class="card_name">
        Your choice of 6 oz prime rib beef patty. Blackened chicken breast.
        Nashville hot chicken or veggie patty. Garnished with pickles and
        hot sauces. Request napkins, ketchup and plates if needed. ed.
      </p>
      <div class="card__price">
        <li>Small 4 ppl $62</li>
        <li>Medium 6 ppl $90.50</li>
        <li>Large 9 pole $133.25</li>
      </div>
      <img
        src="/images/photo-1592415499556-74fcb9f18667.jpeg"
        alt=""
        class="card__img"
      />
    </div>

    <div class="card__menu">
      <h2 class="card__title">LUNCH SIDES</h2>
      <p class="card_name">
        HOUSE ROOT CHIP & DIP TRAY In house assorted root chip trays made of
        beets, yams, white kennebec potato. Served with our garlic chili
        sour cream.
      </p>

      <div class="card__price">
        <li>Small $40.92</li>
        <li>Medium $58.88</li>
        <li>large $76.84</li>
      </div>
      <img
        src="/images/premium_photo-1669260111383-3dd8e9c73b29.jpeg"
        alt=""
        class="card__img"
      />
    </div>

    <div class="card__menu">
      <h2 class="card__title">COCKTAIL STYLE FOOD MENU</h2>
      <p class="card_name"></p>

      <div class="card__price">
        <li>Sliced grilled Ribeye served on with arugula & lemon</li>
        <li>Seared sliced Ahi tuna in Asian sauce</li>
        <li>Beef Satay</li>
        <li>Chicken satay</li>
        <li>Chili lime shrimp</li>
        <li>Prime rib horse radish pickled onion crostini</li>
        <li>Bruschetta balsamic reduction crostini</li>
        <li>Olive tapenade goat cheese whip crostini</li>
        <li>Bahn mi beef slider</li>
        <li>Prime rib horseradish slider</li>
        <li>Mini Nashville chicken slider</li>
        <li>Cheese burger slider</li>
      </div>
      <img
        src="/images/photo-1551024709-8f23befc6f87.jpeg"
        alt=""
        class="card__img"
      />
    </div>
  `;
  menu.innerHTML = markupMeun;

  headerViewDiv.insertAdjacentElement('afterend', menu);
};
