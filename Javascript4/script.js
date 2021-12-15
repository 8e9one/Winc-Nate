let i = 0;
for (i = 0; i < 5; i++) {

    let name = prompt("Welcome! What is your name?");
    console.log("Hey " + name);

    function compRandom() {
        return Math.floor(Math.random() * 26);
    }


    function compare() {
        let digitInput = prompt("Enter a number between 0 and 25 to start guessing...");

        if (digitInput > 25) {
            return "Please enter a number below 25.";
        } else {
            console.log("You chose " + digitInput);
        }


        console.log("The computer chose " + compRandom());


        if (digitInput == compRandom()) {
            console.log("Congratulations, you have won the game! " + name)
        } else {
            console.log("Unfortunately, that is not correct! " + name + ", you didnt win.")

        }


    }
    console.log(compare());
    console.log("try number " + `${i + 1}`);
    if (i == 4) {
        console.log("Bye " + name + ", see you!");
    } else {
        console.log("wanna try again?")
    }
}

