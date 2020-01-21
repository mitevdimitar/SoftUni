function circle(input) {
	if (typeof(input) === "number") {
	  let area = input ** 2 * Math.PI;
    console.log(area.toFixed(2));
  } else {
    let typeOfInput = typeof(input);
    console.log(`We can not calculate the circle area, because we receive a ${typeOfInput}.`)
  }	
}
