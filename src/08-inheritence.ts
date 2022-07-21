class Person {
    constructor(public firstName: string, public lastName: string) {

    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    walk(): void {
        console.log('walking')
    }
}

class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    takeTest(): void {
        console.log('Taking a test');
    }
}

const student = new Student(1, 'Arvind', 'Kushwaha');

console.log(student.fullName);
console.log(student.walk());
console.log(student.takeTest());
