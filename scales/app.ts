class Scales {
  products: Product[];

  constructor() {
    this.products = [];
  }

  add(product: Product): void {
    this.products.push(product);
  }

  getSumScale(): number {
    let overallScale: number = 0;
    this.products.map((product) => {
      overallScale += product.scale;
    });
    return overallScale;
  }
}

class Product {
  name: string;
  scale: number;

  constructor(_name: string, _scale: number) {
    this.name = _name;
    this.scale = _scale;
  }

  getScale(): number {
    return this.scale;
  }

  getName(): string {
    return this.name;
  }
}

class Apple extends Product {
  constructor(_name: string, _scale: number) {
    super(_name, _scale);
  }
}

class Tomato extends Product {
  constructor(_name: string, _scale: number) {
    super(_name, _scale);
  }
}

class Cucumber extends Product {
  constructor(_name: string, _scale: number) {
    super(_name, _scale);
  }
}

let apple: Apple = new Apple("apple1", 200);

let tomato: Tomato = new Tomato("tomato1", 100);

let cucumber: Cucumber = new Cucumber("cucmber1", 250);

let scales: Scales = new Scales();
scales.add(apple);
scales.add(tomato);
scales.add(cucumber);
console.log(scales.getSumScale());
