export class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

}
export function get(student: Student): string {
    return `Name: ${student.name}, Age: ${student.age}`;
}