
// Decorator is a javascript function which gets called in javascript runtime and pass the class to the function.
// in tsconfig.js 'experimentalDecorators' should be true.

// decorator has only one instance created, doesn't matter how many class intances are there.

function Component(constructor: Function) {
    console.log("here docorator gets called");
    constructor.prototype.id = Date.now();
    constructor.prototype.calculateTax = () => {
        console.log('here calculating the tax');
    }
}

function Component1(value: number) {
    return (constructor: Function) => {
        console.log("here docorator1 gets called");
        constructor.prototype.options = value;
        constructor.prototype.id = Date.now();
        constructor.prototype.calculateTax = () => {
            console.log('here calculating the tax');
        }
    }
}

@Component
@Component1(1)
class ProfileComponent {
}