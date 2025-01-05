// console.log("Script Connected");
// const list = document.getElementById('id');





function addTasktoList(e) {
    e.preventDefault();
    let text = document.getElementById('TaskText').value;
    // console.log(text);
    const createTask = document.createElement('div');
    createTask.id = 'createdTask'
    createTask.className = 'NewTask'
    createTask.innerHTML = `${text}`;
    // const button = createTask.innerHTML = `<button id="delete"></button>`
    // createTask.appendChild('button')
    document.querySelector('#list').appendChild(createTask);

}

document.getElementById('addButton').addEventListener('click', addTasktoList)


const NewTaskClassName = document.getElementsByClassName('NewTask')
console.log(NewTaskClassName.className);


// const promiseOne = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("Promise Consumed");
//         resolve();
//     }, 1000);
// })

// promiseOne.then(()=>{

// })