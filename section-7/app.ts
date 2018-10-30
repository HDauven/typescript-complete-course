interface NamedPerson {
  firstName: string;
  age?: number; // optional property
  [propName: string]: any; // property where name is unknown beforehand.
  greet(lastName: string): void;
}

function greeter(person: NamedPerson) {
  console.log(`Hello, ${person.firstName}`);
}

function changeName(person: NamedPerson) {
  person.firstName = "Anna";
}

const individual: NamedPerson = {
  firstName: "max",
  age: 27,
  greet(lastName: string): void {
    console.log(`Hi, I am ${this.firstName} ${lastName}`);
  }
};

class Human implements NamedPerson {
  [propName: string]: any;
  firstName: string;
  age?: number | undefined;
  greet(lastName: string): void {
    console.log(`Hi, I am ${this.firstName} ${lastName}`);
  }
}

greeter(individual);

// Interface for function types
interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(val1: number, val2: number) {
  return (val1 + val2) * 2;
};

// Interface inheritance
interface AgedPerson extends NamedPerson {
  age: number;
}

const oldPerson: AgedPerson = {
  age: 27,
  firstName: "Max",
  greet(lastName: string) {
    console.log(
      `Hi, I am ${this.firstName} ${lastName} and I'm ${this.age} years old.`
    );
  }
};
console.log(oldPerson);
oldPerson.greet("imus");
