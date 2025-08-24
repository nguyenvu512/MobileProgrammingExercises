//node dist/index.js
import { Student, get } from "./bai1";
import { Student as Bai2Student, get as getBai2 } from "./bai2";
import { Car, getCarDetails } from "./bai3";
import { Rectangle } from "./bai4";
import { BankAccount } from "./bai5";
import { Product } from "./bai8";
console.log(get(new Student("200Lab", 20)));
console.log(getBai2(new Bai2Student("200Lab", 20, "A")));
console.log(getCarDetails(new Car("Toyota", "Corolla", 2020)));
console.log(new Rectangle(5, 10).area());
console.log(new Rectangle(5, 10).perimeter());
var account = new BankAccount("123456", "John Doe", 1000);
console.log(account.getBalance());
console.log(account.deposit(500));
console.log(account.withdraw(200));

var account2 = new BankAccount("654321", "Jane Doe", 2000);
var account3 = new BankAccount("111222", "Alice Smith", 1500);
var accounts: BankAccount[] = [account, account2, account3];
accounts.forEach((acc) => {
    console.log(`Account Number: ${acc.accountNumber}, Balance: ${acc.getBalance()}`);
});

var product1 = new Product("Laptop", 1500, 2);
var product2 = new Product("Smartphone", 800, 3);
var product3 = new Product("Candy", 30, 5);
var product4 = new Product("Book", 20, 10);
var products: Product[] = [product1, product2, product3, product4];
products.forEach((p) => {
    if (p.price > 100) {
        console.log(`Product: ${p.name}, Price: ${p.price}, Quantity: ${p.quantity}, Total Price: ${p.totalPrice()}`);
    }
});

//17. Write a singleton Logger class that logs messages to console.
import { Logger } from "./bai17";
const logger = Logger.getInstance();
logger.log("This is a log message from the singleton Logger class.");

//18. Create a static class MathUtil with methods add(), subtract(), multiply(), divide().
import { MathUtil } from "./bai18";
console.log(`Addition: ${MathUtil.add(5, 3)}`);
console.log(`Subtraction: ${MathUtil.subtract(5, 3)}`);
console.log(`Multiplication: ${MathUtil.multiply(5, 3)}`);
console.log(`Division: ${MathUtil.divide(5, 3)}`);

//19. Demonstrate method overriding using polymorphism with Animal and subclasses.
import { Animal } from "./bai11";
import { Cat } from "./bai11";
import { Dog } from "./bai9";
const animals: Animal[] = [
    new Cat("Whiskers", 2),
    new Dog("Buddy", 3)
];
animals.forEach(animal => {
    console.log(`${animal.name} (${animal.age} years old) says: ${animal.sound()}`);
});

