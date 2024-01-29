const prompt= require('prompt-sync')();

let a = prompt("Enter the 1st number : ");
let b = prompt("Enter the 2nd number : ");

console.log(`type of a : ${typeof a} and type of b : ${typeof b}`);
a = Number.parseInt(a);
b = Number.parseInt(b);

console.log(`After that, type of a : ${typeof a} and type of b : ${typeof b}`);

if(a<b){
    console.log(`${a} is smaller than ${b}`);
}else{    
    console.log(`${a} is bigger than ${b}`);
}
