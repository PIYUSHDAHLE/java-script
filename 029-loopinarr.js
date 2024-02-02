let arr = [3,2,5,7,8,4];

// for loop
for(let i = 0; i < arr.length;i++)
{
console.log(arr[i]);
}

//for each loop
arr.forEach((value) => {
    console.log(`Value: ${value} squre is ${value*value}`);
});

//array from string
let str ="hello world";
let arr2 =  Array.from(str);
console.log(arr2);

//for of
for(let i of arr){
    console.log(i);
}

//for in 
for  (let key in arr) {
    console.log(`Key :${key}, Value: ${arr[key]}`);
}