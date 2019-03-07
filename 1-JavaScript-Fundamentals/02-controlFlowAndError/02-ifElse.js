let weather = 75;

if(weather < 70){
    console.log('wear a jacket');
} else {console.log('no jacket necessary');
}

//* CHALLENGE

let myName = 'Ashley';

if (myName != 'Ashley'){
    console.log(`Hello, my name is ${myName}!`);
} 
else {console.log('Hello, what is your name?');
}


// CHALLENGE*********************************************************************

let name = 'aShLeY';
console.log(name[0])

if(name[0] == name[0].toUpperCase()){
    console.log('Made it!');
} else {console.log('Hey, its not written correctly!')
}

let name = 'aShLeY';

if(name[0] == name[0].toUpperCase()){
    console.log(name[0] + name.substr(1).toLowerCase());
} else {console.log(name[0].toUpperCase() + name.substr(1).toLowerCase());
}

let yourAge = 33;

if(yourAge >=25) {
    console.log('Yay! you can do anything you want!');
} else if(yourAge >= 21) {
    console.log('Yay! You can drink');
} else if (yourAge >= 18) {
        console.log("Yay! You can vote!");
} else if (yourAge <= 17) {
    console.log("Sorry, you're too young to do anything!");
}

//* start w/ strictest requirements FIRST!!! B/C it will stop w/ the first condition met.


// Good student example

let age = 26;
let a = 'Yay! You can vote!';
let b = 'Yay! You can drink!';
let c = 'Yay! You can rent a car!';

if (age >= 18 && age <= 20) {
   console.log(a);
 } else if (age >= 21 && age <= 24) {
   console.log(a,b);
 } else if (age >= 25) {
   console.log(a,b,c);
 } else {
   console.log('Sorry, you are too young to do anything.');
 }
//  OR another student example

 let age = 21;

let a = "you cant do anything!";
let b = "You can vote!";
let c = "You can Drink!";
let d = "You can rent a car!";

if(age <= 17){
   console.log(a);
}

else if(age >= 18 && age <= 21){
   console.log(b);
}
else if(age >= 21 && age <=25){
   console.log(b,c);
}
else if(age >=  25){
   console.log(b,c,d);
}

//******************************* */SWITCH ********************************

// 4 main parts to a switch statement 

let friend = "Bob";

switch (friend) {
    case "Autumn":
        console.log("Hey Autumn, when are youg oing rock climbing?");
        break;
    case "Dave":
        console.log("Hey Dave, how is Cooper?");
        break;
    case "Alecx":
        console.log("Hey Alecx, when are we playing DnD?");
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`)
}
`${}` //* --> string interpolation

let dessert = 'poop'

switch (dessert) {
    case "Pie":
        console.log('Pie, pie, me oh my!');
        break;
    case "Cake":
        console.log("Cake is great!");
        break;
    case "Ice Cream":
        console.log('I scream for ice cream!');
        break;
    default:
        console.log(`I'm sorry, ${dessert} is not on the menu.`)
}

let yep = -8;

switch (true) {
  case (yep < 0 && yep > -10): 
    console.log('worked');
    break;
  case (yep > 0): 
    console.log('worked!');
    break;
  default: 
    console.log('didnt work');
}











PVT Whitt, Cody 
____ PLT ECHO CO, 
3-60 IN BN, 193RD IN BDE
5500 Marion Ave 
Fort Jackson, SC 29207
