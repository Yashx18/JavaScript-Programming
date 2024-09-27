// Immediately Invoked Function Expressions (IIFE)
// Function that gets immediately executed.
// Sometimes pollution from global scope causes problem by its variables or some declaration and to remove that pollution we use IIFE.


(function one() { //  NAMED IIFE.
    console.log(`DB CONNECTED`);
})();// After immediately invoking JS doesn't know when to stop, so we have to add semi-colon at the end of the function.


(  (name) => { // UNNAMED IIFE.
    console.log(`DB CONNECTED TWO ${name}`);
    
}  )('YASH')