"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposite(amount) {
        if (amount <= 0) {
            throw new Error("Invalid Amount");
        }
        this.balance += amount;
    }
}
const Acc = new Account(1, 'Arvind', 3000000);
console.log(Acc instanceof Account);
console.log(Acc.id, Acc.owner, Acc.balance);
Acc.deposite(150000);
console.log(Acc.balance);
