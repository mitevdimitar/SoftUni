function attachEvents() {
	$('#submit').on('click', submitData);
	$('#refresh').on('click', retreiveMesseges);
	let url = 'https://messenger-67d49.firebaseio.com/messenger.json';
	
	function submitData() {
		let message = {
 		author: $('#author').val(),
 		content: $('#content').val(),
 		timestamp: Date.now()
		}
		$.ajax({
			method: 'POST',
			url,
			data: JSON.stringify(message),
			success: (data) => console.log(data),
			error: (err) => console.log(err)
		})
	}
	
	function retreiveMesseges() {
		$.ajax({
			method: 'GET',
			url,
			success: showMess
			
		});
	}
	
	function showMess(data) {
		let messages = '';
		for (let message of Object.values(data)) {
			messages += `${message.author}: ${message.content}\n`
		}
		$('#messages').text(messages);
	}

}