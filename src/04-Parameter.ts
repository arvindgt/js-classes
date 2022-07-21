class Account2 {
    // id: number;
    // owner: string;
    // private _balance: number;
    nickname?: string;

    constructor(public readonly id: number, public owner: string, private _balance: number) {
        // this.id = id;
        // this.owner = owner;
        // this._balance = balance;
    }

    deposite(amount: number): void {
        if (amount <= 0) {
            throw new Error("Invalid Amount");
        }
        this._balance += amount;
    }

    getbalance(): number {
        return this._balance;
    }
}

const account2 = new Account2(1, 'Arvind', 3000000);

console.log(account2.getbalance());
