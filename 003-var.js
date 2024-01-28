//let is a global scope variables
var a = 10;

console.log(`the value of a : ${a}`)

{
    var a = 20;
    console.log(`the value of a : ${a}`)
}

console.log(`the value of a : ${a}`)

var a = 30;
console.log(`the value of a : ${a}`)