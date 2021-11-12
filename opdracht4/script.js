let age = 17;
//Part 1
if (age >= 18 && age <= 25) {
    console.log("You get 50% off!")
} else {
    console.log("Sorry, you dont qualify for the 50% discount.")
}
//Part 2
const firstName = "Sarah";

if (firstName == "Bram" || firstName == "Sarah") {
    console.log("Yay, you get a free beer.")
} else {
    console.log("Sorry, no free beer for you.")
}
//Part 3 was a bit confused with 2 arguments greater than 50 so made one less than. Not sure if its correct.
const totalAmount = 40;

if (totalAmount < 50) {
    console.log("You get free (veggie) bitterballen.")
} else if (totalAmount > 50 && totalAmount < 100) {
    console.log("You get a free portion of nachos.")
} else if (totalAmount > 100) {
    console.log("You get a free bottle of champagne.")
}