class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`Course Added by ${this.username}`);
        
    }
}

const tea = new Teacher ('Yash', 'kenx024@gmail.com', 93549387)
console.log(tea);
tea.addCourse()

console.log(tea instanceof User);
console.log(tea instanceof Teacher);

