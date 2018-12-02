function solve(type, kW, age) {
	if (type === 'motorcycle') {
		let motorResult = totalCalculationMotor(kW);
		console.log(motorResult);
	} else if (type === 'car') {
        let carResult = totalCalculationCar(calculate(kW), taxDependingOnAge(age));
        console.log(carResult);
    }
    
function totalCalculationCar(kW, age) {
	let totalTax = kW * age;
	let result = `${totalTax.toFixed(2)} lv.`;
	return result;
}

function totalCalculationMotor(kW) {
	let tax = 0;
	if (kW > 750) {
		tax = 125;
	} else if (kW > 490) {
		tax = 94;
	} else if (kW > 350) {
		tax = 63;
	} else if (kW > 250) {
		tax = 44;
	} else if (kW > 125) {
		tax = 31;
	} else {
		tax = 15;
    }
    tax = tax.toFixed(2);	
    let result1 = `${tax} lv.`;
	return result1;
}

function calculate(kW) {
	let tax = 0;
	if (kW > 110) {
		tax = +kW * 1.54;
	} else if (kW > 74) {
		tax = +kW * 1.38;
	} else if (kW > 55) {
		tax = +kW * 0.68;
	} else if (kW > 37) {
		tax = kW * 0.50;
	} else {
		tax = kW * 0.43;
    }
    tax = tax.toFixed(2);
    return tax;
}

function taxDependingOnAge(age) {
	let index = 1;
	if (age < 5) {
		index *= 2.80;
	} else if (age < 14) {
		index *= 1.50;
	} else {
		index *= 1.00;
	}
	return index;
}

}
