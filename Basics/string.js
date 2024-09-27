/* This file is to learn all about the STRINGS. */

// const name = "YASH "
// const repoCount = 10
// console.log(name + repoCount + " KEN"); // This is not a good way to write strings and concatenate them. OUTDATED APPROACH FOR CONCATENATION.

// const name = "Ken"
// const age = 19


// console.log(`Hey , Guys i'm ${name} , my age is ${age}`);
//This method is called "String InterPolation" and this is the modern way of syntax.

const DcName = new String('Worst Generation') // New way to declare a string as an object.
// console.log(DcName);// To just simply log the value in console.
// console.log(DcName[0]);// To access the 0th key in the variable DcName.
// console.log(DcName.__proto__);// To view the methods and objects for Strings, better use it in console in browser.
// console.log(DcName.length);// This method shows the length of any value stored in variable.
// console.log(DcName.toUpperCase());// This method transforms the value to UPPERCASE but our String is same as before.
console.log(DcName.charAt(4));// This shows what value is on a specific index.
console.log(DcName.indexOf('G'));// This shows the index of a specific value.

// const NewString = DcName.substring(0,4);// The substring() method extracts characters, between two indices (positions), from a string, and returns the substring and the last index will not be returned.
// console.log(NewString);

// const stringVariable = DcName.slice(-16,-11);// The different thing in this method is that we can also give negative values to print the output in reverse.
// console.log(stringVariable);

// const StringOne = "    Yash    ";
// console.log(StringOne);
// console.log(StringOne.trim());// Trim method removes the white space and line teminators from start and end and saves only the string or value.
// const URL = "https://ken.com/yash%20schwartz"
// console.log(URL.replace('%20', '-'));// This method just replaces the thing with your desired value.
// console.log(URL.includes('ken'));// This method shows the output in boolean and tells if it is present in variable or not.

// const stringTwo = "Christ-Is-King"
// console.log(stringTwo.split('-'));// This method just splits the string on the basis of the symbol or value.

