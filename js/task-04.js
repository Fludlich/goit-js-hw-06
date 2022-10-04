
let arra = document.querySelector('#value')
const button = document.querySelector('[data-action="decrement"]');


button.addEventListener("click", () => {
  arra.textContent--

});
const button2 = document.querySelector('[data-action="increment"]');

button2.addEventListener("click", () => {
  arra.textContent++
  

});
