const optionsForTextInput = [
	{
		rule: "required",
	},
	{
		rule: "minLength",
		value: 2,
		errorMessage: "at least 2 letters",
	},
	{
		rule: "maxLength",
		value: 15,
		errorMessage: "no more than 15 letters",
	},
	{
		rule: "customRegexp",
		value: /^[a-zA-Z_-]+$/,
		errorMessage: "only latin letters, - and _",
	},
];

const optionsForEmailInput = [
	{
		rule: "required",
	},
	{
		rule: "customRegexp",
		value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
		errorMessage: "invalid email</br>example@mail.com",
	},
];

const optionsForPassword = [
	{
		rule: "required",
	},
	{
		rule: "minLength",
		value: 8,
		errorMessage: "at least 8 characters",
	},
	{
		rule: "customRegexp",
		value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/,
		errorMessage: "should be used A-Z a-z 0-9",
	},
];

const optionsForConfirmPassword = [
	{
		rule: "required",
	},
	{
		validator: (value, fields) => {
			if (fields["#signup-password"] && fields["#signup-password"].elem) {
				const repeatPasswordValue = fields["#signup-password"].elem.value;

				return value === repeatPasswordValue;
			}

			return true;
		},
		errorMessage: "Passwords should be the same",
	},
];

const validator = new window.JustValidate("#form-signup", {
	tooltip: {
		position: "top",
	},
	errorFieldStyle: {
		color: "red",
	},
});

validator
	.addField("#first_name", optionsForTextInput)
	.addField("#last_name", optionsForTextInput)
	.addField("#signup-email", optionsForEmailInput)
	.addField("#signup-password", optionsForPassword)
	.addField("#signup-confirm-password", optionsForConfirmPassword);
