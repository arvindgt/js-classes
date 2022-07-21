"use strict";
/**
 * if we want to make key as number then need to follow below
 */
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
const pair1 = new KeyValuePair(1, 'Sam');
// pair1.key. //=> all number methods suggested
/**
 * if we want to make key as string then need to follow below
 */
class StringKeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
const pair2 = new StringKeyValuePair('1', 'Sam');
// pair2.key. // => all string methods suggested
/**
 * The problem statement ==> if we need to keep 'key' as different types at different places then we need to create a separate class for each type.
 */ 
