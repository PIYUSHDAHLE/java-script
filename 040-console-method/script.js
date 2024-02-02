console.log("Hello this is log method");

console.assert("this is assert");

console.warn("this is warning");

console.error("this is error");

console.info("this is info");
const obj = {
    a: "apple",
    b: "ball",
    c: "cat"
}
console.table(obj);

console.time("For loop")

for (let i = 0; i < 10; i++) {
    console.log(i+100);
}

console.timeEnd("For loop")
