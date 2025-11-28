const result = document.getElementById('result');

const calculateBmi = () => {
      const  bmiAge = document.getElementById('bmiAge').value;
      const  bmiWeight = parseFloat(document.getElementById('bmiWeight').value);
      const  bmiHeight = parseFloat(document.getElementById('bmiHeight').value / 100);

      if (isNaN(bmiAge) || bmiAge <= 0) {
         result.innerText = 'Please Enter the value';
         return;
      }

      if (isNaN(bmiWeight) || bmiHeight <=0 || isNaN(bmiHeight) || bmiHeight <=0) {
         result.innerText = 'Please Enter The value';
         return;
      }

      const bmi = bmiWeight / (bmiHeight * bmiHeight);

      const bmiCategory = getBMICategory(bmi);

      result.innerHTML = `
         <p> your are age: ${bmiAge}</p>
         <p> your are Weight: ${bmi.toFixed(1)}</p>
         <p> Your are: ${bmiCategory}</p>
      `;

}

const getBMICategory = (bmi) => {
      if (bmi < 18.5) {
          return 'UnderWeight';
    }
    else if (bmi >=18.5 && bmi < 25) {
          return 'Normal Weight';
    } else if (bmi >= 25 && bmi < 30) {
       return 'OverWeight';
    }
    else{
      return 'Obesity';
    }
}
