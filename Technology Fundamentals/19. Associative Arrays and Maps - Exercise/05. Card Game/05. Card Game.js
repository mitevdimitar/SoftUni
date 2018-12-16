function cardGame(arr) {
    
    let cardPlayers = new Map();

    for (let cardPlayer of arr) {
        let [name, cards] = cardPlayer.split(': ');
        let cardsArr = cards.split(', ');

        if (cardPlayers.has(name)) {
            let currentCards = cardPlayers.get(name);
            cardsArr = currentCards.concat(cardsArr)
        }

        cardPlayers.set(name, cardsArr);
    }

    let matrixOfPlayers = [...cardPlayers];

    for (let playerArr of matrixOfPlayers) {
        let player = playerArr[0];
        let cards = playerArr[1];
        let setOfCards = new Set();
        for (let card of cards) {
            setOfCards.add(card);
        }
        let filteredCards = Array.from(setOfCards);
        let totalSum = sumOfCards(filteredCards);
        console.log(`${player}: ${totalSum}`)
    }
    
function sumOfCards(arrOfCards) {
let totalSum = 0;
for (let card of arrOfCards) {
	let currentSum = calculate(card);
	totalSum += currentSum;
}

function calculate(a) {
    let type = 0;
    let power = findValue(a);
    let i = 0;
    if (a.length === 3) {
        i = 2;
    } else {
       i = 1;
    }
    if (a[i] === 'S') {
        type = 4;
    } else if (a[i] === 'H') {
        type = 3;
    } else if (a[i] === 'D') {
        type = 2;
    } else if (a[i] === 'C') {
        type = 1;
    }
	
    let sum = type * power;
	return sum;
}

function findValue(str) {
    let x;
    if (str.length === 3) {
        x = 10;
    } else {
        if (!isNaN(str[0])) {
            x = +str[0];
        } else if (str[0] === 'J') {
            x = 11;
        } else if (str[0] === 'Q') {
            x = 12;
        } else if (str[0] === 'K') {
            x = 13;
        } else if (str[0] === 'A') {
            x = 14;
        } 
    }
	return x;
}
return totalSum;
}

}
