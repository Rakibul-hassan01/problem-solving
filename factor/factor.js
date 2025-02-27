

function findFactor(number) {
    if(number < 0) return "Please enter a valid number";
    const factorsOfNumber = [];
    for(let i = 1; i <= number; i++) {
        if(number % i === 0) {
            factorsOfNumber.push(i)
        }
    }
    return factorsOfNumber;
}

const factor = findFactor(8);

console.log(factor)