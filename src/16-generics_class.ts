class KeyValuePair1<K, V> {
    constructor(public key: K, public value: V) {}
}

const pairNumber = new KeyValuePair1<number, string>(1, 'Sam'); // it makes key as number value as string
const pairString = new KeyValuePair1<string, string>('1', 'Sam'); // it makes key & value both as string
const pariDefault = new KeyValuePair1(1, 3); // if we do not explicitly define type then it observes values and make types by default
