function buildWall(wall) {

    wall = wall.map(Number);
    let daylyConcreteUsed = [];
    let totalExpense = 0;
    let sumOfElements = 0;
    let endOfLoop = 30 * wall.length;
        
    while (sumOfElements < endOfLoop) {
        sumOfElements = 0;
        let concretePerDay = 0;
        let dayCounter = 0;
        for (let i = 0; i < wall.length; i++) {   
            if (wall[i] < 30) {
                wall[i]++;
                dayCounter++;
            }
            sumOfElements += wall[i];
        }
        
        concretePerDay = dayCounter * 195;
        totalExpense += concretePerDay * 1900;
        daylyConcreteUsed.push(concretePerDay);
        }

        console.log(daylyConcreteUsed.join(', '));
        console.log(`${totalExpense} pesos`);
}
