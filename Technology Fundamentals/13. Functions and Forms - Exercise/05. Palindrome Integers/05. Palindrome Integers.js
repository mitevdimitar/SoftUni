function isPalindrome(arr) {
	let isPalindrome = true;
	for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        currentNum = currentNum.toString();
        palindromeCheck(currentNum);
        isPalindrome ? console.log('true') : console.log('false');
        isPalindrome = true;
    }

    function palindromeCheck(x) {
        for (let j = 0; j < x.length / 2; j++) {
			let firstDigit = x[j];
			let lastDigit = x[x.length - 1 - j];
			if (firstDigit !== lastDigit) {
				isPalindrome = false;
			}
		}
    }
	
}
