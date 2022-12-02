let budget = document.getElementById("total-budget");
let alottedAmount = document.getElementById("user-amount");
const budgetBtn = document.getElementById("budget-plan");
const amountBtn = document.getElementById("budget-btn");
const budgetCategory = document.getElementById("budget-cat");
const total = document.getElementById("amt");
const expense = document.getElementById("amt-expense");
const balanceValue = document.getElementById("bal-amt");
budgetBtn.addEventListener("click", () => {
    let expenditure = parseInt(alotedAmount.value);
    let sum = parseInt(amt-expense.innerText) + expenditure;
  expense.innerText = sum;
    const totalBalance = tempAmount - sum;
  balanceValue.innerText = totalBalance;
  budgetCategory.value = "";
  alotedAmount.value = "";
});