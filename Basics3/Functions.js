const yo = function () {
    console.log("HEllO User");

}
// console.log(yo());



function WriteName() {
    console.log("Y");
    console.log("a");
    console.log("s");
    console.log("h");
}

// console.log(WriteName());
// WriteName// This is reference to the function.
// WriteName()// This is execution of the function.

// function AddTwoNumbers(num1, num2) { // Paranthesis Portion is called "Parameter"
//     console.log(num1 + num2);
// }
// AddTwoNumbers(5,5) // Paranthesis Portion while calling the function is called "Arguments".


function AddTwoNumbers(num1, num2) {
    // let result = num1 + num2
    // return result  // Functions have a rule that nothing after 'return' gets executed.
    // // console.log("Yash");

    return num1 + num2 // Only after using 'return' we can store output in a variable.

}

const output = AddTwoNumbers(4, 2)
// console.log("Result: ", output);

function loginUserMessage(username = "User") {
    if (!username) { // Or (username === undefined)
        console.log("Username can't be Empty");
        return

    } else {
        return `${username} just logged in.`
    }

}
// User will be the Default value and it will be overwritten when new value is entered
// ! is a not symbol, it converts true into false and vice versa.
// const loginMessage = loginUserMessage("")
// console.log(loginMessage);

// console.log(loginUserMessage());


// '...number' as a parameter is using the rest operator and these 3 dots "..." can be used as both spread and rest operator and it only depends on it's use case. Rest operator just gives the all the values in the form of Array.
// function calculateCartPrice(...number1) {
//     return number1
// }
// console.log(calculateCartPrice(200 , 400 , 500));
// console.log(typeof calculateCartPrice);

// Interview Question :
// what will be the result of below mentioned function?

function CartPrice(val1, val2, ...remaining) {
    return val1, val2, remaining
}

// console.log(CartPrice(100, 200, 300, 400, 500));
// Output is [ 300, 400, 500 ] because first two values are saved in their respective variable and rest of them are saved into rest operator remaining.


const userInfo = {
    username: "Ken",
    paymentOption: "UPI",
    amount: 1000
}

function handleObject(anyobject) {
    console.log(`Name of User is ${anyobject.username} and his total amount is ${anyobject.amount}`);

}

// handleObject(userInfo) // first an object is made.
// handleObject({
//     username: "Yash",
//     amount: 5000
// }) // In this second method we directly passed a new object while making the function.

const newArray = Array(1, 2, 3, 4, 5)
function returnSecondValue(anyArray) {
    // console.log(`Second Value is ${anyarray[1]}.`);
    return anyArray[1]
}


// console.log( returnSecondValue(newArray));
// console.log(returnSecondValue([
//     1,2,3,4,5
// ])); // Array is passed while making the function.

