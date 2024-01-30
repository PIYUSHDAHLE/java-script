let text = "Please give me Rs. 1000";

console.log(typeof text)

let amount = Number.parseInt(text.slice("Please give me Rs. ".length));

console.log(amount);
console.log(typeof amount);