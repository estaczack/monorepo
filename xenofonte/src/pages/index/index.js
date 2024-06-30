const ValidateEmail = require('../../../../common/login/ValidateEmail')
const Message = require('../../../../common/messages/Message')
const HeaderOpen = require('../../../../common/entities/header/HeaderOpen')

HeaderOpen.show();

let emailField = document.getElementById('email-field')
let passwordField = document.getElementById('password-field')
let loginButton = document.getElementById('login-button')
let inputFields = Array.from(document.getElementsByClassName('input'))

loginButton.setAttribute('disabled', 'true')

emailField.focus()

emailField.addEventListener('focusout', ev => {
  if (ValidateEmail(emailField.value)) {
    emailField.classList.remove('is-danger')
  } else {
    Message('danger', 'Please type a valid email.')
    emailField.classList.add('is-danger')
  }
})

passwordField.addEventListener('focusout', ev => {
  if (passwordField.value !== '') {
    passwordField.classList.remove('is-danger')
  } else {
    Message('danger', 'You must type your password.')
    passwordField.classList.add('is-danger')
  }
})

inputFields.forEach(inputElement => {
  inputElement.addEventListener('keyup', ev => {
    if (emailField.value === '' || passwordField.value === '') {
      loginButton.setAttribute('disabled', 'true')
    } else {
      loginButton.removeAttribute('disabled')
    }
  })
})

loginButton.addEventListener('click', async ev => {
  let userData = {}
  userData.email = emailField.value
  userData.password = passwordField.value
  emailField.value = ''
  passwordField.value = ''
  let res = await fetch('/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(userData)
  }).then(resp => resp.json())
  if (res.ok) {
    localStorage.setItem('token', res.jwt)
    localStorage.setItem('userData', JSON.stringify(res.userData))
    Message(
      'success',
      "Login sucessfull. You'll be redirect to your main page."
    )
    setInterval(() => {
      window.location.href = '/user/homepage'
    }, 4000)
  } else {
    Message('danger', 'Login failure: ' + res.msg)
  }
})
