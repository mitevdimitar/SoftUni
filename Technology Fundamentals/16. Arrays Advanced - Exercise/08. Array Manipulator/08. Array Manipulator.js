function arrayManipulator(arr, commands) {
    
    for (let fullCommand of commands) {
        fullCommand = fullCommand.split(' ');
        command = fullCommand.shift();
        
        if (command === 'add') {
            let [index, newEl] = fullCommand.map(Number);
            
            add(index, newEl);
        } else if (command === 'addMany') {
            let index = +fullCommand.shift();
            let numbers = fullCommand.map(Number);
           
           arr.splice(index, 0, ...numbers)
        } else if (command === 'contains') {
            let containedNum = +fullCommand[0];
            console.log(arr.indexOf(containedNum));
        } else if (command === 'remove') {
            let index = +fullCommand[0];
            arr.splice(index, 1);
        } else if (command === 'shift') {
            let shiftTimes = +fullCommand[0];
            shiftTimes = shiftTimes % arr.length;
            for (let i = 1; i <= shiftTimes; i++) {
                let removedEl = arr.shift();
                arr.push(removedEl);
            }
        } else if (command === 'sumPairs') {
            for (let i = 0; i < arr.length - 1; i ++) {
               arr[i] = arr[i] + arr[i + 1];
                arr.splice(i + 1, 1);
            }
        } else if (command === 'print') {
            console.log(arr);
        }
    }

    function add(i, el) {
        arr.splice(i, 0, el);
    }

}
