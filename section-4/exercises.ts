// Exercise 1
const double = (value: number): number => {
  return value * 2;
};
console.log(double(10));

// Exercise 2
const greet = (name: string = "max"): void => {
  console.log(`Hello, ${name}`);
};
greet();
greet("Anna");

// Exercise 3
const numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercise 4
let newArray = [55, 20];
newArray.push(...numbers);
console.log(newArray);

// Exercise 5
const testResults = [3.89, 2.99, 1.38];
// const [result1, result2, result3] = testResults;
// console.log(result1, result2, result3);
console.log(...testResults);

// Exercise 6
const scientist = { firstName: "Will", experience: 12 };
const { firstName, experience } = scientist;
console.log(firstName, experience);
