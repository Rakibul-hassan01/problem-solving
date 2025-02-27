

function checkLeapYear(year) {
    if(year < 0 || typeof year === !"number" || year === undefined) {
        return "Please Enter A Valid Number";
    }
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is leap year`;
    }
    else {
        return `${year} is not leap year`;
    }
}

const leapYear = checkLeapYear(1862);

console.log(leapYear)

