console.log("It works!");

// array
let hobbies: any[] = ["cooking", "sports"];
hobbies = [100];

// tuples
let address: [string, number] = ["St. Street", 99];

// enum
enum Color {
  Gray,
  Red,
  Green,
  Blue
}

let myColor: Color = Color.Green;
console.log(myColor);

// functions
function returnMyName(name: string): string {
  return name;
}
console.log(returnMyName("hein"));

// void
function sayHello(): void {
  console.log("Hello!");
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
console.log(multiply(10, 3));

// function types
let myMultiply: (a: number, b: number) => number;
myMultiply = multiply;

// objects
let userData: { name: string; age: number } = {
  name: "max",
  age: 27
};

// type alias
type Complex = { data: number[]; output: (all: boolean) => number[] };

let complex: Complex = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.data;
  }
};

// union types
let myRealAge: number | string = 27;
myRealAge = "27";

// check types
let finalValue = "A string";
if (typeof finalValue == "string") {
  console.log("final value is a string");
}

// never
function neverReturns(): never {
  throw new Error("error");
}

// Nullable types
let canBeNull: number | null = 12;
canBeNull = null;
