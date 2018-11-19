function login(args) {
	let username = args[0];
	let pass = "";
	for (let i = username.length - 1; i >= 0; i--) {
		pass += username[i];
	}

for (let i = 1; i <= 4; i++) {
	if (args[i] === pass) {
			console.log(`User ${username} logged in.`);
			break;
	} else {
		if (i === 4) {
			console.log(`User ${username} blocked!`);

		} else {
			console.log(`Incorrect password. Try again.`);
		}
}
	}
}
