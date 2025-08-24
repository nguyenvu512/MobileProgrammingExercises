//23. Create an interface Payment with method pay(amount). Implement CashPayment and CardPayment.

interface Payment {
    pay(amount: number): string;
}
export class CashPayment implements Payment {
    pay(amount: number): string {
        return `Paid ${amount} in cash.`;
    }
}
export class CardPayment implements Payment {
    pay(amount: number): string {
        return `Paid ${amount} using card.`;
    }
}