// Write a function that tells if a given number is even or odd  //

function evenOddNumberChecker(number) {
    return  number % 2 === 0 ? `${number} is even number` : `${number} is odd number`
}
const result = evenOddNumberChecker(-2);
console.log(result)