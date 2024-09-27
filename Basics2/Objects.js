// Singletons are formed when objects are made by constructor.(One of its type.)

// Object.create <= Contructor.


// Object literals (Singleton not formed while making through this.)
const NewSym = Symbol("KEY")
// console.log(NewSym);
// console.log(typeof NewSym);


const Xuser = {
    name: "Yash",
    "Full Name": "Yash Schwartz",
    [NewSym]: "KEY",// By using square brackets we can use symbol in an object.
    age: 19,
    complexion: "Brown",
    UserId: "Yashx9901",
    isLoggedIn: true,
    gender: "Male"
}
// console.log(Xuser.UserId);// This isn't the only way to access the object.
// console.log(Xuser["Full Name"]);// Second way to access the objects.
// console.log(typeof Xuser[NewSym]);
// console.log(Xuser[NewSym]);


// Xuser.age = 20
// Object.freeze(Xuser)// Xuser is freezed after this and can't be altered.

// Xuser.age = 21
// console.log(Xuser.age);
console.log(Xuser);

Xuser.greeting = function () {
    console.log("Hello Xuser");

}
Xuser.greetingTwo = function () {
    console.log(`Hey Xuser, ${this.name}`);// To Reference an Object and it's values by using "THIS" method.
}
console.log(Xuser.greeting());
console.log(Xuser.greetingTwo());

