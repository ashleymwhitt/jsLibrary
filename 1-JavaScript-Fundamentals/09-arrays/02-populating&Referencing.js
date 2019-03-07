/*
Arrays --> An array is a numerically indexed map of values. Starting out, it's easier to just say it's a great way to collect a bunch of values together. They allow us to collect things like names, usernames, product names, prices, etc.

************
Arrays are containers that hold lists of items

let list =  [  'item1',   'item2',    'item3'];
    (1)    (2)   (3)

1- name of the Array, or list; 
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas

Denoted by []
Has values ('blue', 'green', 'yellow'), separated with commas

console.log(typeof list);

Why is that?  The definition of an object is a container that can hold multiple datatypes.  Arrays fit under that category.

What is an array?
  Has [] brackets
  Can hold multiple datatypes
  Great for listing 
An array is created like a variable.
It can be named anything. 
We use square brackets [] to collect values.
We separate items with commas in the brackets.
We can have a collection of one type(6 strings that are zombie movies).
The index of an array starts at 0
strings are what are inside of the ''
*/

let list = ['item1', 'item2', 'item3'];
console.log(typeof list); /* will find the data type */

let list2 = ['orange', 'banana', 'oreos'];
console.log(list2[1]) /* will print banana */

let students = ["Jacqueline", "Sophia", "Autumn", 23, true, ['Ryan', 'Bob', 'Scott']];
// console.log(typeof students);
// console.log(students instanceof Array); 
// console.log(students[2]); /*--> "Autumn"*/
// console.log(students[5]) /* --> [ 'Ryan', 'Bob', 'Scott' ] */
// console.log(students[5][1]) /* --> "bob" */
console.log(students[5][0][2])


let students = ['Tony', 'Marshall', 'Rhys', 
'Ray', 23, true, ['Ryan', 'Iesha',['Randy','Trevor'], 'Amira']];
console.log(typeof students);
console.log(students instanceof Array);
console.log(students[2]);
console.log(students[6][1]);
console.log(students[6][2]); /* [ 'Randy', 'Trevor' ] */
console.log(students[6][2][1]); /* Trevor*/


let myFriend = students[6][1];
let myFriend2 = students[6][3]; /* [Randy, Trevor] count as 1 position.
console.log(`Hello ${myFriend} and ${myFriend2}, you look nice today.`) */

let food = ['Pecan pie', 'shrimp', 'Quesadilla', 'cheese cake', 'hotdog']

// for(let item in food){
//     // console.log(food)
//     // console.log(food[1])
//     console.log(food[item]) 
// }

let food = ['Pecan pie', 'shrimp', 'Quesadilla', 'cheese cake', 'hotdog']
// How to add pizza to your list
let pizza = 'Pizza';

// food.push(pizza);

// console.log(food)


let food = ['Pecan pie', 'shrimp', 'Quesadilla', 'cheese cake', 'hotdog']
// How to subtract shrimp from list
// food.splice(1, 1)
// console.log(food) /* --> [ 'Pecan pie', 'Quesadilla', 'cheese cake', 'hotdog' ]*/

food.splice(1, 1, 'banana') /* where do you want to start? 1, how many do I want to delete? 1, and what do you want to add? 'banana' --> [ 'Pecan pie', 'banana', 'Quesadilla', 'cheese cake', 'hotdog' ] */
console.log(food)

.push /* adds items the the end of an Array */
.splice /* Start, how many, what to add? */


let food = ['Pecan pie', 'shrimp', 'Quesadilla', 'cheese cake', 'hotdog']

// food.splice(2,0,'sweet potatoes') /* this wil put SP into the new slot #2 & bump everything down an index spot in the list. */
// console.log(food)

food.splice(4, 4, "Deep Fried Oreos") /*replace HD w/ Oreos */
console.log(food)

// food.splice(4, 0, "Deep freid Oreos") /* add oreos & bump HD down a space)
// console.log(food)

/* .POP --> removes something to remove LAST item in array. */
// pop() paramaters are ALWAYS empty, b/c its ALWAYS the last item so nothing else needs to be Added.

let food = ['Pecan pie', 'shrimp', 'Quesadilla', 'cheese cake', 'hotdog']
food.pop()
console.log(food)

// methods are built in functions in JS.


// .FOREACH --> FOR EACH ITEM IN THIS ARRAY I WANT YOU TO DO THIS FX. It's like a loop & a FX all-in-1. same as for-of & for-in

let food = ['Pecan pie', 'shrimp', 'Quesadilla', 'cheese cake', 'hotdog']

// food.forEach(f => {
//     console.log(f);
// })                   /* "f" is arbitrary, it can be anything. A b c x y z */

food.forEach((food,number) => {
    console.log(food);
    console.log(number);
})  /* can get value & item i.e.(food,number). 1st spot is always the value "i.e. pecan" 2nd will always get index "ie 0". You can call them whatever you want (food or number)

// CHALLENGE: CREATE LIST OF MOVIES (ARRAY), USE .FOREACH() TO LIST YOUR MOVES, ADD A MOVIE TO END, REPLACE EXISTING MOVE W/ NEW MOVIE.*/

let myMovies = ['Wizzard of Oz', 'Drop Dead Fred', 'Home Alone']


// myMovies.forEach(function(element) {
//     console.log(element);
//   });
//  myMovies.push("Alice in Wonderland")
//      console.log(myMovies)

myMovies.splice(2,1, 'New movie')
    console.log(myMovies)

    