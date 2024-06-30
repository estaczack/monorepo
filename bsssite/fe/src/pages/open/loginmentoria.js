const HeaderOpen = require('../../../../../common/entities/header/HeaderOpen')
const FooterOpen = require('../../../../../common/entities/footer/FooterOpen')
const ValidateEmail = require('../../../../../common/login/ValidateEmail')
const Message = require("../../../../../common/messages/Message")

const preferredLanguage = navigator.language || navigator.userLanguage
const prefLanguage = preferredLanguage.split('-')[0]

const showPage = async function () {
  await HeaderOpen.show()
  await FooterOpen.show()
}

showPage()

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
    Message('danger', 'Por favor, digite um email válido.')
    emailField.classList.add('is-danger')
  }
})

passwordField.addEventListener('focusout', ev => {
  if (passwordField.value !== '') {
    passwordField.classList.remove('is-danger')
  } else {
    Message('danger', 'Você deve digitar uma senha.')
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
  let res = await fetch('/api/open/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(userData)
  }).then(resp => resp.json())
  if (res.ok) {
    localStorage.setItem('userData', JSON.stringify(res.user))
    Message(
      'success',
      'Sucesso. Você será redirecionado para sua página em instantes.'
    )
    setInterval(() => {
      window.location.href = '/mentoria/dashboard.html'
    }, 3000)
  } else {
    Message('danger', 'Login failure: ' + res.msg)
  }
})
