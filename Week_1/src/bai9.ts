interface Animal {
    name: string;
    age: number;
    sound(): string;
}
export class Dog implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sound(): string {
        return "Woof!";
    }
}