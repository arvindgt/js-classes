"use strict";
// Decorator is a javascript function which gets called in javascript runtime and pass the class to the function.
// in tsconfig.js 'experimentalDecorators' should be true.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// decorator has only one instance created, doesn't matter how many class intances are there.
function Component(constructor) {
    console.log("here docorator gets called");
    constructor.prototype.id = Date.now();
    constructor.prototype.calculateTax = () => {
        console.log('here calculating the tax');
    };
}
function Component1(value) {
    return (constructor) => {
        console.log("here docorator1 gets called");
        constructor.prototype.options = value;
        constructor.prototype.id = Date.now();
        constructor.prototype.calculateTax = () => {
            console.log('here calculating the tax');
        };
    };
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component,
    Component1(1)
], ProfileComponent);
