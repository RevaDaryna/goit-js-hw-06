const refs = {
  input: document.querySelector('#name-input'),
  nameLabel: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange)

function onInputChange(event) {
    // console.log(event.currentTarget.value);
    let name = event.currentTarget.value;
    if (name === ''){
        name = 'Anonymous'
    }

    refs.nameLabel.textContent = name

}