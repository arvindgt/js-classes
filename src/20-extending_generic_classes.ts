interface ProductG {
    name: string,
    price: number
}

class Store<T> {
    protected _objects: T[] = [];

    add(obj: T): void {
        this._objects.push(obj);
    }
}

// pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
    compress() {}
}

let store = new CompressibleStore<ProductG>();
store.compress();
store.add({name: 'arv', price: 33});

//============= //
/**
 * Restrict the generic type parameter
 */
class SearchableStore<T extends ProductG> extends Store<T> {
    find(name: string): T | undefined {
        return this._objects.find(obj => obj.name === name);
    }
}

//============= //
/**
 * Fix the generic type parameter
 */
class ProdcutStore extends Store<Product> {
    filterByCategory(category: string): Product[] {
        return [];
    }
}
