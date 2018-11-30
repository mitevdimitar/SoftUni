function halfCutter(arg) {
	let num = Number(arg);
	let counter = 0;
	do {        
        num /= 2;        
        counter ++;
	} while (num >= 1);
	console.log(`Length is ${num.toFixed(2)} cm. after ${counter} cuts.`);
}
