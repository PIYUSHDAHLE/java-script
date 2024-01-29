const marks={
    "Piyush": 80,
    "Akshay": 95,
    "Ram":70,
    "Rahul":60
}

for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log(` The marks of ${Object.keys(marks)[i]} is ${marks[Object.keys(marks)[i]]}`);
}

for(let key in marks)
{
    console.log(`The marks of ${key} are  ${marks[key]}`);
}