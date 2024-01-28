//const is a block scope variables

const b = 10;

console.log(`the value of b : ${b}`)

{
    const b = 20;
    console.log(`the value of b : ${b}`)
}
// const b = 10; redeclear not possible
console.log(`the value of b : ${b}`)