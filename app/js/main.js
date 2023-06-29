document.addEventListener("DOMContentLoaded", function () {
	var elems = document.querySelectorAll("select");
	var instances = M.FormSelect.init(elems, {});
});

document.addEventListener("DOMContentLoaded", function () {
	var elems = document.querySelectorAll(".datepicker");
	var instances = M.Datepicker.init(elems, {
		minDate: new Date(1930, 0, 1),
		maxDate: new Date(2023, 5, 1),
		defaultDate: new Date(2000, 0, 1),
		setDefaultDate: true,
		format: "dd mmmm yyyy",
    yearRange: [1930, 2024],
	});
});
