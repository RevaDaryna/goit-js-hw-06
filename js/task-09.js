function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorEl = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
changeColorBtn.addEventListener('click', changeColorFn)
function changeColorFn(event) {
  let currentColor = getRandomHexColor()
  colorEl.textContent = currentColor
  document.body.style.background = currentColor
  
}