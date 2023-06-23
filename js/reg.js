const oErrorBlock = document.querySelector(".error-msg");
const contentErrorBlock = document.querySelector(".error-content");
const inptSubmit = document.querySelector(".btn-sub");

function fShowError(border, color, msg) {
	if (border !== null) {
		border.style.borderBottom = `2px solid #ff2222`;
		color.style.color = `#ff2222`;
	}

	oErrorBlock.style.opacity = "1";
	contentErrorBlock.innerHTML = `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            class="info-svg"
        >
            <path
                d="M453-280h60v-240h-60v240Zm26.982-314q14.018 0 23.518-9.2T513-626q0-14.45-9.482-24.225-9.483-9.775-23.5-9.775-14.018 0-23.518 9.775T447-626q0 13.6 9.482 22.8 9.483 9.2 23.5 9.2Zm.284 514q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Zm.234-60Q622-140 721-239.5t99-241Q820-622 721.188-721 622.375-820 480-820q-141 0-240.5 98.812Q140-622.375 140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"
            />
        </svg>
        <p>${msg}</p>
    `;

	inptSubmit.classList.add("er-sub");

	setTimeout(() => {
		if (border !== null) {
			border.style.borderBottom = `2px solid #f2f2f2`;
			color.style.color = `#111`;
		}

		oErrorBlock.style.opacity = "0";
		inptSubmit.classList.remove("er-sub");
	}, 4000);
}

const aMiniInpt = document.querySelectorAll(".inpt__mini");
const sFirstName = document.getElementById("f-name");
const sLastName = document.getElementById("l-name");
const sEmail = document.getElementById("email");
const bGender = document.getElementsByName("gender");
const sPass = document.getElementById("pass");
const sConfPass = document.getElementById("conf-pass");

const confSvg = document.querySelector(".esvg");

function fCheckReg() {
	const allowedRegex = /^[a-z]+$/i;

	// First Name
	if (sFirstName.value.length === 0) {
		return fShowError(
			aInpt[0],
			sFirstName,
			"The 'First Name' field cannot be left empty."
		);
	}
	if (!allowedRegex.test(sFirstName.value)) {
		return fShowError(
			aInpt[0],
			sFirstName,
			"Fist name must contain only letters."
		);
	}

	// Last Name
	if (sLastName.value.length === 0) {
		return fShowError(
			aInpt[1],
			sLastName,
			"The 'Last Name' field cannot be left empty."
		);
	}
	if (!allowedRegex.test(sLastName.value)) {
		return fShowError(
			aInpt[1],
			sLastName,
			"Last name must contain only letters."
		);
	}

	// Nationality
	if (vNationality.value === "null") {
		return fShowError(
			aInpt[2],
			vNationality,
			"The 'Nationality' field cannot be left empty."
		);
	}

	// E-mail
	if (!sEmail.value.includes("@")) {
		confSvg.style.opacity = "0";

		return fShowError(aInpt[3], sEmail, "The 'Email' field must contain @.");
	}

	// Date of Birth
	confSvg.style.opacity = "1";

	if (vDay.value === "null") {
		return fShowError(
			aMiniInpt[0],
			vDay,
			"The 'Date of Birth' field cannot be left empty."
		);
	}

	if (vMounth.value === "null") {
		return fShowError(
			aMiniInpt[1],
			vMounth,
			"The 'Date of Birth' field cannot be left empty."
		);
	}

	if (vYear.value === "null") {
		return fShowError(
			aMiniInpt[2],
			vYear,
			"The 'Date of Birth' field cannot be left empty."
		);
	}

	// Gender
	if (!bGender[0].checked && !bGender[1].checked) {
		return fShowError(null, null, "The 'Gender' field cannot be left empty.");
	}

	// Password
	let hasUppercase = false;
	let hasLowercase = false;
	let hasNumber = false;

	if (sPass.value.length < 8) {
		return fShowError(
			aInpt[6],
			sPass,
			"The password must contain at least 8 characters, uppercase and lowercase letters, as well as numbers."
		);
	}

	for (let i = 0; i < sPass.value.length; i++) {
		const char = sPass.value[i];
		if (char >= "A" && char <= "Z") {
			hasUppercase = true;
		} else if (char >= "a" && char <= "z") {
			hasLowercase = true;
		} else if (char >= "0" && char <= "9") {
			hasNumber = true;
		}
	}

	if (!hasUppercase || !hasLowercase || !hasNumber) {
		return fShowError(
			aInpt[6],
			sPass,
			"The password must contain at least 8 characters, uppercase and lowercase letters, as well as numbers."
		);
	}

	// Confirm Password
	if (sConfPass.value !== sPass.value) {
		return fShowError(aInpt[7], sConfPass, "Passwords must match.");
	}

	sFirstName.value = "";
	sLastName.value = "";
	vNationality.value = "null"
	sEmail.value = "";
	vDay.value = "null";
	vMounth.value = "null";
	vYear.value = "null";
	bGender[0].checked = false;
	bGender[1].checked = false;
	sPass.value = "";
	sConfPass.value = "";

	const oRegBlock = document.querySelector(".main-container__reg");
	const oFinalBlock = document.querySelector(".main-container__final-reg");

    oRegBlock.style.display = "none";
    oFinalBlock.style.display = "flex";
    oFinalBlock.style.opacity = "1";
}
