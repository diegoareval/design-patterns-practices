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

  filterByColorAndSize(products, color, size) {
    return products.filter((p) => p.color === color && p.size === size);
  }
}

class ColorSpecification {
  constructor(color) {
    this.color = color;
  }

  isSatisfied(item) {
    return item.color === this.color;
  }
}

class SizeSpecification {
  constructor(size) {
    this.size = size;
  }

  isSatisfied(item) {
    return item.size === this.size;
  }
}

class AndSpecification {
  constructor(...specs) {
    this.specs = specs;
  }

  isSatisfied(item) {
    return this.specs.every((x) => x.isSatisfied(item));
  }
}

class BetterFilter {
  filter(items, spec) {
    return items.filter((x) => spec.isSatisfied(x));
  }
}

let apple = new Product("Apple", Color.red, Size.small);
let tree = new Product("Tree", Color.red, Size.large);
let house = new Product("House", Color.black, Size.large);

const products = [apple, tree, house];

const bf = new BetterFilter();

console.log("filter red products");

for (let product of bf.filter(products, new ColorSpecification(Color.red))) {
  console.log(`${product.name} es verde`);
}

console.log("***************filter red products and large*************");
let andSpecification = new AndSpecification(
  new ColorSpecification(Color.red),
  new SizeSpecification(Size.large)
);
for (let product of bf.filter(products, andSpecification)) {
  console.log(`${product.name} es red`);
}
