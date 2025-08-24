export class BankAccount {
    accountNumber: string;
    accountHolder: string;
    balance: number;

    constructor(accountNumber: string, accountHolder: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Withdrawal of ${amount} successful. New balance: ${this.balance}`);
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawal of ${amount} successful. New balance: ${this.balance}`);
        } else {
            console.log("Insufficient funds");
        }
    }

    getBalance(): number {
        return this.balance;
    }
}