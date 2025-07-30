const donationCards = document.querySelectorAll('.donation-card');

donationCards.forEach(card => {
    const donateButton = card.querySelector('#Donate-now');
    const donationInput = card.querySelector('#donation-input');
    const balanceElement = card.querySelector('#total-balance');

    donateButton.addEventListener('click', function (event) {
        event.preventDefault();

        const donationValue = donationInput.value.trim();
        const donationAmount = parseFloat(donationValue);

        if (isNaN(donationAmount) || donationAmount <= 0) {
            alert("Please enter a valid donation amount.");
            return;
        }

        // changes the top balance
        const balanceDisplay = document.getElementById('main-balance');
        const currentBalanceText = balanceDisplay.innerText.replace('BDT', '').trim();
        const mainBalance = parseFloat(currentBalanceText);
        const newMainBalance = mainBalance - donationAmount;
        balanceDisplay.innerText = `${newMainBalance.toFixed(2)} BDT`;

        // Update cards total balance
        const cardBalanceText = balanceElement.innerText.replace('BDT', '').trim();
        const cardBalance = parseFloat(cardBalanceText);
        const newCardBalance = cardBalance + donationAmount;
        balanceElement.innerText = `${newCardBalance.toFixed(2)} BDT`;

      // Add to correct history list
        const historyList = document.getElementById(`history-list-${index + 1}`);
        const donationTitle = card.querySelector('h3').innerText;
        const li = document.createElement('li');
        const now = new Date();
        li.innerText = `${donationAmount.toFixed(2)} BDT donated to "${donationTitle}"\nDate: ${now.toString()}`;
        historyList.appendChild(li);

        // Clear input
        donationInput.value = '';
    });
});
