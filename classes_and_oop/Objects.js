function multiplyBy5(num){
return num * 5 ;
}
multiplyBy5.power = 2
// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)


function createUser (username, height){
    this.username = username;
    this.height = height;
}

createUser.prototype.increment= function (){
    this.height++;
    console.log(this.height);
    // return this.height;
    
}
createUser.prototype.printMe= function (){
    console.log(`Welcome ${this.username}, Your current height is ${this.height}`);
}
// console.log(Yash);
const Yash = new createUser("Yash", 174)
const Ansh = new createUser("Ansh", 168)
const Ishaan = new createUser("Ishaan", 190)

Ansh.printMe()