const form = document.querySelector('form');
// This useCase will give you empty values.
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height: ${height}`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight: ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // Show the result. 
    if(bmi <= 18.6){
      results.innerHTML = `<span>${bmi} "Under Weight"</span>`;
    } else if(bmi >= 18.6 && bmi <= 24.9){
      results.innerHTML = `<span>${bmi} "Normal Range"</span>`;
    } else if(bmi >= 24.9){
      results.innerHTML = `<span>${bmi} "Over weight"</span>`;
    }
    
    // results.innerHTML = `${height}`;
  }
});
