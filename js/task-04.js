const counterValueEl = document.querySelector('#value');
const counterValue = {
    value: 0,
    descrementValue(value) { 
    this.value -= 1 
    },
    incrementValue(value) { 
    this.value += 1
    }
}

const descrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');

descrBtn.addEventListener('click', () => {
  counterValue.descrementValue();
  counterValueEl.textContent = counterValue.value;
});

incrBtn.addEventListener('click', () => {
  counterValue.incrementValue();
  counterValueEl.textContent = counterValue.value;
});

