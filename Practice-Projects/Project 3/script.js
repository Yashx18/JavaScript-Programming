const clock = document.querySelector('#clock');

// console.log(date);

setInterval(() => {
  let date = new Date();

  // console.log(date.toLocaleTimeString());
  clock.innerHTML=  date.toLocaleTimeString()
}, 1000);
