const bill = document.querySelector('#bill-amount');
const tipPercentage = document.querySelector('#tip-percentage');
const calculate = document.querySelector('#calculate');
const total = document.querySelector('#total-bill');

calculate.addEventListener('click', (e) => {
    if( bill.value === "" || tipPercentage.value === ""){
        alert('Please Enter The Value');
        return;
    }
    else if(bill.value < 0 || tipPercentage.value < 0 ){
        alert("Please enter positive values");
        return;
    }
    const billAmount = parseFloat(bill.value);
    const tipPercent = parseFloat(bill.value);
    const tipAmount = (billAmount * tipPercent/100);
    const totalBill = billAmount + tipAmount;

    total.textContent = `Total Bill : ${totalBill}`;
});

