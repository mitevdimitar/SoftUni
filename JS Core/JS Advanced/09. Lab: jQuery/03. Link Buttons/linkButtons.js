function attachEvents() {
	let a = $('a');
	let linkArr = $('a').toArray();
	a.on('click', function() {
		for (let link of linkArr) {
			link.classList.remove( "selected" );
		}
		$(this).addClass( "selected" );
	})
}
