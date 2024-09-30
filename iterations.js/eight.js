const myNums = [1, 2, 3, 4, 5];

const initialValue = 0


// Standard Approach :

// const nums = myNums.reduce(
//     (accumulator, currentValue) => accumulator + currentValue , initialValue
// )

// Easy Method :
// It produces the same result but with just a different approach.
const totalVal = myNums.reduce( function(accumulator , currentValue) {
    // console.log(`accumulator : ${accumulator} and currentValue : ${currentValue}`);
    
    return accumulator + currentValue
}, 0)
// console.log(totalVal);

//  console.log(nums);
  

const ShoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]



const totalAmt = ShoppingCart.reduce( (acc, item) => (acc + item.price),0)
console.log(`Total amount to be paid : ${totalAmt}`);
