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
  const successOverlay = document.querySelector('.succes-overlay')

  selectPicker.style.visibility = 'hidden'
  dayPicker.style.visibility = 'hidden'
  monthPicker.style.visibility = 'hidden'
  yearPicker.style.visibility = 'hidden'
  successOverlay ? successOverlay.style.display = 'none' : null

  hideOverlay()
}

//-----------------------------------------------------------------//

//select handler
const setSelect = function (e) {
  const currentSelect = document.querySelector('.select-current')
  const selectPicker = document.querySelector('#select-picker')
  currentSelect.innerHTML = e.target.innerHTML
  currentSelect.setAttribute('value', e.target.innerHTML)
  selectPicker.style.visibility = 'hidden'
}

const toggleSelect = function () {
  closeAllFields()

  const selectCurrent = document.querySelector('.select-current')
  const selectPicker = document.querySelector('#select-picker')
  const rect = selectCurrent.getBoundingClientRect()

  selectPicker.style.top = `${rect.bottom + 7}px`
  selectPicker.style.left = `${rect.left}px`
  selectPicker.style.width = `${rect.width}px`

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
  currentYear.setAttribute('value', e.currentTarget.value)
  console.log(currentYear.getAttribute('value'))
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

  //picker position
  const currentDay = document.querySelector('.current-day')
  const rect = currentDay.getBoundingClientRect()
  dayPicker.style.top = `${rect.bottom + 7}px`
  dayPicker.style.left = `${rect.left}px`
  dayPicker.style.width = `${rect.width}px`

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

  const currentMonth = document.querySelector('.current-month')
  const rect = currentMonth.getBoundingClientRect()

  monthPicker.style.top = `${rect.bottom + 7}px`
  monthPicker.style.left = `${rect.left}px`
  monthPicker.style.width = `${rect.width}px`


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

  const currentYear = document.querySelector('.current-year')
  const rect = currentYear.getBoundingClientRect()

  yearPicker.style.top = `${rect.bottom + 7}px`
  yearPicker.style.left = `${rect.left}px`
  yearPicker.style.width = `${rect.width}px`

  yearPicker.style.visibility === 'hidden'
    ? yearPicker.style.visibility = 'visible'
    : yearPicker.style.visibility = 'hidden'

  showOverlay()
}

//radio buttons handler
const setRadioChecked = (id) => {
  const radio = document.querySelector(`#${id}`)
  radio.setAttribute('checked', '')

  const radioArr =
    Array.from(document.querySelectorAll('input[type=radio].gender-radio'))
  const otherRadios = radioArr.filter((radio) => radio.id !== id)

  for (let radio of otherRadios) {
    radio.hasAttribute('checked') && radio.removeAttribute('checked')
    break
  }
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
    // checkmark.style.display = 'block'
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
//-----------------------------------------------------------------//

//form handler - get request
const formHandler = async () => {
  const data = new FormData(document.querySelector('#form'))
  const nationality = document.querySelector('.select-current')
  const day = document.querySelector('.current-day')
  const month = document.querySelector('.current-month')
  const year = document.querySelector('.current-year')

  data.append('nationality', nationality.getAttribute('value'))
  data.append('birthday', `${dayNormalize(day.getAttribute('value'))}.${monthNormalize(month.getAttribute('value'))}.${year.getAttribute('value')}`)

  if (data.get('first-name') && data.get('last-name') && data.get('email')
    && data.get('gender') && ((data.get('password') === data.get('confirm')) &&
      data.get('password') !== '')) {

    try {
      const response = await fetch('/server-ok.json')
      const result = await response.json().then((res) => res.message)

      //result log
      console.log(result)
      for (let pair of data.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`)
      }

      //reset values for all fields
      document.querySelector('#form').reset()
      document.querySelector('input[name=gender]:checked').removeAttribute('checked')

      const btn = document.querySelector('.submit-btn')
      const form = document.querySelector('.form')
      const overlay = document.querySelector('.success-overlay')

      btn.setAttribute('disabled', 'disabled')
      btn.setAttribute('value', 'Loading...')

      //layer position
      const rect = form.getBoundingClientRect()
      overlay.style.top = `${rect.top}px`
      overlay.style.left = `${rect.left}px`
      overlay.style.width = `${rect.width}px`
      overlay.style.height = `${rect.height}px`

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

//submit form by hitting Enter
const handleEnterClick = () => {
  const btn = document.querySelector('.submit-btn')
  btn.addEventListener('keydown', (e) => {
    if (e.keyCode === '13') {
      btn.click()
    }
  })
}

window.addEventListener('load', emersion)
window.addEventListener('resize', () => closeAllFields())