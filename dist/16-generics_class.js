"use strict";
class KeyValuePair1 {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
const pairNumber = new KeyValuePair1(1, 'Sam'); // it makes key as number value as string
const pairString = new KeyValuePair1('1', 'Sam'); // it makes key & value both as string
const pariDefault = new KeyValuePair1(1, 3); // if we do not explicitly define type then it observes values and make types by default
