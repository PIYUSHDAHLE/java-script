
let ans ="My name is x";
let word ='x';
console.log(ans.includes(word))//true
console.log(`The word ${word} ${ans.includes(word) ? 'is':'is not'} in the sentance`)




const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// Expected output: true

console.log(str1.startsWith('Sat', 3));
// Expected output: false




const strs1 = 'Cats are the best!';

console.log(strs1.endsWith('best!'));
// Expected output: true

console.log(strs1.endsWith('best', 17));
// Expected output: true

const strs2 = 'Is this a question?';

console.log(strs2.endsWith('question'));
// Expected output: false

console.log(strs2.endsWith('question',18));
// Expected output: true