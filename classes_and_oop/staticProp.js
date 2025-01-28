class User {
    constructor(username) {
        this.username = username;
    }

    logMe(){
        console.log(`Username : ${this.username}`);
        
    }

    static createId(){
        return (`123`)
    }

}

const Yash = new User ('Yash')
// console.log(Yash.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email;
    }
}

const iphone = new Teacher ('Iphone', 'i@phone.com')
console.log(iphone);
