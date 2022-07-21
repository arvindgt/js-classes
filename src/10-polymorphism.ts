class Person2 {
    constructor(public firstName: string, public lastName: string) {

    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    walk(): void {
        console.log('walking')
    }
}

class Student2 extends Person2 {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    takeTest(): void {
        console.log('Taking a test');
    }
}

class Teacher2 extends Person2 {
    // constructer is inherited

    // enable 'noImplicitOverride' to see override error if not added 'override' keyword.
    override get fullName(): string {
        return `Professor ${super.fullName}`;
    }
}

class Principal2 extends Person2 {
    override get fullName(): string {
        return `Principal ${super.fullName}`;
    }
}

printNames([
    new Student2(1, 'Arvind', 'Kushwaha'),
    new Teacher2('ArvindT', 'KushwahaT'),
    new Principal2('ArvPrincipal', 'kk')
])

function printNames(people: Person[]) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
