let age, com;
do{
     age = Number.parseInt(prompt("Enter the age"));
    
     com = confirm("Do you wnat to enter again ?")

}while(com==true)


if(age>=18)
{
    document.write(`Your age is ${age} and You are eligible for driving`); 
}else{   
    console.error("You enter the negitive value");  
    document.write(`Your age is ${age} and You are not eligible for driving`); 
}