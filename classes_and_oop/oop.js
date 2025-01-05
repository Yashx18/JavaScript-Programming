const user = {
    username: "hitesh",
    // loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from the Database");
        // console.log(`Username: ${this.username}`);
        console.log(this);// This refer to the Current Context. In this case , this is referring to the User Object
        
    }
}

// console.log(user.loginCount);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this;
}

const userOne = new User("Yash", 10, true)
const userTwo = new User("Ken", 8, false)

console.log(userOne.constructor);// Constructor is reference to ourselves
// console.log(userTwo);

//Step 1 : new keyword creates an empty object called INSTANCE (doesn't overwrite the Data).
//Step 2 : constructor function is called because of new Keyword and then it packs all our arguments etc. and put that it into the newly created object.
//Step 3 : all of the Arguments gets injected into this keyword
//Step 4 : Then we get the output in function

