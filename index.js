const btnEl = document.getElementById("btn");
function calculateBMI() {
  const heightValue = document.getElementById("heightDetail").value / 100;
  const weightValue = document.getElementById("weightDetail").value;

  const bmiInputEl = document.getElementById("Detail");

  const bmiValue = weightValue / (heightValue * heightValue);

  const weightConditionEl = document.getElementById("weight-condition");

  bmiInputEl.value = bmiValue;

  if (bmiValue < 18.5) {
    weightConditionEl.innerText = "Under weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionEl.innerText = "Normal weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionEl.innerText = "Over weight";
  } else if (bmiValue >= 30) {
    weightConditionEl.innerText = "Obesity";
  }
  console.log(heightValue);
  console.log(weightValue);
}

btnEl.addEventListener("click", calculateBMI);

calculateBMI();
