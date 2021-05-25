let Color = Object.freeze({
  red: "red",
  black: "black",
  white: "white",
});

let Size = Object.freeze({
  small: "small",
  medium: "medium",
  large: "large",
});

class Product {
  constructor(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

// open for extraction, close form modification
class ProductFilter {
  filterByColor(products, color) {
    return products.filter((product) => product.color === color);
  }

  filterBySize(products, size) {
    return products.filter((product) => product.size === size);
  }
}

let apple = new Product("Apple", Color.red, Size.small);
let tree = new Product("Tree", Color.red, Size.large);
let house = new Product("House", Color.black, Size.large);

const products = [apple, tree, house];

console.log(new ProductFilter().filterByColor(products, Color.red));
