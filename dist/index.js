"use strict";
class Friuts {
    constructor(id, name, type) {
        this.id = id;
        this.name = name;
        this.type = type;
        console.log(`I am eating ${id} ${name} in Constructor which is ${type} food !!`);
    }
}
const firstFruite = new Friuts(1, 'Banana', 'healthy');
