class Account {
    id: number;
    owner: string;
    balance: number;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    deposite(amount: number): void {
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