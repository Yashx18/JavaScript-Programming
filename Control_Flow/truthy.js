// const userEmail = "y@yash.ai" // output : true
const userEmail = [] // output : true

// const userEmail = "" // Output : false
if (userEmail) { // There is no comparison condition to check true or false but our code is still getting executed , this is an example of truthy (where it is assumed that the condition is true.)
    console.log("Got user Email");

} else {
    console.log("Don't have user email");

}


// falsy values :
// false, 0, -0, BigInt 0n, "", null, undefined, NaN <= Except for these values, al other values are truthy values and some are mentioned below.

// truthy values :
// "0", 'false', " ", [], {}, function(){}



// To check if Arry is empty :
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


// To check if an object is empty or not by turning it into an array.
const emptyObject = {}
//this will return by turning object into an Array then we can check by array is empty or not by method mentioned above.
// if (Object.keys(emptyObject).length === 0){
//     console.log("Object is empty");   
// }

// false == 0 // True
// false == '' // True
// 0 == ''// True


// Nullish Coalescing Operator (??) : null , undefined
// This operator just tries to avoid null or undefined as value and take some other genuine value as shown below.

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = 15 ?? undefined
val1 = null ?? 10 ?? 10


console.log(val1);

// Terrinary Operator
// This operaotr kind of works like if-else without much code.
// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("Less than 80") /*True statement, if true write this */: console.log("more than 80");/*False statement, if false write this */

