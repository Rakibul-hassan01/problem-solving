

function checkPalindromeWord (word) {
    let palindromWrod = word.split('').reverse().join("");
    if(palindromWrod === word) {
        return `${word} : is palindrome word`
    }else {
        return `${word} : is not palindrome word`
    }
}

const isPalindrome = checkPalindromeWord("catch");
console.log(isPalindrome)