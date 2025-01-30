const newObj= Object.getOwnPropertyDescriptor(Math, 'PI' )
// console.log(newObj);

// Math.PI = 5;
// console.log(Math.PI);

const myNewObj = Object.create(null)
const drink = {
    name: 'Black Coffee',
    price: 250,
    isAvailable: true,
    orderChai: function () {
        console.log(`Code Fatgya`);
        
    }
}

// console.log(Object.getOwnPropertyDescriptor(drink, 'name'));

Object.defineProperty(drink, 'name', {
    // writable: false,
    enumerable: false
})
// console.log(Object.getOwnPropertyDescriptor(drink, 'name'));

for (let [key, value] of Object.entries(drink)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
   
}