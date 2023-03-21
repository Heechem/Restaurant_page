export const contactView = function () {
  const divContact = document.createElement('div');
  const headerViewDiv = document.querySelector('.header');
  divContact.setAttribute('id', 'contact__view');
  divContact.classList.add('contact__container');

  const markupContact = `<div class="contact__container" id="contact__view">
  <div class="card__contact">
    <h2 class="contact__title">Esteatorio</h2>
    <div class="card__hours">
      <li>
        <i class="fa-solid fa-calendar-days"></i> Monday to Friday 6:00 Am
        to 10:00 Pm
      </li>
      <li>
        <i class="fa-solid fa-calendar-days"></i> Saturday : 8:00 Am to
        00:00 Pm
      </li>
      <li><i class="fa-solid fa-phone"></i> 123456123</li>
      <li><i class="fa-solid fa-envelope"> </i> esteatorio@gmail.com</li>
      <li><i class="fa-brands fa-facebook"> </i> Esteatorio</li>
    </div>
  </div>

  <div class="card__contact">
    <h2 class="contact__title">chef Popos</h2>
    <div class="card__hours">
      <li><i class="fa-solid fa-phone"></i> 123456123</li>
      <li><i class="fa-solid fa-envelope"> </i> popos@gmail.com</li>
      <li><i class="fa-brands fa-facebook"> </i> chef Popos</li>
    </div>
  </div>

  <div class="card__contact">
    <h2 class="contact__title">chef Mamas</h2>
    <div class="card__hours">
      <li><i class="fa-solid fa-phone"></i> 123456123</li>
      <li><i class="fa-solid fa-envelope"> </i> mams@gmail.com</li>
      <li><i class="fa-brands fa-facebook"> </i> chef mamas</li>
    </div>
  </div>
</div>
  `;

  divContact.innerHTML = markupContact;
  headerViewDiv.insertAdjacentElement('afterend', divContact);
};
