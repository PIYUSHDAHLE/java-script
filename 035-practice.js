//filter for the given arr which element is divide by 10 and sort into increse order
let arr = [12,34,70,60,23,10,20,80,11];

let a = arr.filter((val)=>{return val%10==0;})
console.log(arr);
console.log("filter array :",a);

const compare = (x,y) =>{
    return x-y;
}
a.sort(compare);
console.log("Sorted array : ",a);

