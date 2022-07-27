const form = document.querySelector('.form')
const alertElement = document.querySelector('.alert')
const selects = document.querySelectorAll('.select')
const formItems = document.querySelectorAll('.form-item')
const passwordInputs = document.querySelectorAll('input[type="password"]')

const mask = '●'
const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

function validNotEmpty(value) {
  return value.length > 0
}
function validEmail(value) {
  return regexEmail.test(value)
}
function validPassword(value) {
  return regexPassword.test(value)
}
function confirmPassword() {
  return passwordInputs[0].value == passwordInputs[1].value
}
function validateForm(inputs) {
  let errors = 0
  const result = {}
  for (const element of inputs) {
    element.closest('.form-item').classList.remove('error')
    !validateInputs(element) ? errors++ : (result[element.name] = element.value)
  }
  return errors > 0 ? false : result
}
function validateInputs(element) {
  return element.type === 'text' &&
    !element.closest('.select') &&
    !validNotEmpty(element.value)
    ? (element.closest('.form-item').classList.add('error'),
      showAlert('The field cannot be empty!'),
      false)
    : element.closest('.select') && !validNotEmpty(element.value)
    ? (element.closest('.form-item').classList.add('error'),
      showAlert('You have to choose a nationality!'),
      false)
    : element.type === 'email' && !validEmail(element.value)
    ? (element.closest('.form-item').classList.add('error'),
      showAlert('Enter a valid email!'),
      false)
    : !validPassword(element.value) && element.type === 'password'
    ? (element.closest('.form-item').classList.add('error'),
      showAlert(
        'Password must contain at least eight characters, at least one number and both lower and uppercase letters and passwords must match'
      ),
      false)
    : !confirmPassword() && element.type === 'password'
    ? (element.closest('.form-item').classList.add('error'),
      showAlert(
        'Password must contain at least eight characters, at least one number and both lower and uppercase letters and passwords must match'
      ),
      false)
    : (element.closest('.form-item').classList.add('valid'), true)
}

function listenPasswords(elem) {
  elem.addEventListener('input', (e) => {
    e.target.previousElementSibling.innerText = mask.repeat(
      e.target.value.length
    )
  })
}
function listenSelect(elem) {
  const selectList = elem.lastChild
  const selectInput = elem.firstChild
  const selectPlaceholder = elem.childNodes[1]
  selectList.addEventListener('click', (e) => {
    e.stopPropagation()
    selectInput.value = e.target.textContent
    selectPlaceholder.classList.remove('open')
    selectPlaceholder.textContent = e.target.textContent
    selectList.classList.add('hidden')
  })
  elem.addEventListener('click', (e) => {
    forOfNodeList(selects, toggleSelectClass)
    selectPlaceholder.classList.add('open')
    selectList.classList.remove('hidden')
  })
}
function listenForm(form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputs = e.target.querySelectorAll('input')
    const button = e.target.querySelector('button')
    if (validateForm(inputs)) {
      form.innerHTML =
        '<div> <h3 class="form-title">Thank you</h3><p class="form-subtitle">you registered!</p></div> <div class="form-bottom"><p class="login-text">Have an account?&nbsp;<a class="login-link" href="#">Login</a></p></div>'
      fetch('../assets/json/server.json')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          alert(data.message)
        })
      return
    }
    button.classList.add('button-error')
    setTimeout(() => {
      button.classList.remove('button-error')
    }, 1000)
  })
}

function forOfNodeList(list, f) {
  for (const iter of list) {
    f(iter)
  }
}
function removeFormItemAnim(formItems) {
  setTimeout(() => {
    for (let i = 0; i < formItems.length; i++) {
      formItems[i].classList.remove(`fade-${i + 1}`)
    }
  }, 2200)
}
function showAlert(message) {
  alertElement.classList.add('alert-show')
  alertElement.querySelector('p').textContent = message
  setTimeout(() => {
    alertElement.classList.remove('alert-show')
  }, 4100)
}
function toggleSelectClass(elem) {
  const selectList = elem.lastChild
  const selectPlaceholder = elem.childNodes[1]
  selectList.classList.add('hidden')
  selectPlaceholder.classList.remove('open')
}

removeFormItemAnim(formItems)
forOfNodeList(selects, listenSelect)
forOfNodeList(passwordInputs, listenPasswords)
listenForm(form)
