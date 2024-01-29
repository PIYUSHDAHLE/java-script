const prompt= require ('prompt-sync')();

let num = Number.parseInt(prompt("Enter the table number : "));
let i=1;

do
{
 console.log(`${num} * ${i} = ${num*i}`);
 i++;
}while(i<=10)