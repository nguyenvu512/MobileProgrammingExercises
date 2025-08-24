export class Account {
    public accountNumber: string;
    readonly accountHolder: string;
    private balance: number;

    constructor(accountNumber: string, accountHolder: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }

    getBalance(): number {
        return this.balance;
    }

    deposit(amount: number): number {
        if (amount > 0) {
            this.balance += amount;
        }
        return this.balance;
    }

    withdraw(amount: number): number {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        }
        return this.balance;
    }
}