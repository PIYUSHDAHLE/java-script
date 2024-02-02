//write an code which mutiple array number and answer in single value

let arr = [1,2,3,4,5];

let a = arr.reduce( (v1,v2) => {return v1*v2; } );

console.log(a);