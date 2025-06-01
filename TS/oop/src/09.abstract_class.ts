abstract class Shape {
    constructor(color: string){
        this._color = color;
    }

    private _color: string;
    abstract getArea(): number;
}

class Circle extends Shape {
    constructor(color: string, radius: number){
        super(color);
        this.radius = radius;
    }

    override getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    private radius: number;    
}

class Rectangle extends Shape {
    constructor(color: string, a: number, b: number){
        super(color);
        this._a = a;
        this._b = b;
    }

    override getArea(): number {
        return this._a * this._b;
    }

    private _a: number;
    private _b : number;
}



const circle = new Circle("red", 5);
console.log(circle.getArea());

console.log("---------------------------");

const rectangle = new Rectangle("blue", 4, 6);
console.log(rectangle.getArea())

console.log("---------------------------");

// const shape = new Shape("blue"); // ts error