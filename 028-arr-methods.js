let arr = [11, 22, 33, 44, 55];

console.log(arr);
console.log(arr.toString()); //convert arr to str

console.log(arr.join(" || "), typeof arr.join(" || ")); //join use  for convert array to string with separator
console.log(arr, typeof arr);

console.log(arr.pop()); //its remove the  last element  of array and return it
console.log(arr);

console.log(arr.push(77)); // it is used add elements  at the end of the array and return new length of array
console.log(arr);

console.log(arr.shift()); // it is used remove elements  from the begining of the array
console.log(arr);

console.log(arr.unshift(99)); // it is used add elements  from the begining of the array and return new length of array
console.log(arr);

delete arr[2];//it is an operator
delete arr[3];
console.log(arr);

arr2 = [11,12,13,546,24,2,1,8,44]
arr3 =[444,555,666]

console.log(arr.concat(arr2,arr3)) //it is use to merge the array

console.log(arr2.sort()); //it is sort alphabetically

const compare =(a,b)=>{
    return b-a;
}

const compare2 =(a,b)=>{
    return a-b;
}

console.log(arr2.sort(compare)); //it is sort in descending order
console.log(arr2.sort(compare2)); //it is sort in increasing order

let arr4 =[10,20,30,40,50,60];

arr4.splice(2,3,100,200)//(psoition number ,no. of element to remove, element to be added)
console.log(arr4);

let arr5 =[10,20,30,40,50,60];
console.log(arr5);
console.log('slice(1,3) : ',arr5.slice(1,3))
console.log("slice(2) : ",arr5.slice(2))  //index no. start from 0,1,2,3,....

arr5.reverse();
console.log(arr5);