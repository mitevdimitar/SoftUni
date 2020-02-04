function solve() {
  let string = document.getElementById('string').value;
  let result = document.getElementById('result');
  let filteredArr = [];

  for (let i of string) {
      let regex = /\s/;
      if (!filteredArr.includes(i) || regex.test(i)) {
        filteredArr.push(i);
      }
  }
  let str1 = filteredArr.join('');
  result.innerHTML = str1;

}
