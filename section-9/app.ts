function logged(constructorFn: Function) {
  console.log(constructorFn);
}

@logged
class PersonA {
  constructor() {
    console.log("hi!");
  }
}

// Factory
function logging(value: boolean) {
  return value ? logged : null;
}

@logging(true)
class Car {}

// Advanced
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  };
}

@printable
class PlantA {
  name = "Green plant";
}
const plantA = new PlantA();
(<any>plantA).print();

// Method decorator
function editable(value: boolean) {
  return function(
    target: any,
    propName: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.writable = value;
  };
}

// Property decorator
function overwritable(value: boolean) {
  return function(target: any, propName: string): any {
    const newDescriptor: PropertyDescriptor = {
      writable: value
    };
    return newDescriptor;
  };
}

class SecretProject {
  //@overwritable(false)
  projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }

  @editable(false)
  calculateBudget() {
    console.log(1000);
  }
}

const project = new SecretProject("super project");
project.calculateBudget();
// project.calculateBudget = function() {
//   console.log(2000);
// };
console.log(project);

// Parameter decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log("Target: ", target);
  console.log("Method: ", methodName);
  console.log("ParamIndex: ", paramIndex);
}

class Course {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  printStudentNumbers(mode: string, @printInfo printAll: boolean) {
    if (printAll) {
      console.log(10000);
    } else {
      console.log(2000);
    }
  }
}
const course = new Course("Super Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);
