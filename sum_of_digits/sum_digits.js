
function sumOfDigits (number) {
    if(number < 9) return "Please enter a number that greater then 9";


    const numberArray = number.toString().split('');
    let sum = 0;
    let result = '';
    numberArray.forEach((stringNumber,ind,arr) => {
        sum += Number(stringNumber);
        result += ` ${arr[ind]} +`
    });
    result = result.slice(1,result.length - 1) + "= " + sum;
   return result
}

const result = sumOfDigits(54894);

console.log(result)