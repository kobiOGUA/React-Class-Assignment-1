// Ternary operators are like if statements but much shorter and can take up as little as one line

// Regular if statement

let x = 5;
let y = 6;

if(x==y){
    console.log(`${x} is equal to ${y}`);
}
else {
    console.log(`${x} is not equal to ${y}`);
}

// Now with ternary operators

x == y ? console.log(`${x} is equal to ${y}`) : console.log(`${x} is not equal to ${y}`);