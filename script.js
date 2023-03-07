const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmpassword')
const submitBtn = document.querySelector('.signup__btn')
const name = document.getElementById('name')
const lastName = document.getElementById('lastname')
const nationality = document.getElementById('nationality')
const day = document.querySelector('.signup__select_day')
const month = document.querySelector('.signup__select_month')
const year = document.querySelector('.signup__select_year')
const male = document.getElementById('male')
const female = document.getElementById('female')
const user = document.querySelector('.signup__user')
const popup = document.querySelector('.popup')

const validateEmail = (input) => {
	const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (input.value.match(validRegex)) {
		input.style.borderBottom = '1px solid #F2F2F2'
		input.style.color = '#111111'
		input.style.backgroundImage = 'url(./icons/done.svg)'
		return true
	} else {
		input.style.borderBottom = '2px solid #FF2828'
		input.style.color = '#FF2828'
		return false
	}
}

const validatePassword = (input) => {
	const decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
	if(input.value.match(decimal))	{
		input.style.borderBottom = '1px solid #F2F2F2'
		input.style.color = '#111111'
		return true
	} else	{
		input.style.borderBottom = '2px solid #FF2828'
		input.style.color = '#FF2828'
		return false
	}
}

const validatePasswords = (pass,confPass) => {
	if(pass.value === confPass.value && pass.value.length !== 0 && confPass.value.length !== 0) {
		pass.style.borderBottom = '1px solid #F2F2F2'
		pass.style.color = '#111111'
		confPass.style.borderBottom = '1px solid #F2F2F2'
		confPass.style.color = '#111111'
		return true
	} else {
		pass.style.borderBottom = '2px solid #FF2828'
		pass.style.color = '#FF2828'
		confPass.style.borderBottom = '2px solid #FF2828'
		confPass.style.color = '#FF2828'
		return false
	}
}

const validateLength = (text) => {
	if(text.value.length !== 0)	{
		text.style.borderBottom = '1px solid #F2F2F2'
		text.style.color = '#111111'
		return true
	} else	{
		text.style.borderBottom = '2px solid #FF2828'
		text.style.color = '#FF2828'
		return false
	}
}


submitBtn.addEventListener('click', (e) => {
	e.preventDefault()
		validateEmail(email)
		validateLength(name)
		validateLength(lastName)
		validatePassword(password)
		validatePasswords(password,confirmPassword)
		fetch('http://localhost:3000/users', {
			method: 'post',
			body: JSON.stringify({
				firstName: name.value,
				lastName: lastName.value,
				nationality: nationality.value,
				dateOfBirth: {day: day.value, month: month.value, year: year.value},
				email: email.value,
				gender: male.checked ? male.id : female.id,
				password: password.value
			}),
			headers: {
				'content-type': 'application/json'
			}
		}).then((response) => response.json())
			.then((data) => {
					if (data.status === '200') {
						name.value = ''
						lastName.value = ''
						nationality.value = 'American'
						day.value = '21'
						month.value = 'December'
						year.value = '1995'
						email.value = ''
						password.value = ''
						confirmPassword.value = ''
						console.log(data)
						user.remove()
						popup.classList.add('popup__active')
				} else {
						console.log('Заполните поля!')

					}
	}

			)
			.catch((err) =>{
			})
})