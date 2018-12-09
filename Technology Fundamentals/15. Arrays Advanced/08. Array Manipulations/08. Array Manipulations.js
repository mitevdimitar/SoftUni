function arrayManipulations(arr) {
    let manipulatedArr = arr
        .shift()
        .split(' ')
        .map(Number);
    
        for (let currentCommand of arr) {
            let [command, firstNum, secondNum] = currentCommand.split(' ');
            firstNum = Number(firstNum);
            secondNum = Number(secondNum);
            if (command == 'Add') {
                add(firstNum);
            } else if (command == 'Remove') {
                remove(firstNum);
            } else if (command == 'RemoveAt') {
                removeAt(firstNum);
            } else if (command == 'Insert') {
               insert(firstNum, secondNum);
            }
        }
        console.log(manipulatedArr.join(' '))

        function add(x) {
            manipulatedArr.push(x);
        }

        function remove(num) {
            manipulatedArr = manipulatedArr.filter(x => x !== num);
        }
        
        function removeAt(i) {
            manipulatedArr.splice(i, 1);
        }

        function insert(firstNum, secondNum) {
            manipulatedArr.splice(secondNum, 0, firstNum);
        }

}
