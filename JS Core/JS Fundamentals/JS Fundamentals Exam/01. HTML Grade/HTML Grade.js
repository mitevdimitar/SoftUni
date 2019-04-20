function solve(examPoints, homeworkCompleted, totalHomework) {
    let maxPoints = 100;
    let examPointWeght = 90 / 400;
    let pointsFromExam = examPoints * examPointWeght;
    let homeworkWeight = 10 / totalHomework;
    let pointsFromHomework = homeworkCompleted * homeworkWeight;
    let totalPoints = pointsFromExam + pointsFromHomework;
    let grade = 3 + 2 * (totalPoints - maxPoints / 5) / (maxPoints / 2);
    if (Math.floor(grade) < 3) {
        grade = 2;
    } else if (Math.floor(grade) >= 6) {
        grade = 6;
    }
    if (examPoints === 400) {
        grade = 6;
    }
    console.log(grade.toFixed(2));
}
