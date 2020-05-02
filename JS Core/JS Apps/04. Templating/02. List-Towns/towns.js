function attachEvents() {
		$('#btnLoadTowns').on('click', loadTowns);
	}

	function loadTowns() {
		let townsArr = $('#towns').val().split(', ');
		let towns = townsArr.map(town => {
  			let obj = {};
   			obj['townName'] = town;
  			return obj
		});
		let context = {towns}
		let result = $("#towns-template").html();
		let template = Handlebars.compile(result);
		let renderedHTML = template(context);
		$('#root').append(renderedHTML);
	}