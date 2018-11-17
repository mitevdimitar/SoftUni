function solve(kW, age) {
	let power = Number(kW);
	let carAge = Number(age)
	calculate(power);
function calculate(power) {
	let tax = 0;
	if (power > 110) {
		tax = power * 1.54;
	} else if (power > 74) {
		tax = power * 1.38;
	} else if (power > 55) {
		tax = power * 0.68;
	} else if (power > 37) {
		tax = power * 0.50;
	} else {
		tax = power * 0.43;
}
tax = tax.toFixed(2);
	calculateAge(tax);
}
function calculateAge(tax) {
	if (carAge < 5) {
		tax *= 2.80;
	} else if (carAge < 14) {
		tax *= 1.50;
	} else {
		tax *= 1.00;
	}
  	tax = tax.toFixed(2);
	console.log(`${tax} lv.`);
}
}