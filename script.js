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

  // Diabetes symptoms
  if (thirst && urination && fatigue) {
    resultText = "⚠️ You may be showing signs of **Diabetes**.";
    resultClass = "warning";
  }

  // Blood pressure symptoms
  else if ((dizzy && headache) || chestPain) {
    resultText = "⚠️ You may be experiencing **Blood Pressure issues**.";
    resultClass = "warning";
  }

  // Cold or Flu
  else if ((fever && cough) || (soreThroat && cough)) {
    resultText = "⚠️ You may have symptoms of a **Cold or Flu**.";
    resultClass = "warning";
  }

  resultDiv.className = `result ${resultClass}`;
  resultDiv.innerText = resultText;
}
