// /**************************
// FAT ARROW FUNCTIONS
// *********************
// let hi = ()   => {
//       (1)     (2)
//   console.log('hi')
// };

// 1- We need to set the fat arrow function to a variable
// 2- We use the 'fat arrow' to signify its a function


// Concsice
// *********************
// let hi = () => console.log('hi');

// Block Body
// *********************
// let hi = () => {
//   console.log('hi')
// }



function coffe(){
    console.log('coffee is good');
}

let cofee = () => {
    console.log('I like Cofee!')
}

coffee();

// Arrow functions can have either a "concise body" or the usual "block body".

// In a concise body, only an expression is specified, which becomes the implicit return value. In a block body, you must use an explicit return statement.

var func = x => x * x;                  
// concise body syntax, implied "return"

var func = (x, y) => { return x + y; }; 
// with block body, explicit "return" needed

let apples = x => console.log(`There are ${x} apples.`); //* ie of conscise body

// apples(10)
console.log(apples(10));

let apples = (x) => {console.log(`There are ${x} apples.`)}; //* ie of block body

// challenge: tip calculator


function tip(x,y){
  return (x * y)
}
console.log(tip(.2,20))

conscise
// --> let tipper = bill => (bill * 0.2).toFixed(2)
// let tips = tipper (19.88);
// console.log(tips)*//*

d

