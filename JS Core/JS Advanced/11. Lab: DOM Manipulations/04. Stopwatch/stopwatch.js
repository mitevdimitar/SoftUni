function stopwatch() {
	let $startButton = $('#startBtn');
	let $stopButton = $('#stopBtn');
	$startButton.on('click', startCounter);
	$stopButton.on('click', stopCounter);
	let timer;

	function startCounter() {
		timer = setInterval(secondsIncrease, 1000);
		$stopButton.prop('disabled', false);
		$startButton.prop('disabled', true);
		$('#time').text(`00:00`);
	}

	function stopCounter() {
		clearInterval(timer);
		$stopButton.prop('disabled', true);
		$startButton.prop('disabled', false);
	}
	
	function secondsIncrease() {
		let $time = $('#time').text();
		let [minutes, seconds] = $time.split(':');
		let totalSeconds = Number(minutes) * 60 + Number(seconds);
		totalSeconds++;
		seconds = totalSeconds % 60;
		if (seconds < 10) {
			seconds = '0' + seconds;
		}
		minutes = Math.floor(totalSeconds / 60);
		if (minutes < 10) {
			minutes = '0' + minutes;
		}
		$('#time').text(`${minutes}:${seconds}`);
	}

}
