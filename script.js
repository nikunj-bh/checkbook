let balance = 0;
const balanceDisplay = document.getElementById('balance-container');
const transactionsTable = document.querySelector('#transactions tbody');

function addTransaction() {
  const amountInput = document.getElementById('amount');
  const descriptionInput = document.getElementById('description');
  const typeSelect = document.getElementById('type');

  const amount = parseFloat(amountInput.value);
  const description = descriptionInput.value.trim();
  const type = typeSelect.value;

  if (isNaN(amount) || !description) {
    alert("Please enter a valid amount and description.");
    return;
  }

  const value = type === 'withdraw' ? -amount : amount;
  balance += value;

  const tr = document.createElement('tr');
  tr.classList.add(type); // for color styling
  tr.innerHTML = `
    <td>${type.toUpperCase()}</td>
    <td>${description}</td>
    <td>$${Math.abs(value).toFixed(2)}</td>
    <td>$${balance.toFixed(2)}</td>
  `;
  transactionsTable.appendChild(tr);

  balanceDisplay.textContent = balance.toFixed(2);
  if (balance < 0) {
  balanceDisplay.style.color = 'red';
} else {
  balanceDisplay.style.color = 'green';
}

  amountInput.value = '';
  descriptionInput.value = '';
}
