//IF

// When the condition in IF statement is true then only the code inside of IF will be executed and if the statement is false then the code will be skipped.

// In Short : true == if statement will be performed.
// In Short : false == if statement will not be performed.

const isUserLoggedIn = true
const temperature = 32


// if (temperature <= 35) {
//     console.log("Mild Hot");
// } else {
//     console.log("Still Summer");

// }

// console.log("but better than the past days");// This wil get executed everytime because it isn't related to if-else condition.

// const score = 250
// if (score > 100) {
//     const power = "SuperSpeed"
//     console.log(`User's power is ${power}`);
// }
// console.log(`User's power is ${power}`);// This is will and it should be because power variable is stored in a block scope of if statement and can't be used outside of it.
// But if we had used var to declare the power variable it wonldn't have thrown error and executed as usual, but that's not good because that can affect our code. Var is default global scope.

// if(2 == "2"){ 
//     console.log("Hello");

// }

// = means assignment operator, it assigns values.
// == is comparision operator to check whether two things are equal or not.
// != is not equal operator.
// === is also a comparison operator like == but this === also check the datatype and if datatype is also same then it will give true as result. It is used strict checking

// Comparision Operators : < , > , <= , >= , == , != , === , !==



const balance = 1000

// if (balance > 500) console.log("Test");
// if (balance > 500) console.log("Test"), console.log("Test2");// Not a good practice to write code like this and creates unreadable and messy code.

// if (balance < 500) {
//     console.log("Less than 500");

// }else if (balance < 750){
//     console.log("Less than 750");

// }else if (balance < 900){
//     console.log("Less than 900");

// }else{
//     console.log("Less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromEmail = true
const loggedInFromGoogle = false
// && is and/ampersand operator it check if both of the conditions are true only then the code can be executed.
if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy courses");
    
}

// || is OR operator and it executes the code even if only one of the condition is true and can be used to check multiple conditions.
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
    
}