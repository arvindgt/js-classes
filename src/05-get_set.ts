class Account3 {
    nickname?: string;

    constructor(
        public readonly id: number, 
        public owner: string, 
        private _balance: number) {
    }

    deposite(amount: number): void {
        if (amount <= 0) {
            throw new Error("Invalid Amount");
        }
        this._balance += amount;
    }

    get balance(): number {
        return this._balance;
    }
}

const account3 = new Account3(1, 'Arvind', 3000000);
account3.deposite(101);

console.log(account3.balance);
