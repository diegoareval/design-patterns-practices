class Shape {

}

class Circle extends Shape { 
    constructor(radius = 0)
    {
        super()
        this.radius = radius; 
    }

    resize(factor)
    {
        this.radius *=factor;
    }

    toString()
    {
        return `a circle of Radious ${this.radius}`;
    }
}

class ColoredShape extends Shape {
    constructor(shape, color) {
        super()
        this.shape = shape;
        this.color = color;
    }

    toString(){
        return `${this.shape.toString()} has the color ${this.color}`;
    }
}

class TransparentShape extends Shape {
    constructor(shape, transparency)
    {
        super();
        this.shape = shape;
        this.transparency = transparency;
    }

    toString()
    {
        return `${this.shape.toString()} has ${this.transparency * 100.0}% transparency`
    }
}

let circle = new Circle(2);
console.log(circle.toString());
let redCircle = new ColoredShape(circle, "red");
console.log(redCircle.toString());

let redHalfCircle = new TransparentShape(redCircle, 0.5);
console.log(redHalfCircle.toString());