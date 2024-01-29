const prompt= require ('prompt-sync')();

let  n1 = Number.parseInt(prompt("Enter first number : "));
let  n2 = Number.parseInt(prompt("Enter first number : "));
let  n3 = Number.parseInt(prompt("Enter first number : "));

//normal function
function myfun(a,b,c) {
   return a+b+c;
}

//arrow function
const mulNumbers = (x,y)=> x*y ;

console.log(`The multiplcation of ${n1} and ${n3} is: ${mulNumbers(n1,n3)}`);
console.log(`The multiplcation of ${n1} and ${n2} is: ${mulNumbers(n1,n2)}`);
console.log(`The multiplcation of ${n2} and ${n3} is: ${mulNumbers(n2,n3)}`);

console.log(`The sum of ${n1}, ${n2} and ${n3} is ${myfun(n1,n2,n3)}`);