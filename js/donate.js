document.getElementById('Donate-now')
.addEventListener('click', function(event) {
    event.preventDefault();

    const donationInput = document.getElementById('donation-input');
    const donationValue = donationInput.value.trim();
    const donationAmount = parseFloat(donationValue);

    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }

    // Update top balance
    const balanceDisplay = document.getElementById('main-balance');
    const currentBalanceText2 = balanceDisplay.innerText.replace('BDT', '').trim();
    const DisplayBalance = parseFloat(currentBalanceText2);
    const newBalance2 = DisplayBalance - donationAmount;
    balanceDisplay.innerText = `${newBalance2.toFixed(2)} BDT`;

    // Update card balance
    const balanceElement = document.getElementById('total-balance');
    const currentBalanceText = balanceElement.innerText.replace('BDT', '').trim();
    const currentBalance = parseFloat(currentBalanceText);
    const newBalance = currentBalance + donationAmount;
    balanceElement.innerText = `${newBalance.toFixed(2)} BDT`;

    // Clear input
    donationInput.value = '';
});
