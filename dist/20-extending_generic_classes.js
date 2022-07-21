"use strict";
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
}
// pass on the generic type parameter
class CompressibleStore extends Store {
    compress() { }
}
let store = new CompressibleStore();
store.compress();
store.add({ name: 'arv', price: 33 });
//============= //
/**
 * Restrict the generic type parameter
 */
class SearchableStore extends Store {
    find(name) {
        return this._objects.find(obj => obj.name === name);
    }
}
//============= //
/**
 * Fix the generic type parameter
 */
class ProdcutStore extends Store {
    filterByCategory(category) {
        return [];
    }
}
