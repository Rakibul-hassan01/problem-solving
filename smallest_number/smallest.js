// Write a function that finds and prints the smallest number among three number //

function smallestNumber (n1,n2,n3) {
    const numbers = [n1,n2,n3];
    let smallest = numbers[0];
    for(let i = 0; i < 3; i++) {
        if(smallest > numbers[i]) {
            smallest = numbers[i];
        }
    }
    return smallest
}

const result = smallestNumber(-1,1,-2);
console.log(result)