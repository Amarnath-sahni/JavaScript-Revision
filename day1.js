let x = 10;
x = 20; // valid

const y = 30;
// y = 40; // Error: Assignment to constant variable.
const arr = [1, 2, 3];
arr.push(4); // valid, but can't reassign `arr`

const name = 'Amarnath';
const age = 21;
const message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message); // Output: Hello, my name is Amarnath and I am 21 years old.

const multiline = `This is a
multi-line
string.`;
console.log(multiline);

//Arrow Functions
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

const square = x => x * x;
console.log(square(5)); // Output: 25

const person = (name, age) => ({ name, age });
console.log(person('John', 30)); // Output: { name: 'John', age: 30 }

function man(name) {
    this.name = name;
    setTimeout(() => {
      console.log(this.name); // Uses `this` from Person, prints the name correctly.
    }, 1000);
  }
  
  const Man = new man('Amarnath');
  
  const calculateArea = radius => {
    const area = Math.PI * radius * radius;
    return `The area of a circle with radius ${radius} is ${area.toFixed(2)}.`;
  };
  
  console.log(calculateArea(5)); // Output: The area of a circle with radius 5 is 78.54.
  