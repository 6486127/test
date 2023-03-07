const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmpassword')
const submitBtn = document.querySelector('.signup__btn')
const validateEmail = (input) => {
	const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (input.value.match(validRegex)) {
		input.style.borderBottom = '1px solid #F2F2F2'
		input.style.color = '#111111'
		input.style.backgroundImage = 'url(./icons/done.svg)'
	} else {
		input.style.borderBottom = '2px solid #FF2828'
		input.style.color = '#FF2828'
	}
}

const validatePassword = (input) => {
	const decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
	if(input.value.match(decimal))	{
		input.style.borderBottom = '1px solid #F2F2F2'
		input.style.color = '#111111'
	} else	{
		input.style.borderBottom = '2px solid #FF2828'
		input.style.color = '#FF2828'
	}
}

const validatePasswords = (pass,confPass) => {
	if(pass.value === confPass.value) {
		pass.style.borderBottom = '1px solid #F2F2F2'
		pass.style.color = '#111111'
		confPass.style.borderBottom = '1px solid #F2F2F2'
		confPass.style.color = '#111111'
	} else {
		pass.style.borderBottom = '2px solid #FF2828'
		pass.style.color = '#FF2828'
		confPass.style.borderBottom = '2px solid #FF2828'
		confPass.style.color = '#FF2828'
	}
}

submitBtn.addEventListener('click', (e) => {
	e.preventDefault()
	validateEmail(email)
	validatePassword(password)
	validatePasswords(password,confirmPassword)
})