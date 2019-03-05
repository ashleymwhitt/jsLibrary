// // fizz buzz

// x = 5

// if (x < 5) {console.log("Fizz")}
// else if (x > 5) {console.log("Buzz")}
//     else {console.log("Fizz Buzz")}

// y = 3

// if (y % 3 == 0 && y % 5 == 0) {console.log("FIZZ BUZZ")}
// else if (y % 3) {console.log("Fizz")}
// else if (y % 5) {console.log("Buzz")}

for (i = 0; i < 10; i ++) {console.log(i)}

name = ["Ashley", "David", "Cooper"]
    for (i = 0; i < name.length; i++)
    {console.log(name)}

names = ["Ashley", "David", "Cooper"]
    for (name in names){
        console.log(name)
        console.log(names[name])
    }

drinks = ["wine", "vodka", "Wiskey", "gatorade"]
    for (drink of drinks){
        console.log(drink)
    }

function hi(){
    console.log("HI!!!!!!!!")
}
hi()

function counting(){
    for (i = 0; i < 10; i++)
    console.log(i)
}
counting()


animal="dog" 
function pet(){
    console.log (`I have a ${animal} for a pet.`)
}
pet()

