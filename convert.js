function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' feet ' + inchRemaining + ' inch ';
    return result;
}



// const shuvoHeight = inchToFeet(75);
// // console.log(shuvoHeight)
// const shuvoHeight2 = inchToFeet2(75);
// console.log(shuvoHeight2);

function mileToKilometer(mile) {
    const kilo = mile * 1.60934;
    return kilo;
}

function kiloMeterToMiles(kilo) {
    const mile = kilo * 0.621371;
    return mile;
}