const ValidateEmail = require('../../../../common/login/ValidateEmail')
const Message = require('../../../../common/messages/Message')
const HeaderOpen = require('../../../../common/entities/header/HeaderOpen')

HeaderOpen.show();

let firstNameField = document.getElementById('first-name-field')
let familyNameField = document.getElementById('family-name-field')
let emailField = document.getElementById('email-field')
let passwordField = document.getElementById('password-field')
let repeatPasswordField = document.getElementById('repeat-password-field')
let signupButton = document.getElementById('signup-button')
let inputFields = Array.from(document.getElementsByClassName('input'))

signupButton.setAttribute('disabled', 'true')

firstNameField.addEventListener('focusout', ev => {
  if (firstNameField.value !== '') {
    firstNameField.classList.remove('is-danger')
  } else {
    Message('danger', "First name can't be empty.")
    firstNameField.classList.add('is-danger')
  }
})

familyNameField.addEventListener('focusout', ev => {
  if (familyNameField.value !== '') {
    familyNameField.classList.remove('is-danger')
  } else {
    Message('danger', "Family name can't be empty.")
    familyNameField.classList.add('is-danger')
  }
})

emailField.addEventListener('focusout', ev => {
  if (ValidateEmail(emailField.value)) {
    emailField.classList.remove('is-danger')
  } else {
    Message('danger', 'You must use a valid email.')
    emailField.classList.add('is-danger')
  }
})

passwordField.addEventListener('focusout', ev => {
  if (passwordField.value !== '') {
    passwordField.classList.remove('is-danger')
  } else {
    Message('danger', "Password can't be empty.")
    passwordField.classList.add('is-danger')
  }
})

repeatPasswordField.addEventListener('focusout', ev => {
  if (repeatPasswordField.value !== '') {
    repeatPasswordField.classList.remove('is-danger')
  } else {
    Message('danger', "Password repetition can't be empty...")
    repeatPasswordField.classList.add('is-danger')
  }
})

repeatPasswordField.addEventListener('focusout', ev => {
  if (repeatPasswordField.value === passwordField.value) {
    repeatPasswordField.classList.remove('is-danger')
  } else {
    Message('danger', 'The passwords are different.')
    repeatPasswordField.classList.add('is-danger')
  }
})

inputFields.forEach(inputElement => {
  inputElement.addEventListener('keyup', ev => {
    if (
      firstNameField.value === '' ||
      familyNameField.value === '' ||
      emailField.value === '' ||
      passwordField.value === '' ||
      repeatPasswordField.value === ''
    ) {
      signupButton.setAttribute('disabled', 'true')
    } else {
      signupButton.removeAttribute('disabled')
    }
  })
})

signupButton.addEventListener('click', async ev => {
  let userData = {}
  if (passwordField.value !== repeatPasswordField.value) {
    Message('danger', 'The passwords are different.')
    passwordField.value = ''
    repeatPasswordField.value = ''
    passwordField.focus()
  } else {
    userData.firstName = firstNameField.value
    userData.familyName = familyNameField.value
    userData.email = emailField.value
    userData.password = passwordField.value
    firstNameField.value = ''
    familyNameField.value = ''
    emailField.value = ''
    passwordField.value = ''
    repeatPasswordField.value = ''
    let res = await fetch('/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(userData)
    }).then(res => res.json())
    console.log(res)
    if (res.ok) {
      Message(
        'success',
        "User account created. You'll be redirected to the login page."
      )
      setTimeout(() => {
        window.location.href = '/'
      }, 4000)
    } else {
      if (res.code === 'ER_DUP_ENTRY') {
        Message(
          'danger',
          'Signup failure: Email (' + res.data.email + ') already exists.'
        )
        setTimeout(() => {
          window.location.href = '/signup'
        }, 4000)
      }
    }
  }
})

firstNameField.focus()
