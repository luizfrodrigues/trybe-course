const buttonCounter = document.getElementById('button-counter');
const counter = document.getElementById('counter');
let click = 500;

buttonCounter.addEventListener('click', () => {
  click += 1;
  counter.innerHTML = click;
});