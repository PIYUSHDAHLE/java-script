//Keep add the number into array into 1 until we not enter the zero number and show that array
const prompt =  require('prompt-sync')();

let arr = [];
let n;

do {    
    n =  Number.parseInt(prompt("Enter the number : "));
    arr.push(n);
}while(n!=0)

console.log(arr);
