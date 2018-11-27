function solve(elements) {
    elements = elements.map(Number);
    let lastElement = elements.length - 1;
    let sum = elements[0] + elements[lastElement];
    console.log(sum);
}
