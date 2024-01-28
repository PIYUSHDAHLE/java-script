//let is a block scope variables

let b = 10;

console.log(`the value of b : ${b}`)

{
    let b = 20;
    console.log(`the value of b : ${b}`)
}
//let b = 40; redeclear not possible
console.log(`the value of b : ${b}`)