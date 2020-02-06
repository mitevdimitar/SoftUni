function solve() {
    let cardRange = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', getCards);
 
    function getCards() {
        let fromm = document.getElementById('from').value;
        let to = document.getElementById('to').value;
       
        let startIndex = cardRange.indexOf(fromm);
        let endIndex = cardRange.indexOf(to);
 
        let suit = document.getElementsByTagName('select')[0];
        let valuee = suit.value;
        let suitCode = valuee.split(' ')[1];
        for (let i = startIndex; i <= endIndex; i++) {
            let cardValue = cardRange[i];
            let newDiv = document.createElement('div');
            newDiv.className = 'card';
            let p1 = document.createElement('p');
            p1.innerHTML = suitCode;
            let p2 = document.createElement('p');
            p2.innerHTML = cardValue;
            let p3 = document.createElement('p');
            p3.innerHTML = suitCode;
            newDiv.appendChild(p1);
            newDiv.appendChild(p2);
            newDiv.appendChild(p3);
           document.getElementById('cards').appendChild(newDiv);
        }      
    }  
}
