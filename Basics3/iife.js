// Immediately Invoked Function Expressions (IIFE)
// Function that gets immediately executed.
// Sometimes pollution from global scope causes problem by its variables or some declaration and to remove that pollution we use IIFE.


(function one() { //  NAMED IIFE.
    // console.log(`DB CONNECTED`);
})();// After immediately invoking JS doesn't know when to stop, so we have to add semi-colon at the end of the function.


(  (name) => { // UNNAMED IIFE.
    // console.log(`DB CONNECTED TWO ${name}`);
    
}  )('YASH')

let val1 = 10
let val2 = 5
function addNum(num1, num2) {
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10 , 2)
console.log(result1, result2);
