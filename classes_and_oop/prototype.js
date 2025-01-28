let myName = "Yash    " 

const Alias = "ansh "

// console.log();


let myHeros = ['Tate', 'Hamza', 'Baki']
let heroPower = {
    tate: "Mindset",
    hamza: "Influence",
    baki: "Demon Brain",

    getBakiPower: function(){
        console.log(`Baki's Power is ${this.baki}`);
    }
}

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(this.trim().length);
    // console.log(`IT Is Present`);
    
    
}

// console.log(heroPower.trueLength());
// Alias.trueLength();


const TeachingSupport = {
    isAvailable: false
}
const Teacher = {
    makeVideo: true
}

const User = {
    name: "Chai",
    email: "chai@google.com"
}
const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
// This is the Older Syntax and not used nowadays.
TASupport.__proto__ = User


// Modern Syntax (By directly declaring it in the Objects)
Object.setPrototypeOf(TASupport, Teacher)


// console.log(TASupport.makeVideo);

// THIS KA MTLAB JIS , JO BHI CALL KRE USKE BAARE ME. JIS NE CALL KIA VO HI THIS H.

let anotherUsername  = "Ken"
anotherUsername.trueLength()
"Yash".trueLength()