

function getAvarage(numbers) {
   if(!Array.isArray(numbers)) return "Please enter a number of array";
   const length = numbers.length;
   let sumOfNumbers = 0;
   for(let i = 0; i < length; i++) {
    sumOfNumbers += numbers[i]
   }
   const avarage = sumOfNumbers / length;
   return Number(avarage.toFixed(2));
}

const result = getAvarage([20,20,30,40,60,90]);

console.log(result)