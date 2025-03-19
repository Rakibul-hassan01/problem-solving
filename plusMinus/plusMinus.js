// Given an array of integers, calculate the ratios of its elements that are , , and . Print the decimal value of each fraction on a new line with 6 places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

const realNumbers = [-4, 3, -9, 0, 4, 1]

function plusMinus (arr) {
    const numbers = {
        positive : 0,
        zero : 0,
        negative : 0
    }

    let negativeNumbersRatio;
    let positiveNumbersRatio;
    let zeroNumbersRatio;

    const length = arr.length;
    arr.forEach(n => {
        if(n > 0) {
            numbers.positive++;
        }
        else if (n === 0) {
             numbers.zero++;
        }else {
            numbers.negative++
        }
    })
    positiveNumbersRatio = numbers.positive / length;
    negativeNumbersRatio = numbers.negative / length;
    zeroNumbersRatio = numbers.zero / length;

    return [Number(positiveNumbersRatio.toFixed(6)),Number(negativeNumbersRatio.toFixed(6)),Number(zeroNumbersRatio.toFixed(6))];
    
}

const result = plusMinus(realNumbers);

console.log(result)