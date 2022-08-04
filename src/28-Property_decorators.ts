function MinLength(length: number) {
    return (target: any, PropertyName: string) => {
        let value: string;
        const descriptor: PropertyDescriptor = {
            get() { return value; },
            set(newValue: string) {
                if (newValue.length < length) {
                    throw new Error(`${PropertyName} should be at least ${length} character long`)
                }
                value = newValue;
            }
        }
        Object.defineProperty(target, PropertyName, descriptor);
    }
}

class validateForm {
    @MinLength(4)
    password: string;

    constructor(password: string) {
        this.password = password;
    }
}

const userData = new validateForm('1235');
console.log(userData.password);
