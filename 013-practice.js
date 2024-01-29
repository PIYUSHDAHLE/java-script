const prompt = require ('prompt-sync')();

let age = prompt("Enter the age of person : ");
age  = Number.parseInt(age);  //converting input to integer

if  (age <= 20 && age  >=10) {
    console.log ("The person age lies between  10 and 20");
}else{    
    console.log ("The person age not lies between  10 and 20");
}