function submitDonation() {
  const investorName = document.getElementById('investorName').value;
  const donationAmount = parseInt(
    document.getElementById('donationAmount').value
  );

  // Check if the inputs are valid
  if (investorName && !isNaN(donationAmount) && donationAmount > 0) {
    // Save data to localStorage
    const existingData = JSON.parse(localStorage.getItem('donationData')) || [];
    existingData.push({ investorName, donationAmount });
    localStorage.setItem('donationData', JSON.stringify(existingData));

    // Reload the page to trigger the event listener
    location.reload();
  } else {
    alert('Invalid input. Please enter valid data.');
  }
}
