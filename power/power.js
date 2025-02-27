
function powerOfGivenNumber (base,exponent) {
    let power = 1;
    for(let i = 0; i < exponent; i++) {
        power *= base;
    }
    return power;
}

const power = powerOfGivenNumber(5,5);

console.log(power)