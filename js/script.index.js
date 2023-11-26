// Load data from localStorage
const donationData = JSON.parse(localStorage.getItem('donationData')) || [];

// Calculate total funds
const totalFunds = donationData.reduce(
  (sum, donation) => sum + donation.donationAmount,
  0
);

// Display total funds
document.getElementById(
  'totalFundsDisplay'
).innerText = `Total Funds: GHS ${totalFunds}`;

// Display list of investors
const investorsList = document.getElementById('investorsList');
donationData.forEach((donation) => {
  const listItem = document.createElement('li');
  listItem.textContent = `${donation.investorName}: GHS ${donation.donationAmount}`;
  investorsList.appendChild(listItem);
});
