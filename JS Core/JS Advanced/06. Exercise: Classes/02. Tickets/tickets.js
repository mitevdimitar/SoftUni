function solve(flights, sortCriteria) {
	class Ticket {
		constructor(destination, price, status) {
			this.destination = destination;
			this.price = price;
			this.status = status;
		}
	}
	let tickets = [];
	for (let flight of flights) {
		let [city, price, status] = flight.split('|');
		tickets.push(new Ticket(city, parseFloat(price), status));
	}
	tickets.sort((a, b) => {
	if(sortCriteria === 'price') {
		return a[sortCriteria] - b[sortCriteria];
	} else {
		return a[sortCriteria].localeCompare(b[sortCriteria]);
	}
	
	});
	return tickets;
}
