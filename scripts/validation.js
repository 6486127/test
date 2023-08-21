//fields validation
const validate = function (fieldId) {
  let value, p

  switch (fieldId) {

    case 'first-name':
      nameCheck(fieldId)
      break

    case 'last-name':
      nameCheck(fieldId)
      break

    case 'email':
      const email = document.querySelector('#email')
      value = email.value
      p = document.querySelector('.error-message-email')

      if (value.length > 0) {
        emailCheck(email, value, p)
      } else {
        setError(email, p, 'field is required')
      }

      break

    case 'password':
      const password = document.querySelector('#password')
      value = password.value
      p = document.querySelector('.error-message-password')

      if (value.length > 0) {
        passwordCheck(password, value, p)
      } else {
        setError(password, p, 'field is required')
      }

      break

    case 'confirm':
      const confirm = document.querySelector('#confirm')
      const passwordValue = document.querySelector('#password').value
      const confirmValue = confirm.value
      p = document.querySelector('.error-message-confirm')

      if (confirmValue.length > 0) {
        confirmCheck(confirm, passwordValue, confirmValue, p)
      } else {
        setError(confirm, p, 'field is required')
      }

      break
  }
}

//-----------------------------------------------------------------//

//utils: add new error
const setError = (field, p, text) => {
  field.classList.add('error')
  p.classList.add('error')
  p.innerHTML = text
}

//utils: remove error 
const removeError = (field, p) => {
  if (field.classList) {
    field.classList.contains('error') && field.classList.remove('error')
    p.classList.contains('error') && p.classList.remove('error')
    p.innerHTML = ''
  }
}

//utils: normalize name fields
const nameNormalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

//utils: normalize day
const dayNormalize = (str) =>
  +str > 9 ? str : `0${str}`

//utils: normalize month
const monthNormalize = (str) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ]

  for (let i = 0; i < months.length; i++) {
    if (months[i] === str) {
      if (i > 8) {
        return i + 1
      } else {
        return `0${i + 1}`
      }
    }
  }
}

//utils: check for numbers
const checkForNumbers = (field, value, p) => {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

  for (let i = 0; i < numbers.length; i++) {
    if (value.includes(numbers[i])) {
      setError(field, p, 'only letters accepted')
      break
    } else {
      removeError(field, p)
    }
  }
}

//utils: name check
const nameCheck = (field) => {
  const name = document.querySelector(`#${field}`)
  value = name.value
  p = document.querySelector(`.error-message-${field}`)

  name.onfocus = () => removeError(name, p)

  if (value.length > 0) {
    name.value = nameNormalize(value)
    checkForNumbers(name, value, p)
  } else {
    setError(name, p, 'field is required')
  }
}

//utils: email check
const emailCheck = (field, value, p) => {
  //simple check just to introduce functionality
  const reg = /@/
  const checkmark = document.querySelector('.email-checkmark')

  field.onfocus = () => removeError(field, p)

  if (!reg.test(value)) {
    setError(field, p, 'invalid email')
  } else {
    removeError(field, p)
  }

  field.classList.contains('error')
    ? checkmark.style.display = 'none'
    : checkmark.style.display = 'block'
}

//utils: password check
const passwordCheck = (field, value, p) => {
  const upperCase = /[A-Z]/
  const lowerCase = /[a-z]/
  const numbers = /[0-9]/

  field.onfocus = () => removeError(field, p)

  if (value.length < 8) {
    setError(field, p, 'your password must be at least 8 characters')
  } else if (!upperCase.test(value)) {
    setError(field, p, 'your password should contain uppercase letter')
  } else if (!lowerCase.test(value)) {
    setError(field, p, 'your password should contain lowercase letter')
  } else if (!numbers.test(value)) {
    setError(field, p, 'your password should contain number')
  } else {
    removeError(field, p)
  }
}
//utils: confirm check
const confirmCheck = (field, passwordValue, confirmValue, p) => {
  field.onfocus = () => removeError(field, p)

  if (passwordValue !== confirmValue) {
    setError(field, p, 'passwords mismatch')
  } else {
    removeError(field, p)
  }
}