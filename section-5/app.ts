// classes - methods and fields
class Person {
  name: string;
  private type: string = "";
  protected age: number = 27;

  constructor(name: string, public username: string) {
    this.name = name;
  }

  printAge() {
    console.log(this.age);
    this.setType("old guy");
  }

  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const person = new Person("Max", "maxZZ");

console.log(person);
person.printAge();

// inheritance
class Max extends Person {
  // name: string = "max";
  constructor(username: string) {
    super("max", username);
    this.age = 31;
  }
}

const max = new Max("maximus");
console.log(max);

// Getters & Setters
class Plant {
  private _species: string = "Default";

  get species(): string {
    return this._species;
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = "Default";
    }
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "Green plant";
console.log(plant.species);

// Static properties & methods
class Helpers {
  static PI: number = 3.14;
  static calculateCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calculateCircumference(8));

// Abstract classes
abstract class Project {
  projectName: string = "default";
  budget: number;

  constructor(budget: number) {
    this.budget = budget;
  }

  abstract changeName(name: string): void;

  calculateBudget(): number {
    return this.budget * 1.21;
  }
}

class ITProject extends Project {
  constructor(budget: number) {
    super(budget);
  }

  changeName(name: string): void {
    this.projectName = name;
  }
}

let newProject = new ITProject(1000);
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);

// Singleton
class Singleton {
  private static instance: Singleton;

  private constructor(public readonly name: string) {}

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton("The only one");
    }
    return Singleton.instance;
  }
}
let singleton = Singleton.getInstance;
