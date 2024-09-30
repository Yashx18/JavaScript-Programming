const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num ) =>  {return num + 10})

// chaining method : Is using more than one methods on the same variable. AS SHOWN BELOW.

// In chaining the result gets pass on to next method.
// Chaining can go on as long as you want.
// In Filter method only true values get passed.

const newNums = myNumbers
    .map((num) => { return num * 10 })
    .map((num) => { return num + 1 })
    .filter((num) => { return num >= 30 })

console.log(newNums);
