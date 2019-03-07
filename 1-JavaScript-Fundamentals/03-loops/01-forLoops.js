// for LOOPS --> Loops allow us to repeatedly run a block of code until a condition is met.

// count to 10 by 1's

for (let i = 0; i < 10; i++) {
    console.log(i)
}

// BELOW IS BASCIALLY THE SKELETON/BREAKDOWN OF A FOR LOOP LAYOUT. WHAT EACH ITEM MEANS:
// for (setup or start @; test expression or stop @; incrementor count by how many) {
//     body;    
// }

// challenge: using a for loop, count to 20 by 2's. To change the increment, just change the (i+=2) to (i +=5)
for (let i = 0; i <= 20; i+=2) {
    console.log(i)
}

// Challenge: using a for loop, count from 10 to 0 going down y 1's
for (let i = 10; i > 0; i --) {
    console.log(i)
}

// challenge: using a for loop count from 0 going down by 2's to -24

for (let i = 0; i >= -24; i-=2) {
    console.log(i)
}

// challenge: using a for loop, go through a name & display each letter individually
let name = "Ashley";

for(let i = 0; i < name.length; i ++) {
    console.log(name[i])
}

// Challenge: make a for loop where you add up all the #s from 1 to 50 (should = 1275)

let sum = 0;

   for (var i  = 0; i <= 50; i++){
    sum += i;  //* same as sum = sum +1
 }
console.log(sum)

// CHALLENGE: 0-100 DIVISIBLE BY 3 & 5 =FIZZ BUZZ; DIVISIBLE BY 3= BUZZ; DIVISIBLE BY 5=FIZZ; AND A CATCH ALL. USE A FOR LOOP.S
for(let i =0; i<=100;i++){
    if(i % 3 ==0 && i % 5==0){
        console.log('FizzBuzz');
    } else if(i %5 ==0){
        console.log('Buzz')
    } else if( i % 3 ==0){
        console.log('Fizz')
    } else {
        console.log(i);
    }
}
// CHALLENGE: SAME AS ABOVE BU USE SWITCH case.
for(let FB = 0; FB<=100;FB++){
    switch (true) {
      case (FB % 3 === 0 && FB % 5 === 0):
      console.log('Fizz Buzz');
      break;
      case (FB % 5 === 0):
      console.log('Buzz');
      break;
      case (FB % 3 === 0):
      console.log('Fizz');
      break; 
      default :
      console.log(FB); 
    }
    
  }