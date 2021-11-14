// No arguments
const paintWallNoArgument = function () {
    console.log("The wall has been painted red");
}
paintWallNoArgument();

//Single argument
const paintWallSingleArgument = function (changeColor) {
    console.log("The wall has been painted " + changeColor);
}

let chooseColor = "orange";
paintWallSingleArgument(chooseColor);

// changeColor is not defined

/*
//Multiple Arguments
const paintWallMultiArgument = function (wallDirection, colorInput) {
    console.log("The " + wallDirection + " wall has been painted " + colorInput);

}
*/

//Multiple Arguments
const paintWallMultiArgument = function (colorInput, wallDirection) {
    console.log("The " + colorInput + " wall has been painted " + wallDirection);

}
// For the direction you have the choice of ["North", "West", "South", "East" ]
// colorChoice has to be a color.
let direction = "North";
let colorChoice = "blue"

paintWallMultiArgument(direction, colorChoice);

//In this instance the order does matters. If the two were to be switched then the sentence (string) would not make sence.

// function definition nothing just makes your code a bit confusing (direction becomes color and color becomes direction). Why bother naming it.
