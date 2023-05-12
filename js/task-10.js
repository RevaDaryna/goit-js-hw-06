function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const numbEl = document.querySelector('input')
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtn.addEventListener('click', onCreateBoxes)
destroyBtn.addEventListener('click', onDestroyBtn)

function onCreateBoxes() {
  let size = 30
  for (let i = 1; i <= numbEl.value; i += 1){
    const divEl = document.createElement('div')
    divEl.classList.add('new-div')
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    divEl.style.background = getRandomHexColor()
    boxesEl.append(divEl)
    size += 10

  }
}

function onDestroyBtn() {
  const allNewDiv = document.querySelectorAll('.new-div')
  for (const div of allNewDiv) {
    div.remove()
  }
  numbEl.value =''
}


    

