(function solve() {
	let score = function (upvotes, downvotes) {
		let totalVotes = upvotes + downvotes;
		let rating = '';
		let upvotesPercent = (upvotes / (upvotes + downvotes)) * 100;
		let downvotesPercent = downvotes / (upvotes + downvotes);
        let balance = upvotes - downvotes;

		if (totalVotes < 10) {
			rating = 'new';
		} else if (upvotesPercent > 66) {
			rating = 'hot';
		} else if (upvotes >= downvotes && (upvotes > 100 || downvotes > 100)) {
			rating = 'controversial';
		} else if (downvotes > upvotes) {
			rating = 'unpopular';
		} else {
			rating = 'new';
        }
        
        if (totalVotes > 50) {
            let increase = Math.ceil(Math.max(upvotes, downvotes) * 0.25);
			upvotes = increase + upvotes;
			downvotes = increase + downvotes;
        }
        
		return [upvotes, downvotes, balance, rating];
    };

	let functions = {
        score
    };
    
	return function (func) {
		
		if (func === 'upvote') {
            this.upvotes++;
		} else if(func === 'downvote') {
			this.downvotes++;
		} else if (func === 'score') {
			let upvotes = this.upvotes;
			let downvotes = this.downvotes;
			let result = functions[func](upvotes, downvotes);
			return result;
		}
    };
    
})()
