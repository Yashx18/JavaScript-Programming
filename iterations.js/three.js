// for of loop :

// ["","",""] // Strings in an Array.
// [{},{},{}] // Objects in an Array.

// for of loop Example :
const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

// for of loop on string :
const aString = "Hello World!!"
for (const str of aString) {
    // console.log(`Each char is ${str}`);
    
    // if (space) {
    //     continue
    // }
    
}

// Maps :
// It only stores unique values and stays in order it was created.
const chart = new Map();
chart.set('IN',"India");
chart.set('JPN',"Japan");
chart.set('USA',"United States of America");
chart.set('UK',"United kingdoms");
chart.set('IN',"India");


// console.log(chart);


for (const [map] of chart) {
    // console.log(map);
    
}
for (const [map, value] of chart) {
    // console.log(map, ':-',value);
    
}

const myObj = {
    'game1': 'NFS',
    'game2': 'SpiderMan'
}
// To print Object with a for of loop just put variable of object in square brackets.
for (const obj of [myObj]) {
    console.log(Object.values(myObj));
    
}