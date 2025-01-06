const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    //DB calls , cryptography, network call
    setTimeout(function () {
        console.log("Async task is complete");
        resolve();
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise Consumed");

})


new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async Task 2");
        resolve();
    }, 1000)
}).then(function () {
    console.log('Promise 2 Consumed');

})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("promiseThree Resolved");
        resolve({ username: "Yash", email: "yashkumar7028@gmail.com" });
    }, 1000)
})
promiseThree.then(function (user) {
    console.log(user.username);

})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("promiseFour Resolved");
        let error = true;
        if (!error) {
            resolve({ username: "Yash", password: "Yashx2004" });
        } else {
            reject('ERROR: Something went wrong!!');
        }
    }, 1000)
})
promiseFour.then((user) => {
    console.log(user.username);
    return user.password;

}).then((userPass) => {
    console.log(userPass);

}).catch((error) => {
    console.log(error);

}).finally(() => {
    console.log('The Promise is either resolved or rejected.');

})
// console.log(userPass);

// promiseFour.catch((error)=>{
//     console.log("PromiseFour Consumed");

// })


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("promiseFour Resolved");
        let error = true;
        if (!error) {
            resolve({ username: "Ken", password: "TheBlade" });
        } else {
            reject('ERROR: JS went wrong!!');
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}

consumePromiseFive();


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
        
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
        
//     }
    
// }
// getAllUsers();

fetch('https://api.github.com/users/Yashx18')
.then((response) => {
    return response.json();
    
}).then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log(error);
    
})
// .finally()