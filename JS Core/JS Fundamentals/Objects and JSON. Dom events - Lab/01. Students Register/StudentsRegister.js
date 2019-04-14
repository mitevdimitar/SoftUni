<script>
        document.getElementById("button").addEventListener("click", function(event){
            event.preventDefault()
        });
        function addStudents() {
            let inputArr = document.getElementById('input').value.split('\n');
            let students = inputArr.map(line => {
                let studentInfo = line.split(' ');
                return {
                    firstName : studentInfo[0],
                    secondName : studentInfo[1],
                    grade : Number(studentInfo[2])
                }
            });
            let result = ``;
            let averageGrade = students.map(student => student.grade).reduce((averageGrade, grade) => averageGrade + grade) / students.length;
            result += `Students are `;
            result += students.map(line => `${line.firstName} ${line.secondName}`).join(', ');
            result += `\n`;
            result += `Average grade: `;
            result += `${averageGrade.toFixed(2)}`;
            document.getElementById('result').value = result;
            
        }
    </script>
