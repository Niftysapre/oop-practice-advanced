// задание 1
// class Employee {
//  constructor(name, salary, coeffs) {
//   this.name = name;
//   this.salary = salary;
//   this.coeffs = coeffs;
//  }
 
//  getTotal() {
//   return this.coeffs.reduce((res, coeff) =>
//   { return res + this.salary * coeff;
//   }, 0);
//  }
// }

// let employee = new Employee('john', 1000, [1.1, 1.2, 1.3]);
// let total = employee.getTotal();
// console.log(total);

// задание 2
// class Employee {
//  #name;
 
//  constructor(name) {
//   this.#name = name;
//  }
//  getName() {
//   return this.#name;
//  }
// }
// let user = new Employee('john');
// console.log(user.getName);

// задание 3
// class Employee {
//  constructor(salary) {
//   this.salary = salary;
//  }
//  GetSalary() {
//   return this.salary + '$';
//  }
// }

// задание 4
// import Employee from './User.js';
// let user = new Employee('john');

// задание 5
// import Employee from './User.js';

// export default class Programmer extends Employee {
 
// }

// задание 6 
// class Employee {
//  get name() {
//   console.log('get');
//  }
//  set name() {
//   console.log('set');
//  }
// }
// let name = Employee.name;
// Employee.name = 'john';

// задание 7
// class Employee {
//  #name;
 
//  constructor(name) {
//   this.#name = name;
//  }
 
//  get name() {
//   return this.#name;
//  }
// }
// let user = new Employee('john');
// let name = user.name;
// console.log(name);
// user.name = 'eric';

// задание 8
class Employee {
 #name;
 
 set name(name) {
  if (name.length > 0) {
   this.#name = name;
  } else {
   throw new Error('name is incorrect');
  }
 }
 get name() {
  return this.#name;
 }
}
let user = new Employee;
user.name = 'john';
user.name = '';