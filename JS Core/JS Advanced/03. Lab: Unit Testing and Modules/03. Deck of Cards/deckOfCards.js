function printDeckOfCards(cards) {
	let valid =  true;
	let validCards = [];
	for (let card of cards) {
		let cardInfo = card.split('');
		let suit = cardInfo.pop();
		let face = cardInfo.join('');
		try {
 			validCards.push(makeCard(face, suit));
		}
		catch(err) {
  			console.log(err.message);
			valid = false;
			break;
		}
	}
	if (valid) {
		console.log(validCards.join(' '));
	}
	function makeCard(face, suit) {
	const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
	const suits = {
		S: '\u2660',
		H: '\u2665',
		D: '\u2666',
		C: '\u2663'
	}
	if (!faces.includes(face) || !suits[suit]) {
		throw new Error(`Invalid card: ${face}${suit}`);
	}
	
	let card = {
		face,
		suit: suits[suit],
		toString: function () {
			return this.face + this.suit;
		}	
	}
	return card;
	}

}
