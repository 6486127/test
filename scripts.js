//onBlur effect for all of fields
const showOverlay = function () {
  const overlay = document.querySelector('.overlay')
  overlay.style.visibility = 'visible'
}

const hideOverlay = function () {
  const overlay = document.querySelector('.overlay')
  overlay.style.visibility = 'hidden'
}

const closeAllFields = function () {
  const selectPicker = document.querySelector('#select-picker')
  const dayPicker = document.querySelector('#day-picker')
  const monthPicker = document.querySelector('#month-picker')
  const yearPicker = document.querySelector('#year-picker')

  selectPicker.style.visibility = 'hidden'
  dayPicker.style.visibility = 'hidden'
  monthPicker.style.visibility = 'hidden'
  yearPicker.style.visibility = 'hidden'

  hideOverlay()
}

//-----------------------------------------------------------------//

//select handler
const setSelect = function (e) {
  const currentSelect = document.querySelector('.select-current')
  const selectPicker = document.querySelector('#select-picker')
  currentSelect.innerHTML = e.target.innerHTML
  currentSelect.value = e.target.innerHTML
  selectPicker.style.visibility = 'hidden'
}

const toggleSelect = function () {
  closeAllFields()

  const selectPicker = document.querySelector('#select-picker')
  selectPicker.style.visibility === 'visible'
    ? selectPicker.style.visibility = 'hidden'
    : selectPicker.style.visibility = 'visible'

  const selectItems = document.querySelectorAll('.select-item')
  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].onclick = setSelect
  }

  showOverlay()
}

//birth date handlers
const setDay = function (e) {
  const currentDay = document.querySelector('.current-day')
  const dayPicker = document.querySelector('#day-picker')
  currentDay.innerHTML = e.currentTarget.value
  currentDay.setAttribute('value', e.target.innerHTML)
  dayPicker.style.visibility = 'hidden'
}

const setMonth = function (e) {
  const currentMonth = document.querySelector('.current-month')
  const monthPicker = document.querySelector('#month-picker')
  currentMonth.innerHTML = e.target.innerHTML
  currentMonth.setAttribute('value', e.target.innerHTML)
  monthPicker.style.visibility = 'hidden'
}

const setYear = function (e) {
  const currentYear = document.querySelector('.current-year')
  const yearPicker = document.querySelector('#year-picker')
  currentYear.innerHTML = e.currentTarget.value
  yearPicker.style.visibility = 'hidden'
}

const toggleDay = function () {
  closeAllFields()

  const dayPicker = document.querySelector('#day-picker')
  const monthPicker = document.querySelector('#month-picker')
  const yearPicker = document.querySelector('#year-picker')

  dayPicker.childNodes ? dayPicker.replaceChildren() : null
  monthPicker.replaceChildren()
  yearPicker.replaceChildren()

  for (let i = 1; i <= 31; i++) {
    const li = document.createElement('li')
    li.setAttribute('value', i)
    li.setAttribute('class', 'day-item')
    li.onclick = setDay
    li.innerHTML = i
    dayPicker.appendChild(li)
  }

  dayPicker.style.visibility === 'hidden'
    ? dayPicker.style.visibility = 'visible'
    : dayPicker.style.visibility = 'hidden'

  showOverlay()
}

const toggleMonth = function () {
  closeAllFields()

  const dayPicker = document.querySelector('#day-picker')
  const monthPicker = document.querySelector('#month-picker')
  const yearPicker = document.querySelector('#year-picker')

  dayPicker.replaceChildren()
  monthPicker.childNodes ? monthPicker.replaceChildren() : null
  yearPicker.replaceChildren()

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ]

  for (let i = 0; i < 12; i++) {
    const li = document.createElement('li')
    li.setAttribute('value', months[i])
    li.setAttribute('class', 'month-item')
    li.onclick = setMonth
    li.innerHTML = months[i]
    monthPicker.appendChild(li)
  }

  monthPicker.style.visibility === 'hidden'
    ? monthPicker.style.visibility = 'visible'
    : monthPicker.style.visibility = 'hidden'

  showOverlay()
}

const toggleYear = function () {
  closeAllFields()

  const dayPicker = document.querySelector('#day-picker')
  const monthPicker = document.querySelector('#month-picker')
  const yearPicker = document.querySelector('#year-picker')

  dayPicker.replaceChildren()
  monthPicker.replaceChildren()
  yearPicker.childNodes ? yearPicker.replaceChildren() : null

  const date = new Date()
  const year = date.getFullYear()

  for (let i = year - 14; i >= 1900; i--) {
    const li = document.createElement('li')
    li.setAttribute('value', i)
    li.setAttribute('class', 'year-item')
    li.onclick = setYear
    li.innerHTML = i
    yearPicker.appendChild(li)
  }

  yearPicker.style.visibility === 'hidden'
    ? yearPicker.style.visibility = 'visible'
    : yearPicker.style.visibility = 'hidden'

  showOverlay()
}

//-----------------------------------------------------------------//

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

  if (!reg.test(value)) {
    setError(field, p, 'invalid email')
  } else {
    removeError(field, p)
  }
}

//utils: password check
const passwordCheck = (field, value, p) => {
  const upperCase = /[A-Z]/
  const lowerCase = /[a-z]/
  const numbers = /[0-9]/

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
  if (passwordValue !== confirmValue) {
    setError(field, p, 'passwords mismatch')
  } else {
    removeError(field, p)
  }
}
//-----------------------------------------------------------------//

//form handler - get request
const formHandler = async () => {
  const data = new FormData(document.querySelector('#form'))
  const nationality = document.querySelector('.select-current')
  const day = document.querySelector('.current-day')
  const month = document.querySelector('.current-month')
  const year = document.querySelector('.current-year')

  data.append('nationality', nationality.value)
  data.append('birthday', `${dayNormalize(day.getAttribute('value'))}.${monthNormalize(month.getAttribute('value'))}.${year.getAttribute('value')}`)

  if (data.get('first-name') && data.get('last-name') && data.get('email')
    && data.get('gender') && ((data.get('password') === data.get('confirm')) &&
      data.get('password') !== '')) {

    try {
      const response = await fetch('/server-ok.json')
      const result = await response.json().then((res) => res.message)
      console.log(result)
      for (let pair of data.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`)
      }

      //reset values for all fields
      document.querySelector('#form').reset()
      const btn = document.querySelector('.submit-btn')
      btn.setAttribute('disabled', 'disabled')
      btn.setAttribute('value', 'Loading...')
      const overlay = document.querySelector('.success-overlay')

      //server delay simulation
      setTimeout(() => {
        overlay.style.display = 'flex'
        btn.style.display = 'none'
      }, 1500)

    } catch (error) {
      console.log(error)
    }

  } else {
    const btn = document.querySelector('.submit-btn')
    btn.classList.add('shake')
    setTimeout(() => btn.classList.remove('shake'), 400)
  }
}

//emersion animation
const emersion = () => {
  const fields = document.querySelectorAll('.col')
  for (let i = 0; i < fields.length; i++) {
    setTimeout(() => {
      fields[i].classList.add('emersion')
      fields[i].style.opacity = 1
    }, 350 * i)
  }
}

window.addEventListener('load', emersion)