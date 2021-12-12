//Part1 Hey Kiddo
const getAge = function (theAge) {
    if (theAge >= 18) {
        return true;
    } else {
        return false;
    }
}

const greeting = function (theAge) {
    if (getAge(theAge)) {
        return "Hello there.";
    } else {
        return "Hey kiddo.";
    }
}
//Adult
console.log(greeting(25));
//Kid
console.log(greeting(17));


//Part2 VAT exercise1 calculation
const priceIncludingVat = function (basePrice, vatPercentage) {
    const fraction = vatPercentage / 100;
    const vatFraction = 1 + fraction;
    const result = basePrice * vatFraction;
    return result;

}

const vatAmount = function (basePrice, vatPercentage) {

    const totalPrice = priceIncludingVat(basePrice, vatPercentage);
    const fraction = vatPercentage / 100;
    const vatFraction = 1 + fraction;
    const result = totalPrice - (totalPrice / vatFraction);
    return result;
}


console.log("Price including VAT is ", priceIncludingVat(100, 21), " Euros.");
console.log("VAT is ", vatAmount(100, 21), " Euros.");


//VAT exercise2
//calculate the base price and VAT amount.
//main function: take the amount including VAT and VAT percentage.
//return an array with two elements: base price and VAT amount.

const basePriceAndVat = function (priceIncludingVat, vatPercentage) {

    const totalEx2 = priceIncludingVat
    const fractionEx2 = vatPercentage / 100;
    const vatFractionEx2 = 1 + fractionEx2;
    const vat = totalEx2 - (totalEx2 / vatFractionEx2);
    const basePrice = priceIncludingVat - vat;

    return [basePrice, vat];
}

console.log(basePriceAndVat(121, 21));