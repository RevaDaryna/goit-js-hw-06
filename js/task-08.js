const formEl = document.querySelector('form')
// console.log(formEl.elements)
formEl.addEventListener('submit', event => {
    event.preventDefault()
    const passwordEl = formEl.elements.password.value
    const emailEl = formEl.elements.email.value

    if (passwordEl !== '' && emailEl !== '') {
        console.log({
            email: emailEl,
            password: passwordEl,
        });
        formEl.reset()
    } else {
        return alert('Fill up all the forms')
    }
    
})
