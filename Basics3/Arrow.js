const user = {
    username: "ken",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to Website.`);
        console.log(this);


    }

}
// user.welcomeMessage()
// user.username = "Yash"
// user.welcomeMessage()
// console.log(this); // Result is empty because we are currently in NODE environment and when we run this same command in browser output is different.

// Global object in browser is "Window object"
// "This" keyword refers to current context.
// Context refers to Current topic/ Current Values.
// function one() {
//     let username = "yash"
//     console.log(this.username);
//     // Here this is not working because it works in object.   
// }
// one(this);

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

//BASIC ARROW FUNCTION :
// const addNum = (num1, num2) => {
//     return num1 + num2
// }

// Implicit Return => //const addNum = (num1, num2) => (num1 + num2) : This technique is used often in REACT.

//const addNum = (num1, num2) => (num1 + num2)
  
const addNum = (num1, num2) => ({username: "yash"})// In case of returning an object

// CURLY BRACES{} == return keyword must
// PARANTHESIS() == no return keyword
 

// IMPLICIT RETURN == WITHOUT RETURN KEYWORD.
// EXPLICIT RETURN == WITH RETURN KEYWORD.
console.log(addNum(10, 20));

const ArrayOne = [2, 4, 5, 1, 7]

// ArrayOne.forEach(() => {})
// ArrayOne.forEach(() => ())
// ArrayOne.forEach(function(){})

// Loop can be done in any way mentioned above.