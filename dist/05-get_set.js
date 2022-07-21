"use strict";
class Account3 {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposite(amount) {
        if (amount <= 0) {
            throw new Error("Invalid Amount");
        }
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
}
const account3 = new Account3(1, 'Arvind', 3000000);
account3.deposite(101);
console.log(account3.balance);
