// *************************FOR IN LOOPS ****************************
// A for-in loop iterates through the properties of an object and executes the loop's body once for each enumerable property of the object. bascially, loops through the properties of an object

let student = {
    name: "Ashley",
    awesome: true,
    degree:"JS",
    week: 1,
}

for (let item in student) {
    // console.log(item)
    console.log(student[item])
}
//* "item" is variable built inside the for-in loop. it's arbitrary, it can be anything!

//* lets do the same thing in an Array
let catArray = ['tabby', 'british shorthair', 'burmese', 'main coon', 'rag doll'];

for (let cat in catArray){
    // console.log(cat); --> will return 0-4 b/c it's coutning the items
    console.log(catArray[cat]) //* --> this will return the list of items in a list
}

//* challenge: write a for-in loop that capitalizes the 1st letter of a student' name


