// To retrieve the length of an array, use its length property,

let long = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let colors = ['Blue', 'Green', 'Yellow', 'Red', 'Orange', 'Purple'];
console.log(colors);
console.log(colors.toString()); /* into a string--> Blue,Green,Yellow,Red,Orange,Purple */

let newColors = colors.toString();
console.log(typeof newColors); /* --> string*/

// Challenge: check to see if Array, flips V w/n the array, using a methd, print v of newly arranged array.
// "Reverse"
let arr = [1, 2, 3, 4, 5];

if(arr instanceof Array === true){
    let revArr = arr.reversea()
    revArr.forEach(a => console.log(a))
}