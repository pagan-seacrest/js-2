"use strict";

let num, MAX_NUMBER;
 
do {
    num = prompt("Enter your number");
} while (num === "" || isNaN(+num) || num === null);

num % 5 != 0 ? console.log("Sorry, no numbers") : false;
num % 5 == 0 ? MAX_NUMBER = num : false;

while (num % 5 == 0) {
    num = num / 5;
}

for (let i = 0; i <= MAX_NUMBER; i = i + 5) {
    console.log(i);
}
