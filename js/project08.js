const calculatorTip = () => {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        document.getElementById('result').textContent = 'Please Enter The value';
        return;
    }

    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;

    document.getElementById('result').innerHTML = `
      <p>Tip Amount: $${tipAmount.toFixed(2)}</p>
      <p>Total Amount: $${totalAmount.toFixed(2)}</p>
    `;

}
