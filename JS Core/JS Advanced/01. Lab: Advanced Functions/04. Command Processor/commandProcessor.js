function solve(arr) {
    function manipulateString() {
        let str = '';
        return {
            append: (addition) => {str += addition},
            removeStart: (n) => {str = str.substring(n, str.length)},
            removeEnd: (n) => {str = str.substring(0, str.length - n)},
            print: () => {console.log(str)}
        };
    }

    let manipulation = manipulateString();
        for (let input of arr) {
            let [command, condition] = input.split(' ');
            manipulation[command](condition);
        }
        
}
