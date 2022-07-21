
function wrapInArray<T>(value: T) {
    return [value]
}

const numbers = wrapInArray(1);
const numbers1 = wrapInArray('1');
