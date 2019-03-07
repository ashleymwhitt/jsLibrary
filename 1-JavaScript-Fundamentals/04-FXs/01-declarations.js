/**************************
DECLARATIONS
*************************

Functions 
******************
A chunk of code that performs a set action when called, or 'invoked'.

function  hi()   {
  (1)      (2)  (3)
  console.log('HI')
}
1- Keyword 
2- Name of the function, and parenthesis for parameter
3- Curly Brace, where the opperations of our function happens

Functions, as reusable blocks of code

*/

function hi() {
    console.log('Hi!');
}

// The examples before are function declarations. However, JavaScript also supports function expressions in which functions are assigned to variables. Here is an EXPRESSION example:

let hey = function hi() {
    console.log('HI');
  }

hi();
hi(); //* --> this will print Hi! x 2

function pacersWon(){
    console.log("Pacers won!");
}
pacersWon(); //* --> Pacers won!

pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon(); //* --> will print Pacers won! x 5


function hi(){
    return 'Hi!';
}
hi();

console.log(hi());

// Challenge: create a FX that when invoked, lists out the #s 1-10

function numbers() {
    for (let i = 0; i <=10; i++)
    console.log(i);
    }
numbers();

function count() {
    for ( let x = 0; x <= 10; x++){
    console.log(x);
    }
}
count();

// challenge: given the Array, create a fx that lists out the V individually. HINT, build this & then place it into the FX:
// for(let x of arr) {
//     console.log(x)

let arr = ['This', 'is', 'really', 'cool'];

function caller() {
    for(let x of arr) {
        console.log(x)
    }
}

caller();

/**************************
PARAMETERS
***********************

function hi(name){
            (1)
  console.log(`Hi ${name}`)
                    (2)
}

hi('Autumn');
      (3)

1- The parameter(s) we need to take into the function
2- Using string interpolation, we can refer to the parameter we passed
3- This is where we define what the parameter's value will be
*/


function pet(animal){
    console.log(`I have a ${animal} for a pet.`);
}

pet('cat')

// Challenge: write a FX that takes in 2 Params, 1st & last name & call it

function parmas(firstname,lastname){
    let fullName = `${firstname} ${lastname}`; //* "MEGA VARIABLE"
    console.log(`Hello, my name is ${firstname} ${lastname}.`)
}

parmas("Ashley", "Whitt")
parmas("David", "Whitt")