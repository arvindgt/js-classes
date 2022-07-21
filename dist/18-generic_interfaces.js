"use strict";
var _a, _b;
function fetch(url) {
    return { data: null, error: null };
}
const result = fetch('url');
(_a = result.data) === null || _a === void 0 ? void 0 : _a.username; // here it automatically suggests 'username', i.e. an attribute of User interface
const result1 = fetch('url');
(_b = result1.data) === null || _b === void 0 ? void 0 : _b.title; // here it automatically suggests 'title', i.e. an attribute of Product interface
