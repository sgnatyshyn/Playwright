
// hometask 1.1

let inputValue = 339;
let result1 = Math.floor(inputValue/60);
let result2 = inputValue%60;
let result = String(result1) + ":" + String(result2)
console.log (result);
console.log(typeof result);


// hometask 1.2 data ouput throuhg alert/console

let number1 = prompt("Please enter any number!", ""); 
console.log(number1);
let number2 = prompt("Please enter any number again!", ""); 
console.log(number2);
alert(+number1 + (+number2));
alert(Math.abs(number1 - number2));
alert(number1 * number2);
alert(number1 % number2);

console.log(+number1 + (+number2));
console.log(Math.abs(number1 - number2));
console.log(number1 * number2);
console.log(number1 % number2);

// hometask 1.3
let x = 1;
let y = 2;
let res1 = String(x) + String(y);
console.log(res1); 
console.log(typeof res1); 

let x = 1;
let y = 2;
let res2 = Boolean(x) + String(y);
console.log(res2); 
console.log(typeof res2); 

let x = 1;
let y = 2;
let res3 = Boolean(x + y);
console.log(res3); 
console.log(typeof res3); 

let x = 1;
let y = 2;
let res4 = x - "z" - y;
console.log(res4); 
console.log(typeof res4); 


// hometask 1.4
// if - else
let score = 10;
if (score >= 0 && score <= 49) {
    console.log(score, "Unsatisfied!");
} else if (score >= 50 && score <= 70) {
    console.log("Satisfied!");
} else if (score >= 71 && score <= 87) {
    console.log("Good!");
} else if (score >= 88 && score <= 100) {
    console.log("Excellent!");
} else {
    console.log("Incorrect assessment!");
} 

// hometask 1.4
// switch - case
const score = 100; 
switch (true) {
    case score >= 0 && score <= 49: 
        console.log("Unsatisfied!");
        break;
    case score >= 50 && score <= 70:
        console.log("Satisfied!");
        break;
    case score >= 71 && score <= 87:
        console.log("Good!");
        break;
    case score >= 88 && score <= 100:
        console.log("Excellent!");
        break;
    default:
    console.log("Incorrect assessment!");
    }

// hometask 1.5
    for (let a=1; a <= 50; a++) {
        let result = a; 
         if (a % 2 === 0 && a % 4 === 0) {
            console.log(result, "kratne2 & 4!");
        } else if (a % 2 === 0) {
            console.log(result, "kratne2!");
        }  else {
            console.log(result);
        }
        }


