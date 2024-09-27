// const DateNow = new Date()
// console.log(DateNow);
// console.log(DateNow.toString());
// console.log(DateNow.toDateString());
// console.log(DateNow.toISOString());
// console.log(DateNow.toJSON());
// console.log(DateNow.toLocaleString());
// console.log(DateNow.toLocaleDateString());
// console.log(typeof DateNow);

// let myCreatedDate = new Date(2004, 10, 18)
// let myCreatedDate = new Date(2004, 10, 18, 5, 43, 3)
// let myCreatedDate = new Date("2024-11-18")//YYYY-MM-DD Format.
let myCreatedDate = new Date("11-12-2024")//MM-DD-YYYY Format Preferred in India.
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1)

console.log(newDate.toLocaleString('default', {
    weekday: "long",

}));

