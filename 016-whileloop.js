const prompt= require ('prompt-sync')();

let num = Number.parseInt(prompt("Enter the table number : "));
let i=1;

while(i<=10)
{
 console.log(`${num} * ${i} = ${num*i}`);
 i++;
}