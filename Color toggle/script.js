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



getWhiteBg.addEventListener("click", function () {
    getBackground.classList.toggle("white-background");
    toggleSide();
})

getRedBg.addEventListener("click", function () {
    getBackground.classList.toggle("red-background");
    toggleSide();

})

getOrangeBg.addEventListener("click", function () {
    getBackground.classList.toggle("orange-background");
    toggleSide();


})

getPurpleBg.addEventListener("click", function () {
    getBackground.classList.toggle("purple-background");
    toggleSide();

})

getGreenBg.addEventListener("click", function () {
    getBackground.classList.toggle("green-background");
    toggleSide();

})

