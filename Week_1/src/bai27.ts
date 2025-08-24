//27. Create a class Teacher that extends Person. Add subject attribute and introduce method.
class Person {
    constructor(public name: string, public age: number) {}
}
export class Teacher extends Person {
    constructor(name: string, age: number, public subject: string) {
        super(name, age);
    }

    introduce(): string {
        return `Hello, my name is ${this.name}, I am ${this.age} years old and I teach ${this.subject}.`;
    }
}