function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}


const isLeap = isLeapYear(2043);
// console.log(isLeap);

function isLeapYear2(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    else if (year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const isLeap2 = isLeapYear2(1900);
const isLeap3 = isLeapYear2(2100);
const isLeap4 = isLeapYear2(2024);
const isLeap5 = isLeapYear2(2052);
console.log(isLeap2, isLeap3, isLeap4, isLeap5)