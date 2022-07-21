class Friuts {
    constructor(public id: number, public name: string, private type: string) {
        console.log(`I am eating ${id} ${name} in Constructor which is ${type} food !!`);
    }
}

const firstFruite = new Friuts(1, 'Banana', 'healthy');