let num = Number.parseInt(prompt("Enter the number to visit website"));

if(num>=4){
    location.href = "https://www.google.com/";
}else{
    document.write("<h1>Plzz Enter a number greater than or equal to 4</h1>");
}