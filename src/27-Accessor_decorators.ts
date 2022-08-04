function Captialize(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original?.call(this);
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    }
}

class PerosnFullName {
    constructor(public firstName: string, public lastName: string) {}

    @Captialize
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const fullName = new PerosnFullName('Arvind', 'Kushwaha');
console.log(fullName.fullName);
