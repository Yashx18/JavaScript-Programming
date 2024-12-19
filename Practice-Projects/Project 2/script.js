const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const height = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.getElementById('weight').value);
  const results = document.getElementById('result');
  // console.log(height);
  // console.log(weight);
  if (height === '' || isNaN(height) || height <= 0) {
    results.innerHTML = `Please give a Valid Height: ${height}`;
  } else if (weight === '' || isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please give a Valid Weight: ${weight}`
  } else {
    //Formula to Calculate BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi <= 18.6){
      results.innerHTML= `Under Weight: ${bmi}`
    } else if (bmi > 18.6 && bmi < 24.9){
       results.innerHTML= `Normal Range: ${bmi}`
    } else if (bmi >= 24.9 ){
      results.innerHTML= `Over Weight: ${bmi}`
    }

  }

})
