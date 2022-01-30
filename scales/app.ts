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

  getNameList(): string[] {
    let names: string[] = [];
    this.products.map((product) => {
      names.push(product.name);
    });
    return names;
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

let apple1: Apple = new Apple("apple1", 200);
let apple2: Apple = new Apple("apple2", 50);

let tomato1: Tomato = new Tomato("tomato1", 100);
let tomato2: Tomato = new Tomato("tomato2", 80);

let cucumber: Cucumber = new Cucumber("cucumber1", 250);

let scales: Scales = new Scales();
scales.add(apple1);
scales.add(apple2);
scales.add(tomato1);
scales.add(tomato2);
scales.add(cucumber);
console.log(scales.getSumScale());
console.log(scales.getNameList());
