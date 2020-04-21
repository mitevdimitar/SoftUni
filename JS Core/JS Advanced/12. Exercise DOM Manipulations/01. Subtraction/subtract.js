function subtract() {
    let $firstNum = Number($('#firstNumber').val());
    let $secondNum = Number($('#secondNumber').val());
    let result = $firstNum - $secondNum;
    let resultDiv = $('#result');
    resultDiv.text(result);
}