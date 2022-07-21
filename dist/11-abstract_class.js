"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
    }
}
// const shape = new Shape('red'); // Cannot create an instance of an abstract class
// shape.render();
