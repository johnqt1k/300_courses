const str1 = "Hello world";
const str2 = "Hell";

console.log(`The word "${str2}" ${str1.includes(str2) ? 'is' : 'is not'} in the sentence`);
console.log(str1.startsWith('Hell'));