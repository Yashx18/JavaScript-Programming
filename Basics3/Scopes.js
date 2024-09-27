// These curly braces are called "SCOPE" and when it is used with operations like function or if-else they are called "BLOCK SCOPE" and area of these block is called "GLOBAL SCOPE". The variables declared in Global Scope are usable in Block Scope but variables declared in Block Scope aren't usable in Global Scope and they shouldn't even be. But var does not function according to this rule that's why most people avoid using "var".

// Block scope is a different entity from the Global scope but can access variables from the global scope.


// var c = 300

// if (true) {

//     let a = 10
//     const b = 20
//     var c = 30
// }

let a = 100

if (true) {

    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a);

}



// console.log(a);
// console.log(b);
// console.log(c); // This is a problem here because of var.


function one() {
    const username = "Yash"
    function two() {
        const website = "X"
        console.log(username);
    }
    // two()
    // console.log(website);

}
one()

// This example of nested scope above tells us that children can use its parent's variables but parent can't use its children's variables.


if (true) {
    const username = "ken"
    if (username === "ken") {
        const website = " X"
        // console.log(username + website);
    }
    // console.log(website); // Error

}
// console.log(username); // Error

// This example of nested if above tells us that children can use its parent's variables but parent can't use its children's variables same as the function example.



// +++++++++++++ Interesting +++++++++++++++

//  Below are 2 techniques  of declaring a function/

// First way : Called "Function"

console.log(addOne(5));
function addOne(num) {
    return num + 1
}


// Second way : Also called "Expression".
// function stored in a variable.
// Variables can hold almost anything like function, JSON etc.


console.log(addTwo(5)); // This will throw error because function is stored in a variable and we must declare the variable first and then use it, but in the case below we are trying to access the variable before declaring it.
// Also because of concept of Hoisting in Javascript.

const addTwo = function (num) {
    return num + 2
}
