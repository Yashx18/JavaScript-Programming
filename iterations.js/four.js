const myObject = {
    js: "Javascript",
    py: "Python",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by Apple"
}

for (const Obj of [myObject]) {
    // console.log(Obj);
    
}
for (const key in myObject) {
//    console.log(`${key} is shortcut for ${myObject[key]}`);
   
}

const PhoneCompany = ["Apple", "Samsung", "Oneplus", "Vivo", "Google"]
for (const key in PhoneCompany) {
    // console.log(`${key} : ${PhoneCompany[key]}`);
    
}
const chart = new Map();
chart.set('IN',"India");
chart.set('JPN',"Japan");
chart.set('USA',"United States of America");
chart.set('UK',"United kingdoms");

// Map is not iteratable so for in loop can't be used on Map.
// console.log(chart);
for (const key in chart) {
//    console.log(key);
}

/************** NOTE *************/

// Arrays => Use for of loop.
// Objects => Use for in loop.

