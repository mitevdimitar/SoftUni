function solve(steps, meters, speed) {
    let metersInSecond = speed * 1000 / 3600;
    let metersWalked = steps * meters;
    let addMinutes = Math.floor(steps * meters / 500);
    let totalSeconds = (metersWalked / metersInSecond) + (addMinutes * 60);

    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60); 
    let seconds = Math.round(totalSeconds % 60);
   
    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    console.log(hours + ':' + minutes + ':' + seconds);
}
