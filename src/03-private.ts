class Account1 {
    readonly id: number;
    owner: string;
    private _balance: number;
    nickname?: string;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }

    deposite(amount: number): void {
        if (amount <= 0) {
            throw new Error("Invalid Amount");
        }
        this._balance += amount;
    }

    private calculateTax() {
        console.log(this._balance);
    }

    getbalance(): number {
        return this._balance;
    }
}

const account = new Account1(1, 'Arvind', 3000000);

// console.log(account._balance); // error TS2341: Property '_balance' is private and only accessible within class 'Account1'.

console.log(account.getbalance());
