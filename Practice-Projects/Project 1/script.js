const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

// console.log(buttons);

buttons.forEach((btns)=> {
    console.log(btns);
    btns.addEventListener('click',(event)=>{
       
       
        const color = event.target.id;
        console.log(color);
        if (color === 'grey') {
            body.style.backgroundColor = color
        }
        if (color === 'white') {
            body.style.backgroundColor = color
        }
        if (color === 'blue') {
            body.style.backgroundColor = color
        }
        if (color === 'yellow') {
            body.style.backgroundColor = color
        }
        if (color === 'orange') {
            body.style.backgroundColor = color
        }
        if (color === 'purple') {
            body.style.backgroundColor = color
        }
        
    })
})
