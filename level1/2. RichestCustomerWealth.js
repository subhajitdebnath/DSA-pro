// Richest Customer Wealth
// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

var maximumWealth = function(accounts) {
    maxTotal = 0;
    total = 0;

// checking for individual account balance
accounts.forEach(person => {
    person.forEach(account => {
        total += account;
    });
  // checking for greater balance
  if(maxTotal < total) {
      maxTotal = total;
  }
  total = 0;
})
return maxTotal;
};


const accounts = [[1,2,3],[3,2,1]];
const richest = maximumWealth(accounts);
console.log(richest);