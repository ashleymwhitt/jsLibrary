//********************** */ FOR OF LOOPS***********************************

// creates a loop iterating over iterable objects, including: built-in String, Array, Array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. Onjects are not iterable.

var student = {
    name: "Peter",
    awesome: true,
    degree: "JS",
    week: 1
};

for (item of student){
    console.log(item);
}

let catArray = ["tabby", "british shorthair", "burmeese", "main coon", "rag doll"];

for(cat of catArray){
    console.log(cat, 'says meow')
}

// Iterating over an Array
let iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}

//*Iterating over a string
let iterable = 'ashley';

for (let value of iterable) {
  console.log(value);
}