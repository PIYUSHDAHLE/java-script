// This is a High Order Array Method 

//Map is use to create the new array  with modified elements of existing array.

let arr = [12,33,45];

let a = arr.map((value,index,array)=>{ console.log(value,index,array); return  value*2});
console.log(a);

//Output:
//[24, 66, 90]