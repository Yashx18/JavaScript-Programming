const Password = document.getElementById('generatedPassword');
const create = document.getElementById('createPassword')
const clear = document.getElementById('clearPassword')

// console.log(Generate);

function randomPasswordgenerator() {
    const Hex = [
        1, 2, 3, 4, 5, 6, 7, 8, 9,
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '#', '@'
    ];

    console.log( Hex);

    let combination = "";
    for (let i = 0; i < 10; i++) {
        combination += Hex[Math.floor(Math.random() * 64)]
    }
    console.log(typeof combination);

    Password.innerHTML = combination;
}

function clearPasswordGenerator() {
    Password.innerHTML = "";
}
create.addEventListener('click', randomPasswordgenerator);

clear.addEventListener('click', clearPasswordGenerator)


