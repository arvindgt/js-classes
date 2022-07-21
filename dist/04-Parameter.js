"use strict";
class Account2 {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        // this.id = id;
        // this.owner = owner;
        // this._balance = balance;
    }
    deposite(amount) {
        if (amount <= 0) {
            throw new Error("Invalid Amount");
        }
        this._balance += amount;
    }
    getbalance() {
        return this._balance;
    }
}
const account2 = new Account2(1, 'Arvind', 3000000);
console.log(account2.getbalance());
