function solve(arr) {
	let users = new Map();
	for (let user of arr) {
		let [company, id] = user.split(' -> ');
		if (users.has(company)) {
            let previousId = users.get(company);
            let previousIdArr = previousId.split(', ')
            
            if (!previousIdArr.includes(id)) {
                id = `${previousId}, ${ id}`;
            } else {
                id = previousId;
            }
		}
		users.set(company, id);
	}
	let sorted = [...users].sort((a, b) => a[0].localeCompare(b[0]));
	for (let [company, id] of sorted) {
		console.log(company);
        let idArr = id.split(', ');
	for (let currentId of idArr) {
		console.log(`-- ${currentId}`);
	}
	
	}
}
