class Scales {
  products: Product[];

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
console.log(apple.getName());
console.log(apple.getScale());

let tomato: Tomato = new Tomato("tomato1", 100);
console.log(tomato.getName());
console.log(tomato.getScale());

let cucumber: Cucumber = new Cucumber("cucmber1", 250);
console.log(cucumber.getName());
console.log(cucumber.getScale());
