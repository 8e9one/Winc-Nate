let toggleSideStatus = false;

const getBackground = document.querySelector("#bodyBg")
const getWhiteBg = document.querySelector("#whiteBg")
const getRedBg = document.querySelector("#redBg")
const getOrangeBg = document.querySelector("#orangeBg")
const getPurpleBg = document.querySelector("#purpleBg")
const getGreenBg = document.querySelector("#greenBg")


let toggleSide = function () {
    let getSide = document.querySelector(".list-color-choices");
    let getSideUl = document.querySelector(".list-color-choices ul");


    if (toggleSideStatus === false) {
        getSideUl.style.visibility = "visible";
        getSide.style.width = "300px";


        toggleSideStatus = true

    } else if (toggleSideStatus === true) {

        getSide.style.width = "100px";


        getSideUl.style.visibility = "hidden";
        toggleSideStatus = false

    }

}
// Option one manually fill in all the options
const classL = ["white-background", "red-background", "orange-background", "purple-background", "green-background"];
//option two 
const classL2 = document.getElementById("bodyBg").classList

getWhiteBg.addEventListener("click", function () {
    // getBackground.classList.remove("white-background", "red-background", "orange-background", "purple-background", "green-background") was also thinking maybe to make an array of all the options on the classlist and write a for loop to remove. but I ended up choosing to make a const with all the options this felt easier.
    getBackground.classList.remove(...classL);
    getBackground.classList.add("white-background");
    toggleSide();
})

getRedBg.addEventListener("click", function () {
    getBackground.classList.remove(classL2);
    getBackground.classList.add("red-background");
    toggleSide();

})

getOrangeBg.addEventListener("click", function () {
    getBackground.classList.remove(classL2);
    getBackground.classList.add("orange-background");
    toggleSide();


})

getPurpleBg.addEventListener("click", function () {
    getBackground.classList.remove(classL2);
    getBackground.classList.add("purple-background");
    toggleSide();

})

getGreenBg.addEventListener("click", function () {
    getBackground.classList.remove(classL2);
    getBackground.classList.add("green-background");
    toggleSide();

})
