interface ProductTM {
    name: string,
    price: number
}

type RadonlyProduct = {
    readonly [K in keyof ProductTM]: ProductTM[K]
}

let productTm: RadonlyProduct = {
    name: 'a',
    price: 1
}

// productTm.name = 'b'; // this throws compilation error because it's readonly

/**
 * Type mapping for generic
 */

type ReadOnly<T> = {
    readonly [K in keyof T]: T[K]
}

let productTm1: ReadOnly<ProductTM> = {
    name: 'a',
    price: 1
}

type Optional<T> = {
    readonly [K in keyof T]?: T[K]
}

type Nullable<T> = {
    readonly [K in keyof T]: T[K] | null
}
