/*********************** Number Section **********************/ 

// const Score = 500 ;
// const Amount = new Number(500);
// console.log(Score);
// console.log(Amount);
// console.log(typeof(Amount));

// console.log(Amount.toString());// This method turns the number value to string.
// console.log(Amount.toFixed(2));// This method will be used often and it turns the number value into decimal value and we can choose to display the number of precision values after decimal.

// const Balance = new Number(2345.8765)
// console.log(Balance.toPrecision(4));// This method gives output in precision and if necessary it will also round off the value.

// const NewValue = 10000000;
// console.log(NewValue.toLocaleString());// This method automatically puts commas where necessary according to the US number system.
// console.log(NewValue.toLocaleString('en-IN'));// This method automatically puts commas where necessary according to the US number system but by adding 'en-IN' it will put commas according to Indian Number System.


/*********************** Maths Section ***********************/

// console.log(Math)
// console.log(Math.abs(-4));// Absolute method just turns negative values into positive, that's it.
// console.log(Math.round(4.3));// This method just round offs the value like we do in actual Maths.
// console.log(Math.ceil(4.5));// Ceiling method just round offs the value into the next upcoming numbe even if it's just 0.1 more than 4 or the value.
// console.log(Math.floor(4.9));// Floor method just round offs the value into the number it is and removes the decimal value.
// console.log(Math.max(20, 21, 23, 43, 4));// As it's name suggests Max method tells you the biggest values among the given data.
// console.log(Math.min(5, 45, 65, 32, 12));// As it's name suggests Min method tells you the samllest values among the given data.


//+++++++++++++++ This is where we'll be using the Math library the most.
// console.log(Math);
// console.log(Math.random())// This will give random value between 0 and 1 by default and mostly in decimal.

// console.log(Math.random()*10)
// console.log((Math.random()*10)+1)// This is  to ensure that the value won't be 0.
// console.log(Math.floor(Math.random()*10)+1);

const min = 10 
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min);//Kind of a formula to make the lowest value 10 and highest value less than or equal to 20


console.log(Math.round((Math.random()*10+1)));


