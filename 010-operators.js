//1. Arithmatic operator

let a = 10,
  b = 3;

console.log("a +b=" + (a + b)); //13
console.log("a - b = " + (a - b)); //7
console.log("a * b =" + a * b); //30
console.log("a / b =" + a / b); //3.33

//remainder
console.log("a % b =" + a % b); //1

//power
console.log("a ** b : ",a**b);//1000

//post fix  and pre-fix increment operators
let x=10;
console.log("x++ : ", x++);//postfix
console.log("x : ", x);
console.log("++x : ", ++x);//prefix

//post fix  and pre-fix decrement operators
let y=20;
console.log("y-- : ", y--);//postfix
console.log("y : ", y);
console.log("--y : ", --y);//prefix

//2. Assignment operators

let h = 10;

h+=5;
console.log(`value of h : ${h}`);

//3. Comprassion operators
//<, >, <=, >=,  == , ===, !=, !==
let s=50 , g="50";

console.log(s==g); //compare only values
console.log(s!==g);
console.log(s===g); //compare values and data type
console.log(s!==g);

//4. Logical operators

let aa=10, bb =20;
console.log("Logical operators ")
console.log(aa<bb && aa!=bb);
console.log(aa<bb || aa!=bb);
console.log(!false);

