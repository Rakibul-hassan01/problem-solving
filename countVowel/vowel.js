




function findVowels (string) {
    const voewls = ['a','e','i','o','u'];
    const vowelCount = [];
    for(let i = 0; i < string.length; i++) {
       console.log(voewls.includes(string[i]))
       if(voewls.includes(string[i])) {
        vowelCount.push(string[i])
       }
    }
    return vowelCount.length;
}

const result = findVowels("word");
console.log(result)