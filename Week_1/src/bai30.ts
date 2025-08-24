//30. Create a class School with list of Students and Teachers. Add method to display info.
class Student {
    constructor(public name: string, public age: number) {}
}
class Teacher {
    constructor(public name: string, public age: number, public subject: string) {}
}
class School {
    private students: Student[] = [];
    private teachers: Teacher[] = [];

    addStudent(student: Student): void {
        this.students.push(student);
    }

    addTeacher(teacher: Teacher): void {
        this.teachers.push(teacher);
    }

    displayInfo(): void {
        console.log("Students:");
        this.students.forEach(student => {
            console.log(`Name: ${student.name}, Age: ${student.age}`);
        });

        console.log("Teachers:");
        this.teachers.forEach(teacher => {
            console.log(`Name: ${teacher.name}, Age: ${teacher.age}, Subject: ${teacher.subject}`);
        });
    }
}