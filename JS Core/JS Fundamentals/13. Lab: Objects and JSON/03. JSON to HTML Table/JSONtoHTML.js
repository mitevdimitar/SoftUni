function solve(str) {
	let objArr = JSON.parse(str);
	let headingObj = objArr[0];
	let headingRow = `  <tr>`;
	Object.keys(headingObj).forEach(headingKey => {
		headingRow += `<th>${headingKey}</th>`;
	});
	headingRow += `</tr>`;
	console.log(`<table>`);
	console.log(headingRow);
	objArr.forEach(obj => {
		let currentRow = `  <tr>`;
		Object.keys(obj).forEach(key => {
 			let value = obj[key];
			let escapedValue = escapeHtml(value.toString());
  			currentRow += `<td>${escapedValue}</td>`;
			});
		currentRow += `</tr>`;
		console.log(currentRow);
	});
	console.log(`</table>`);
	
function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#39;");
 }

}
