const popupBg = document.querySelector('.popup__bg');
const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.enter');
const closePopup = document.querySelector('.close_popup');

openPopup.addEventListener('click', (e) => {
    e.preventDefault();
    popupBg.classList.add('active');
    popup.classList.add('active');
})

closePopup.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
})





const burgerEl = document.querySelector('.burger');
const menuEl = document.querySelector('.burger__menu');

burgerEl.addEventListener('click', function () {
  menuEl.classList.toggle('menu_show');
});
