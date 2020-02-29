function solve() {
  let str = document.getElementById('str1').value;
  let style = document.getElementById('str2').value;
  let wordsArr = str.split(' ');
  let editedWordsArr = [];
  let result = document.getElementById('result');
  
  if (style === 'Camel Case') {
    for (let wordIndex in wordsArr) {
      
      if (wordIndex == 0) {
        editedWordsArr.push(wordsArr[wordIndex].toLowerCase());
      } else {
        upperCaseWord(wordsArr, editedWordsArr, wordIndex);
      }
    }
    result.textContent = editedWordsArr.join('');
  } else if (style === 'Pascal Case') {
    for (let wordIndex in wordsArr) {
    upperCaseWord(wordsArr, editedWordsArr, wordIndex);
    }
    result.textContent = editedWordsArr.join('');
  } else {
    result.textContent = 'Error!';
  }

  function upperCaseWord(arr1, arr2, index) {
    let currentWord = arr1[index].toLowerCase();
    let firstSymbol = currentWord[0];
    let symbolUpperCase = firstSymbol.toUpperCase();
    let newWord = currentWord.replace(firstSymbol, symbolUpperCase);
    arr2.push(newWord);
  }

}
