const myArr = [0,1,2,3,4,5]// This is how you declare an array and the values inside are called "Elements" and Elements can be of different type like boolean , string or number and Index in arrays start from 0.

// It is a datatype of storing and collection of multiple items under a single variable and arrays are resizable.
// console.log(myArr)
// console.log(myArr[1])

// Javascript array-copy-operations create Shallow copies rather than Deep copies.
// Shallow Copies => Heap memory
// Deep Copies => Stack memory

// const myMentors = ["Andrew Tate" , "Tristan Tate" , "Hamza Ahmed" , "Iman Gadzhi" , "David Goggins"]

const newArr = new Array(0,10,20,30,40,50,60)
// console.log(newArr);// This will automatically add the square brackets.

// console.log(myMentors.length);
// console.table(myMentors);

// Array methods
 
// newArr.push(70)// Push method just adds the entered value at the end of the array.
// newArr.push(80)
// newArr.pop()// Pop mehtod just removes the last value of array that's it and we don't have to pass any value in it.

// newArr.unshift(10)// Unshift method also works like push method but only difference is that it adds the value at the start of array which causes array to shift all it's value and increases load on the computer.

// newArr.shift()// Shift method also works like pop method but only difference is that it removes the first element from an array.

// console.log(newArr);

// console.log(newArr.includes(9));// Includes method just as it's name suggest it tells in boolean if the value entered is in the array or not.

// console.log(newArr.indexOf(10));// Indexof method tells the index of entered value and if the value isn't present in the array the output will be "-1" which means it doesn't exist.

// const Arr1 = newArr.join()// Join function turns the array into string type and combines all the data in it which is seperated by Comma .
// console.log(newArr);
// console.log(Arr1);
// console.log(typeof Arr1);// Output => String

//SLICE & SPLICE.

console.log("A ",newArr);
const Arr2 = newArr.slice(1,3)
console.log(Arr2);
console.log("B ", newArr);

const Arr3 = newArr.splice(1,3)// Splice method manipulates the original array and makes changes into it .
console.log(Arr3);

console.log("C ",newArr);



