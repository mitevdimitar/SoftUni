function solve() {

counter = 0;
let number = 0;
let output = document.getElementById('output');

let buttons = document.querySelectorAll('#operations button');
let chopButton = buttons[0];
chopButton.addEventListener('click', chop);
let diceButton = buttons[1];
diceButton.addEventListener('click', dice);
let spiceButton = buttons[2];
spiceButton.addEventListener('click', spice);
let bakeButton = buttons[3];
bakeButton.addEventListener('click', bake);
let filletButton = buttons[4];
filletButton.addEventListener('click', fillet);

function chop() {
    number = checkCounter(counter, number);
    number /= 2;
    counter++;
    result(number);
}

function dice() {
    number = checkCounter(counter, number);
    number = Math.sqrt(number);
    counter++;
    result(number);
}

function spice() {
    number = checkCounter(counter, number);
    number++;
    counter++; 
    result(number);
}

function bake() {
    number = checkCounter(counter, number);
    number *= 3;
    counter++; 
    result(number);
}

function fillet() {
    number = checkCounter(counter, number);
    number *= 0.8;
    counter++; 
    result(number);
}

function checkCounter(x, number) {
    if (x === 0) {
        let input = document.querySelector('#exercise input');
        if (input.value !== '') {
            number = input.value;
        }
        
    }
    return number;
}

function result(num) {
    output.textContent = num;
}

}
