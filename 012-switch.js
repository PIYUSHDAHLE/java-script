const prompt= require ('prompt-sync')();

let  n1 = prompt("Enter the first number : ");
let  n2 = prompt("Enter the second number : ");
let op = prompt("Enter the operator (+, -, *, /) : ")

n1=Number.parseInt(n1);
n2=Number.parseInt(n2);

switch (op) {
    case "+":
        console.log(`${n1} + ${n2} = ${n1+n2}`);
        break;
    case "-":
        console.log(`${n1} - ${n2} = ${n1-n2}`);
        break;
    case "*":
        console.log(`${n1} * ${n2} = ${n1*n2}`);
        break;
    case "/":
        console.log(`${n1} / ${n2} = ${n1/n2}`);
        break;

    default:
        console.log("Invalid Operator");
        break;
}
