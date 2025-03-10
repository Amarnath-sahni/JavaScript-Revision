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
  


//home work based on the day first knowlage
function calculate(num1, operator, num2){
    if(typeof num1 !== "number" || typeof num2!=="number"){
        return "Error :input must be number";
    }

    const operations = {
        '+':(a,b)=>a+b,
        '-':(a,b)=>a-b,
        '*':(a,b)=>a*b,
        '/':(a,b)=>b!==0? a/b:"Error:devision by zero",
    }

    return operations[operator]? operations[operator](num1,num2): "error Invalid operator! Use +, -, *, or /";
}
console.log(calculate(10, '+', 5));  // Output: 15
console.log(calculate(10, '-', 5));  // Output: 5
console.log(calculate(10, '*', 5));  // Output: 50
console.log(calculate(10, '/', 5));  // Output: 2
console.log(calculate(10, '/', 0));  // Output: "Error: Division by zero!"
console.log(calculate(10, '%', 5));  // Output: "Error: Invalid operator!"
console.log(calculate("10", '+', 5)); 

//Array Destructuring
const arr1 = [1, 2, 3];
const [a,b,c] = arr1;
console.log(a,b,c);

//Object Destructuring
const person1 = { name: "Amarnath", age: 21 };
const { name1, age1 } = person1;
console.log(name, age); // Output: Amarnath 21

// Spread & Rest Operators (...)
//The spread operator is used to copy or expand elements,
//  while the rest operator collects remaining values.
const numbers = [1,2,3,6,7,8,9];
const newNumber = [...numbers,4,5];
console.log(newNumber);

//Rest Operator (Collecting)
function sum(...args){
    return args.reduce((acc,num)=>acc+num, 0);//acc +=num; using reduce
}

console.log(sum(1,2,3,4,5));

