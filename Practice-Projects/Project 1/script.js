const board = document.querySelector('.container')
const color = document.querySelectorAll('.color')

// console.log(screen.className);

color.forEach((btns) => {
    // console.log(btns.id);
    btns.addEventListener('click', (e) => {
        const color = e.target.id;

        if (color === 'red') {
            //    document.querySelector('.container').style.backgroundColor = color;
            board.style.backgroundColor = color;
        } else if (color === 'blue') {
            //    document.querySelector('.container').style.backgroundColor = color;
            board.style.backgroundColor = color;
        } else if (color === 'orange') {
            //    document.querySelector('.container').style.backgroundColor = color;
            board.style.backgroundColor = color;
        } else if (color === 'grey') {
            //    document.querySelector('.container').style.backgroundColor = color;
            board.style.backgroundColor = color;
        } else if (color === 'yellow') {
            //    document.querySelector('.container').style.backgroundColor = color;
            board.style.backgroundColor = color;
        } else if (color === 'green') {
            //    document.querySelector('.container').style.backgroundColor = color;
            board.style.backgroundColor = color;
        } else if (color === 'pink') {
            //    document.querySelector('.container').style.backgroundColor = color;
            board.style.backgroundColor = color;
        } else if (color === 'purple') {
            //    document.querySelector('.container').style.backgroundColor = color;
            board.style.backgroundColor = color;
        } else if (color === 'violet') {
            //    document.querySelector('.container').style.backgroundColor = color;
            board.style.backgroundColor = color;
        } else if (color === 'brown') {
            //    document.querySelector('.container').style.backgroundColor = color;
            board.style.backgroundColor = color;
        } 
    })

});