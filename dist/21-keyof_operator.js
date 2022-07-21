"use strict";
class Store1 {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    // T is Product
    // keyof T ==> 'name' | 'price'
    find(property, value) {
        return this._objects.find(obj => obj[property] === value);
    }
}
let store1 = new Store1();
store1.add({ name: 'a', price: 1 });
store1.find('name', 'a');
store1.find('price', 1);
// store1.find('nonExistingProperty', 'a');
