class Person1 {
    constructor(public firstName: string, public lastName: string) {

    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    walk(): void {
        console.log('walking')
    }
}

class Student1 extends Person1 {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    takeTest(): void {
        console.log('Taking a test');
    }
}

class Teacher extends Person1 {
    // constructer is inherited

    // enable 'noImplicitOverride' to see override error if not added 'override' keyword.
    override get fullName(): string {
        return `Professor ${super.fullName}`;
    }
}

const teacher = new Teacher('Arvind', 'Kushwaha'); // constructor is inherited
console.log(teacher.fullName);
