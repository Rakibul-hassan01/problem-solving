// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

const numbers = [1, 2, 3, 4, 5];


function minMaxSum (arr) {
    arr.sort((a , b ) => a - b);
    let minSum = 0;
    let maxSum = 0;
    let min = arr[0];
    let max = arr[arr.length - 1];
    for(let i = 0; i < arr.length; i++) {
        if(min === max) {
           if(i > 0) {
            minSum += arr[i];
            maxSum += arr[i]
           }
        }
        else {
            if(i > 0) {
                maxSum += arr[i]
            }
            if(i < arr.length - 1) {
                minSum += arr[i]
            }
        }
    }
    console.log(minSum,maxSum)

}
minMaxSum(numbers)