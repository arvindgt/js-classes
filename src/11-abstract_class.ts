abstract class Shape {
    constructor(public color: string) {}

    // render(): void {}
    abstract render(): void;
}

class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color);
    }

    override render(): void {
        
    }
}

// const shape = new Shape('red'); // Cannot create an instance of an abstract class
// shape.render();