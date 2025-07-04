let currentStep = 1;
const totalSteps = 3;

document.addEventListener("DOMContentLoaded", () => {
  showStep(currentStep);
});

function showStep(step) {
  for (let i = 1; i <= totalSteps; i++) {
    const stepDiv = document.getElementById(`step${i}`);
    stepDiv.classList.remove("active");
  }
  document.getElementById(`step${step}`).classList.add("active");

  // Update progress bar
  const progress = ((step - 1) / (totalSteps - 1)) * 100;
  document.getElementById("progressBar").style.width = `${progress}%`;

  // Hide result
  const resultDiv = document.getElementById('result');
  resultDiv.innerText = '';
  resultDiv.className = 'result';
}

function nextStep() {
  if (currentStep < totalSteps) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    showStep(currentStep);
  }
}

function checkIllness() {
  const thirst = document.getElementById('thirst').checked;
  const urination = document.getElementById('urination').checked;
  const fatigue = document.getElementById('fatigue').checked;
  const blurred = document.getElementById('blurred').checked;

  const dizzy = document.getElementById('dizzy').checked;
  const headache = document.getElementById('headache').checked;
  const chestPain = document.getElementById('chestPain').checked;

  const cough = document.getElementById('cough').checked;
  const fever = document.getElementById('fever').checked;
  const soreThroat = document.getElementById('soreThroat').checked;

  const resultDiv = document.getElementById('result');
  let resultText = "✅ No specific illness detected.";
  let resultClass = "success";

  if (thirst && urination && fatigue) {
    resultText = "⚠️ You may be showing signs of Diabetes.";
    resultClass = "warning";
  } else if ((dizzy && headache) || chestPain) {
    resultText = "⚠️ You may be experiencing Blood Pressure issues.";
    resultClass = "warning";
  } else if ((fever && cough) || (soreThroat && cough)) {
    resultText = "⚠️ You may have symptoms of a Cold or Flu.";
    resultClass = "warning";
  }

  resultDiv.className = `result ${resultClass} show`;
  resultDiv.innerText = resultText;

  currentStep++;
  showStep(currentStep);
}

