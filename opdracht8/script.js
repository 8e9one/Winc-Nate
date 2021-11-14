//Checking if a number is big
let checkNumber = function (number) {
    let result;
    if (number > 100) {
        result = "The number is greater than 100 (" + inputNumber + ")"
    } else if (number < 100) {
        result = "The number is less than 100 (" + inputNumber + ")"
    } else {
        result = "The number is 100"

    }
    return result;
}


let inputNumber = 101;
checkNumber(inputNumber);
console.log(checkNumber(inputNumber));




// Bouncer at a club
const entranceReq = function (currentPatron, agePatron) {
    let result;
    if (currentPatron > 100) {
        result = "Brenda the Boucer Bot: It's too busy now, come back later."
    } else if (agePatron < 18) {
        result = "Brenda the Boucer Bot: This club is for adults."

    } else {
        result = "Brenda the Boucer Bot: Come in."
    }
    return result;

}

let clubcurrent = 10;
let age = 25;

entranceReq(clubcurrent, age);
console.log(entranceReq(clubcurrent, age));

//Calculating the average
const averageNumber = function (num1, num2, num3, num4, num5) {
    let sumNum = num1 + num2 + num3 + num4 + num5;
    let avgNum = sumNum / 5;
    return avgNum;
}

let number1 = 1;
let number2 = 2;
let number3 = 3;
let number4 = 4;
let number5 = 25;

averageNumber(number1, number2, number3, number4, number5);
console.log("The average of the five numbers is " + averageNumber(number1, number2, number3, number4, number5));