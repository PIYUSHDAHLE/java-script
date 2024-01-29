const prompt= require ('prompt-sync')();

let n= (prompt("Enter a number: "));
n = Number.parseInt(n);  //converts user input to integer.

if( n%2==0 && n%3==0 )
{
console.log("The number is divisible by 2 and 3")
}else if(n%2==0)
{
    console.log("The number is divisible by 2 ")
}
else if(n%3==0)
{
    console.log("The number is divisible by 3 ")
}
else {    
    console.log("The number is not divisible by 2 and 3 ")
}