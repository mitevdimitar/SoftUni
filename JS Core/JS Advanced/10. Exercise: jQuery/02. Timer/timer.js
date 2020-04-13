function timer() {
   let seconds = $('#seconds');
   let minutes = $('#minutes');
   let hours = $('#hours');
   let startButton = $('#start-timer');
   let stopButton = $('#stop-timer');
   let timer;

   startButton.on('click', startTimer);
   stopButton.on('click', stopTimer);

   function startTimer() {
      timer = setInterval(addSeconds, 1000);
      //console.log(currentSeconds);
   }

   function stopTimer() {
      clearInterval(timer);
   }

   function addSeconds() {
      let currentSeconds = seconds.text();
      if (currentSeconds < 59) {
         seconds.text(formatter(+currentSeconds + 1));
      } else {
         currentSeconds = '00';
         seconds.text(currentSeconds);
         let currentMinutes = minutes.text();
         if (currentMinutes < 59) {
            minutes.text(formatter(+currentMinutes + 1));
         } else {
            currentMinutes = '00';
            minutes.text(currentMinutes);
            let currentHours = hours.text();
            hours.text(formatter(+currentHours + 1));
         }
      }
   }

   function formatter(time) {
      return ('0' + time).slice(-2);
   }
   
}
