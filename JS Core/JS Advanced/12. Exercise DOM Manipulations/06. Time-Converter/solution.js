function attachEventsListeners() {
	let $days = $('#days');
	let $hours = $('#hours');
	let $minutes = $('#minutes');
	let $seconds = $('#seconds');
	let $daysButton = $('#daysBtn');
	$daysButton.on('click', convertDays);
	let $hoursButton = $('#hoursBtn');
	$hoursButton.on('click', convertHours);
	let $minutesButton = $('#minutesBtn');
	$minutesButton.on('click', convertMinutes);
	let $secondsButton = $('#secondsBtn');
	$secondsButton.on('click', convertSeconds);
	
	function convertDays() {
		let days = $days.val();
		$hours.val(days * 24);
		$minutes.val(days * 24 * 60);
		$seconds.val(days * 24 * 60 * 60);
	}

	function convertHours() {
		let hours = $hours.val();
		$days.val(hours / 24);
		$minutes.val(hours * 60);
		$seconds.val(hours * 60 * 60);
	}
	
	function convertMinutes() {
		let minutes = $minutes.val();
		$days.val(minutes / 60 / 24);
		$hours.val(minutes / 60);
		$seconds.val(minutes * 60);
	}
	
	function convertSeconds() {
		let seconds = $seconds.val();
		$days.val(seconds / 60 / 60 / 24);
		$hours.val(seconds / 60 / 60);
		$minutes.val(seconds / 60);
	}
}