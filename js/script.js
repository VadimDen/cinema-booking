const schemeSvg = document.querySelector('.scheme-svg');
let totalPriceTag = document.querySelector('.price-counter');
const menuButton = document.querySelector('.mob-menu');
const menu = document.querySelector('.nav-menu');

let cost = 220;
let totalPrice = 0;

schemeSvg.addEventListener('click', (event) => {
  if (!event.target.classList.contains("booked")) {
    event.target.classList.toggle('active');
    let totalSeats = schemeSvg.querySelectorAll('.active').length;
    totalPrice = totalSeats * cost;
    totalPriceTag.textContent = totalPrice;
    console.log(schemeSvg.querySelectorAll('.active').length);
  }
});
menuButton.addEventListener('click', () => {
  console.log('MenuCkick!');
  menu.classList.toggle('is-open');
});