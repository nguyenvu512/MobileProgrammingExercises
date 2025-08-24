export class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sound(): string {
        return "Some generic animal sound";
    }
}
export class Cat extends Animal {
    sound(): string {
        return "Meow!";
    }
}
export class Dog extends Animal {
    sound(): string {
        return "Woof!";
    }
}