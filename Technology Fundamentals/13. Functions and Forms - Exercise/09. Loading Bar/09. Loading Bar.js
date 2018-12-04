function solve(num) {
	let repeatPercent = 0;
	let repeatPoint = 0;
	if (num / 10 < 10) {
		repeatPercent = num / 10;
		repeatPoint = 10 - num / 10;
		loadingScale(repeatPercent, repeatPoint);
		console.log('Still loading...');
	} else if (num / 10 === 10) {
		repeatPercent = 10;
		console.log('100% Complete!');
		console.log('[' + '%'.repeat(repeatPercent) + ']');
  }
  function loadingScale(repeatPercent, repeatPoint) {
	  console.log(num + '% ' + '[' + '%'.repeat(repeatPercent) + '.'.repeat(repeatPoint) + ']');
  }
}
