
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value as Function;
    descriptor.value = function(message: string) {
        console.log('Before original');
        originalMethod.call(this, message);
        console.log('After original');
    }
}

class PersonD {
    @Log
    say(message: string) {
        console.log(`Person says ${message}`)
    }
}

const personD = new PersonD();
personD.say("Hello")