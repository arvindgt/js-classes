"use strict";
class Person2 {
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
class Student2 extends Person2 {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('Taking a test');
    }
}
class Teacher2 extends Person2 {
    // constructer is inherited
    // enable 'noImplicitOverride' to see override error if not added 'override' keyword.
    get fullName() {
        return `Professor ${super.fullName}`;
    }
}
class Principal2 extends Person2 {
    get fullName() {
        return `Principal ${super.fullName}`;
    }
}
printNames([
    new Student2(1, 'Arvind', 'Kushwaha'),
    new Teacher2('ArvindT', 'KushwahaT'),
    new Principal2('ArvPrincipal', 'kk')
]);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
