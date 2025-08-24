class Employee {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }
}
export class Manager extends Employee {
    private department: string;

    constructor(name: string, age: number, department: string) {
        super(name, age);
        this.department = department;
    }

    public getDepartment(): string {
        return this.department;
    }
}
export class Developer extends Employee {
    private programmingLanguage: string;

    constructor(name: string, age: number, programmingLanguage: string) {
        super(name, age);
        this.programmingLanguage = programmingLanguage;
    }

    public getProgrammingLanguage(): string {
        return this.programmingLanguage;
    }
}