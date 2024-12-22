const Password = document.getElementById('generatedPassword');
const create = document.getElementById('createPassword')
const clear = document.getElementById('clearPassword')

// console.log(Generate);

function randomPasswordgenerator(){
    const Hex = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@'
    let combination="";
    for(let i = 0; i<10; i++){
        combination += Hex[Math.floor(Math.random() * 64)]
    }
    // console.log( combination);
    
    Password.innerHTML= combination;
}

function clearPasswordGenerator(){
    Password.innerHTML = "";
}
create.addEventListener('click',randomPasswordgenerator);

clear.addEventListener('click',clearPasswordGenerator)


