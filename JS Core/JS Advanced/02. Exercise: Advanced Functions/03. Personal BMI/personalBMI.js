function solve(name, age, weight, height) {
    let personalInfo = {
        'age': age,
        'weight': weight,
        'height': height
    };
    let BMI = function (weight, height) {
        let heightIndex = (height * height) / 10000;
        return weight / heightIndex;
    };
    let bmi = BMI(weight, height);

    let statuscheck = function (bmi) {
        if (bmi < 18.5) {
            return 'underweight';
        } else if (bmi < 25) {
            return 'normal';
        } else if (bmi < 30) {
            return 'overweight';
        } else {
            return 'obese';
        }
    }

    let status = statuscheck(bmi);
    let roundedBMI = Math.round(BMI(personalInfo.weight, personalInfo.height));

    function Person(name, personalInfo, BMI, status) {
        this.name = name;
        this.personalInfo = personalInfo;
        this.BMI = BMI;
        this.status = status;
    }

    let newPerson = new Person(name, personalInfo, roundedBMI, status);
    if (status === 'obese') {
        newPerson.recommendation = 'admission required';
    }
    return newPerson;
}
