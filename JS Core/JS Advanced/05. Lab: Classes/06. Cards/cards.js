(function() {
	let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
	let suits = {
		SPADES: '&#9824',
		HEARTS: '&#9829',
		DIAMONDS: '&#9830',
		CLUBS: '&#9827'			
		}
	function validateFace(face) {
		if (!faces.includes(face)) {
			throw new Error();
		}
	}
	function validateSuit(suit) {
		if(!Object.values(suits).some((s) => s === suit)) {
			throw new Error();
		}
	}
	class Card {
			constructor(face, suit) {
				validateFace(face);
				validateSuit(suit);
				this._face = face;
				this._suit = suit;
			}
			get face() {
				return this._face;
			}
			set face(face) {
				validateFace(face);
				this._face = face;
			}
			get suit() {
				return this._suit;
			}
			set suit(suit) {
				validateSuit(suit);
				this._suit = suit;
			}
	}
	return {	
		Card: Card,
		Suits: suits
	}
})()
