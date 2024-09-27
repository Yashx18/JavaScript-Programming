// const X = new Object() // Just remember that this is a Singleton Object.
const X = {}
X.id = "Yashx9901"
X.name = "Yash"
X.isLoggedIn = false

// console.log(X);

const X_User = {
    email: "yashx024@gmail.com",
    Full_Name: {
        userfullname: {
            First_name: "Ken",
            Last_name: "Yeager"
        }
    }
}
// console.log(X_User.Full_Name);
// console.log(X_User.Full_Name.userfullname);
// console.log(X_User.Full_Name.userfullname.First_name);


const object1 = {
    1: "Y",
    2: "a"
}
const object2 = {
    3: "s",
    4: "h"
}
const object5 = {
    5: "X",
    6: "9"
}
const object3 = {
    ...object1, ...object2, ...object5
}// This spread operator is the one that is most commonly used.
const object4 = {
    object1, object2
}
// console.log(object3);
// const object6 = Object.assign({},object1,object2,object5)// {} is target and rest variable is it's sources.
// console.log(object3);


// console.log(X)
// console.log(Object.keys(X))// Now the keys of object is turned into an Array.
// console.log(Object.values(X))// Now the values of object is turned into an Array.

// console.log(Object.entries(X))// Now the keys and value pairs of object is turned into an Array.But this method isn't used that often.
// console.log(X.hasOwnProperty('is'));// This method is used to CHECK if an OBJECT HAS OWN PROPERTY that we need.

// Arrays and Object both can be de-structured but this time we are talking about the Objects.

const course = {
    courseName: "js",
    price: 999,
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor);// Just showing an another way to write even more clean code.

const {courseInstructor: instructor} = course // Here we renamed the courseInstructor key as C_instructor.
// console.log(instructor);// That's how we de-structure the object


// EXMAPLE OF REACT :
// const navbar = ({company}) => {

// }
// navbar(company = "ken")

// API is like a waiter and DOCUMENTATION is menu.

// JSON is also an OBJECT just WITHOUT A NAME.
// Object like thing below is an example of JSON.

// {
//     "name": "Yash",
//     "UserName": "Ken",
//     "Age": 19,
//     "Mission": "Freedom"
// }

// In JSON generally both keys and values are Strings except for some datatypes like Numbers , boolean.


// Example of Data from Database : Data will be array of objects.

// const Users = [
//     {
//         UserId: "yashx178",
//         LastLogin: "Sunday" 
//     },
//     {
//         UserId: "yashx178",
//         LastLogin: "Sunday" 
//     },
//     {
//         UserId: "yashx178",
//         LastLogin: "Sunday" 
//     },
//     {
//         UserId: "yashx178",
//         LastLogin: "Sunday" 
//     },
//     {
//         UserId: "yashx178",
//         LastLogin: "Sunday" 
//     }
// ]

// console.log(Users[2].UserId);