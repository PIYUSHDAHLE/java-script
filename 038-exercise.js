
const prompt = require ('prompt-sync')();

let n, chance=0;

let total;

x = Math.floor(Math.random()*4); // 0-3

// console.log(x);

do{
    n = Number.parseInt(prompt('Enter the number : ')); 
    chance++;
}while(n!=x);

total = 100-chance;

console.log(`Total number  of attempts taken is ${chance}`);
console.log(`Your Score is ${total}`);









