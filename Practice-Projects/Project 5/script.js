const button = document.querySelectorAll('.opt-clr')
const board = document.querySelector('.board')
// console.log(button);
// console.log(board);

button.forEach((btns) => {
    // console.log(btns);
    btns.addEventListener('click', (e) => {
        const color = e.target.id;
        console.log(color);

        if (color === 'red') {
            board.style.backgroundColor = color
        } else if (color === 'blue') {
            board.style.backgroundColor = color
        } else if (color === 'purple') {
            board.style.backgroundColor = color
        } else if (color === 'orange') {
            board.style.backgroundColor = color
        }

    })
});









// const time = document.querySelector('.time')
// // console.log(time);
// setInterval(() => {
//     let date = new Date()
//     // console.log(date.toLocaleTimeString(time));
//     time.innerHTML = `<span>${date.toLocaleTimeString()}</span>`
// }, 1000)