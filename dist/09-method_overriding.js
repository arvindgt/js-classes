"use strict";
class Person1 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    walk() {
        console.log('walking');
    }
}
class Student1 extends Person1 {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('Taking a test');
    }
}
class Teacher extends Person1 {
    // constructer is inherited
    // enable 'noImplicitOverride' to see override error if not added 'override' keyword.
    get fullName() {
        return `Professor ${super.fullName}`;
    }
}
const teacher = new Teacher('Arvind', 'Kushwaha'); // constructor is inherited
console.log(teacher.fullName);
