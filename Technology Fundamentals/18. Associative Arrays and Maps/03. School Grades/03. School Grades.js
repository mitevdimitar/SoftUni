function schoolGrades(arr) {
    let students = new Map();
    
    for (let student of arr) {
        let tokens = student.split(' ');
        let name = tokens[0];
        let grades = tokens
            .splice(1, tokens.length)
            .map(Number);

        if (students.has(name)) {
            let previousGrades = students.get(name);
            grades =  previousGrades.concat(grades);
        }

        students.set(name, grades);
        
    }
    
    let sorted = [...students.entries()]
        .sort((a, b) => average(a[1]) - average(b[1]));

    for (let student of sorted) {
        student[1] = student[1].join(', ');
        console.log(student.join(': '));
    }
       
    
    function average(grades) {
        let sum = 0;
        for (let i = 0; i < grades.length; i++) {
            sum += grades[i];
        }
        return sum / grades.length;
    }
    
}
