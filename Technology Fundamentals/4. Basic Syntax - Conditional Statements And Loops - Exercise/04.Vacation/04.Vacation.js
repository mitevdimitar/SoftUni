function vacation(numberOfPax, type, day) {
    let price = 0;
    switch (type) {
        case "Students":
        if (day === "Friday") {
            price += numberOfPax * 8.45;
        } else if (day === "Saturday") {
            price += numberOfPax * 9.80;
        } else {
            price += numberOfPax * 10.46;
        }
        if (numberOfPax >= 30) {
            price *= 0.85;
        }
        break;
        case "Business":
        
        if (numberOfPax >= 100) {
            numberOfPax -= 10;
        }
        if (day === "Friday") {
            price += numberOfPax * 10.90;
        } else if (day === "Saturday") {
            price += numberOfPax * 15.60;
        } else {
            price += numberOfPax * 16;
        }
        break;
        case "Regular":
        if (day === "Friday") {
            price += numberOfPax * 15;
        } else if (day === "Saturday") {
            price += numberOfPax * 20;
        } else {
            price += numberOfPax * 22.50;
        }
        if (numberOfPax >= 10 && numberOfPax <= 20) {
            price *= 0.95;
        }
        break;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
