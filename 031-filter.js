// This is a High Order Array Method 
//filter an array with values that passes a test and create the new array.
let arr = [12,33,5,66,6,3,1,42];
let a = arr.filter((value)=>{return value<10;})
console.log(a);

const compare = (a,b)=>{
    return a-b;
}

a.sort(compare);

console.log(a);