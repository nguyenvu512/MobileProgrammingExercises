class person {
    name: string;
    age: number;
    grade: string;
    constructor(name: string, age: number, grade: string) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}
export class Student extends person {
    constructor(name: string, age: number, grade: string) {
        super(name, age, grade);
    }
}
export function get(student: Student): string {
    return `Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`;
}