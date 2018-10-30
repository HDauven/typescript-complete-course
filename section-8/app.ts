// Simple generic
function echo(data: any) {
  return data;
}
console.log(echo("Max"));
console.log(echo(27));
console.log(echo({ name: "Max", age: 27 }));

// Better generic
function betterEcho<T>(data: T) {
  return data;
}
console.log(betterEcho("Max").length);
console.log(betterEcho<number>(27));
console.log(betterEcho({ name: "Max", age: 27 }));

// Built-in generics
const genericArray: Array<number> = [1.94, 2.33];
genericArray.push(-2.99);

// Arrays
function printAll<T>(args: T[]) {
  args.forEach(element => console.log(element));
}
printAll(["Apple", "Banana", "Citrus"]);

// Generic types
const echo2: <T>(data: T) => T = echo;
console.log(echo2<string>("Something"));

// Generic class
class SimpleMath<T extends number | string, U extends number | string> {
  baseValue: T;
  multiplyValue: U;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
