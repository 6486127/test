const vNationality = document.getElementById("Nationality");
const vDay = document.getElementById("Day");
const vMounth = document.getElementById("Mounth");
const vYear = document.getElementById("Year");
const aInpt = document.querySelectorAll(".inpt");

const countries = [
	{ code: "AF", name: "Afghanistan" },
	{ code: "AL", name: "Albania" },
	{ code: "DZ", name: "Algeria" },
	{ code: "AR", name: "Argentina" },
	{ code: "AU", name: "Australia" },
	{ code: "AT", name: "Austria" },
	{ code: "BD", name: "Bangladesh" },
	{ code: "BY", name: "Belarus" },
	{ code: "BE", name: "Belgium" },
	{ code: "BR", name: "Brazil" },
	{ code: "BG", name: "Bulgaria" },
	{ code: "KH", name: "Cambodia" },
	{ code: "CA", name: "Canada" },
	{ code: "CL", name: "Chile" },
	{ code: "CN", name: "China" },
	{ code: "CO", name: "Colombia" },
	{ code: "HR", name: "Croatia" },
	{ code: "CU", name: "Cuba" },
	{ code: "CZ", name: "Czech Republic" },
	{ code: "DK", name: "Denmark" },
	{ code: "EG", name: "Egypt" },
	{ code: "FI", name: "Finland" },
	{ code: "FR", name: "France" },
	{ code: "DE", name: "Germany" },
	{ code: "GR", name: "Greece" },
	{ code: "HU", name: "Hungary" },
	{ code: "IN", name: "India" },
	{ code: "ID", name: "Indonesia" },
	{ code: "IR", name: "Iran" },
	{ code: "IE", name: "Ireland" },
	{ code: "IL", name: "Israel" },
	{ code: "IT", name: "Italy" },
	{ code: "JP", name: "Japan" },
	{ code: "KZ", name: "Kazakhstan" },
	{ code: "KR", name: "South Korea" },
	{ code: "KW", name: "Kuwait" },
	{ code: "LB", name: "Lebanon" },
	{ code: "MY", name: "Malaysia" },
	{ code: "MX", name: "Mexico" },
	{ code: "MA", name: "Morocco" },
	{ code: "NL", name: "Netherlands" },
	{ code: "NZ", name: "New Zealand" },
	{ code: "NG", name: "Nigeria" },
	{ code: "NO", name: "Norway" },
	{ code: "PK", name: "Pakistan" },
	{ code: "PH", name: "Philippines" },
	{ code: "PL", name: "Poland" },
	{ code: "PT", name: "Portugal" },
	{ code: "RU", name: "Russia" },
	{ code: "SA", name: "Saudi Arabia" },
	{ code: "SG", name: "Singapore" },
	{ code: "ZA", name: "South Africa" },
	{ code: "ES", name: "Spain" },
	{ code: "SE", name: "Sweden" },
	{ code: "CH", name: "Switzerland" },
	{ code: "TR", name: "Turkey" },
	{ code: "UA", name: "Ukraine" },
	{ code: "GB", name: "United Kingdom" },
	{ code: "US", name: "United States" },
];

for (let i = 0; i < countries.length; i++) {
	vNationality.innerHTML += `<option value="${countries[i].code}">${countries[i].name}</option>`;
}

for (let i = 1; i < 32; i++) {
	if (i < 10) {
		vDay.innerHTML += `<option value="${i}">0${i}</option>`;

		continue;
	}

	vDay.innerHTML += `<option value="${i}">${i}</option>`;
}

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

for (let i = 0; i < months.length; i++) {
	vMounth.innerHTML += `<option value="${months[i]}">${months[i]}</option>`;
}

for (let i = 2023; i >= 1800; i--) {
	vYear.innerHTML += `<option value="${i}">${i}</option>`;
}