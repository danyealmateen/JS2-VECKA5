const createAccount = (name, amount) => {
  return {
    name: name,
    balance: amount,
  };
};

const account1 = createAccount("Savings", 1000);
console.log(account1);

const withdraw = (account, amount) => {
  return {
    name: account.name,
    balance: account.balance - amount,
  };
};

const account2 = withdraw(account1, 500);
console.log(account2);

const deposit = (account, amount) => {
  return {
    name: account.name,
    balance: account.balance + amount,
  };
};

const account3 = deposit(account2, 1000);
console.log(account3);
