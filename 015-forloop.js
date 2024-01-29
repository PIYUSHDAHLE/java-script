const prompt= require ('prompt-sync')();

let num = Number.parseInt(prompt("Enter the table number : "));

for(let i=1;i<=10;i++)
{
 console.log(`${num} * ${i} = ${num*i}`);
}