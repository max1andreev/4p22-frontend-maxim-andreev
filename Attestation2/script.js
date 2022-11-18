'use strict'

const form = document.querySelector(".field-form")
form.addEventListener("submit", function (event) {
    event.preventDefault()

    const email = document.querySelector("input[name=email]").value

    const password = document.querySelector("input[name=password]").value

    const checkPassword = document.querySelector("input[name=check-password]").value

    const errors = []

    
    removeError('email')
    removeError('password')
    removeError('password-confirm')

    if (!email) {
       errors.push('email')
    }

    if (!validateEmail(email)) {
       errors.push('email') 
    }
    if (checkPassword == ''){
       errors.push('email')}

    if (!password) {
       errors.push('password')
    }

    if (password.length < 8){
       errors.push('password')
    }
    if (checkPassword == ''){
       errors.push('password')}

    if (password !== checkPassword){
       errors.push('password-confirm')
    }
    if (checkPassword == ''){
       errors.push('password-confirm')}

    if (errors.length){
       
        errors.forEach((id) => showError(id))

    }
    else {console.log({ email, password, checkPassword })}
})

function showError(id) {
    const node = document.getElementById(id)
    if (!node.classList.contains('error')){
    node.classList.add('error')}

}

function removeError(id) {
    const node = document.getElementById(id)
    if (node.classList.contains('error')){
    node.classList.remove('error')}

}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

