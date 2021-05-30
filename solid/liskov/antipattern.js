class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  getArea() {
    return this._width * this._height;
  }

  toString() {
    return `${this._width}*${this._height}`;
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }

  set width(value) {
    this._width = value;
  }

  set height(value) {
    this._height = value;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }

  set width(value) {
    this._width = this._height = value;
  }

  set height(value) {
    this._height = this._width = value;
  }
}

let useIt = function(rc){
    let width = rc._width;
    rc.height = 10;
    console.log(`expected area: ${10*width}`+
    ` got : ${rc.getArea()}`);
}

let rc = new Rectangle(2, 3);
console.log(rc.toString());
useIt(rc);
let square = new Square(5);
useIt(square);
console.log(square.toString());
square.width = 10;
console.log(square.toString());
