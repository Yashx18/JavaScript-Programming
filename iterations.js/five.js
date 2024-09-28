const coding = ["js" , "ruby" , "python" , "java" , "C++"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach((val) => {
//     console.log(val);
    
// })
// function printMe(item) {
//     console.log(item);
    
// }
// coding.forEach(printMe) // Just give reference to the function, do not exxecute it otherwise it will throw error.

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
    
})

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
    console.log(item)
})