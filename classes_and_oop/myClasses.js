// We are working on JS after ES6 version.

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

// const chai = new User('Yash', 'yashx024@gmail.com', 7827796879)
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());
// console.log(chai);


// Behind The Scene.

function createUser(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

// function changeUsername() {
//     return `${this.username.toUpperCase()}`
// }

createUser.prototype.encryptPassword =  function () {
        return `${this.password}abc`
    }
createUser.prototype.changeUsername =  function () {
        return `${this.username.toUpperCase()}`
    }

const userOne = new createUser ('Ken','kenx024@gmail.com', 321)
console.log(userOne);
console.log(userOne.encryptPassword());
console.log(userOne.changeUsername());
