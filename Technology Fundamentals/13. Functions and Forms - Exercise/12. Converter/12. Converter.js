function solve() {
       let selectFrom = document.getElementById('from');
       let fromOption = selectFrom.options[selectFrom.selectedIndex].value;
       let selectTo = document.getElementById('to');
       let toOption = selectTo.options[selectTo.selectedIndex].value;
       let result = 0;
       let joined = `${fromOption} ${toOption}`;
       let value = Number(document.getElementById('value').value);

       let multiplier = {
            'km km': 1,
            'km m': 1000,
            'km cm': 100000,
            'km mm': 1000000,
            'm km': 0.001,
            'm m': 1,
            'm cm': 100,
            'm mm': 1000,
            'cm km': 0.00001,
            'cm m': 0.01,
            'cm cm': 1,
            'cm mm': 10,
            'mm km': 0.000001,
            'mm m': 0.001,
            'mm cm': 0.01,
            'mm mm': 1
        }
        
        document.getElementById('result').value = value * multiplier[joined];
    }
