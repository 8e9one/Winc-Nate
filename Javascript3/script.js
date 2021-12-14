const colors = ['yellow', 'blue', 'red', 'orange'];

//OLD STYLE: LOOPS
let i = 0;
//length is 0,1,2,3
while (i < colors.length) {
    console.log(colors[i]);
    i++;

}

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i])
}

//NEW STYLE: ARRAY METHODS
colors.forEach(element => console.log(element));