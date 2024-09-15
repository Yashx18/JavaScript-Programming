/*********************** General Notes **************************/
// Javascript is a DYNAMICALLY typed lnguage.
//Example :- we never have to specify the datatype before declaring a variable. 
// const score = 100 'Number'
// const degree = 18.4 'There is no special datatype like float for decimal number.'
// const isLoggedIn = false 'Boolean'
// const Temp = null 'null'
// let UserEmail; 'Undefined'
// OR
// let UserEmail = undefined;

/********************** How to declare SYMBOLS ? **************************/

/* Mentioned below */

// const id = Symbol('0204')
// const anotherId = Symbol('0204')
// console.log(id);
// console.log(anotherId);
// console.log(id === anotherId);


/* Here's how you use BigInt in Javascript just put 'n' at the end of number */

// let BigNumber = 22345678909876543245678876543456789876543n
// console.log(BigNumber);
// console.log(typeof BigNumber);




/************************* Datatypes *****************************/
// Primitive

// 7 Types : String , Number , Boolean , null , undefined , symbol , bigInt.



// Reference (Non-Primitive)

// Array , Objects , Functions
// All the reference or non-primitive datatype is 'object function' for function and 'object or function' for Objects and Arrays, when using the 'typeof' operator.

// Arrays Example :

// const Heros = ["Itachi" , "Eren" , "Keisuke"]
// console.table(Heros);

// Objects Example :

// let BioData = {
//     name: "Yash",
//     age: 19,
//     Gender: "Male",
//     Religion: "Christian"
// }

// // Function Example : 

// const FirstFunction = function(){
//     console.log("Hello User");
// }
// console.table(typeof id);





// Below this line is the content of Video 10 : Stack & Heap Memory





/********************* Stack and Heap Memory *************************/

// Stack : It is used in all of Primitive Datatypes.

// let myYoutubename = "hiteshchoudharydotcom"

// let anotherName = myYoutubename
// anotherName = "chaiaurcode"

// console.log(myYoutubename);
// console.log(anotherName);

/* NOTE :- When using primitive datatype , STACK memory is used and when we recall the value from the variable, the copy of the value is sent back as result. Any change made to the another variable using it will not affect the original value or variable as shown in the above example. */


// Heap : It is used in all of Non-Primitive Datatypes.

let userOne = {
   email: "user@google.com",
   upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);


/* NOTE :- When using non-Primitive datatype , HEAP memory is used and when we recall tge value from the variable , the reference to the original value is sent back as result. Any change made to the another variable using it will be affected and changed as shown in the above example. */
