/* const bank = (owner) => {
  balance = 0;
  return (amount) => {
    balance += amount;
    return balance;
  };
}; */

const bank = (owner) => {
  balance = 0;
  return {
    deposit: (amount) => {
      balance += amount;
      return balance;
    },
    withdraw: (amount) => {
      balance -= amount;
      return balance;
    },
  };
};
const MofizBank = bank("Mofiz");
console.log(MofizBank.deposit(100));
console.log(MofizBank.deposit(300));
console.log(MofizBank.deposit(50));
console.log(MofizBank.balance);
console.log(MofizBank.deposit(200));
console.log(MofizBank.withdraw(100));
console.log(MofizBank.withdraw(200));
