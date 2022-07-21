interface Result<T> {
    data: T | null,
    error: string | null
}

function fetch<T>(url: string): Result<T> {
    return { data: null, error: null}
}

interface User {
    username: string
}

interface Product {
    title: string
}

const result = fetch<User>('url');
result.data?.username; // here it automatically suggests 'username', i.e. an attribute of User interface

const result1 = fetch<Product>('url');
result1.data?.title; // here it automatically suggests 'title', i.e. an attribute of Product interface
