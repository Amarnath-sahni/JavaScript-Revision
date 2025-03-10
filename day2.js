//function
function greet(name){
    return `Hello, ${name}! `;
}

console.log("Amarnath");

// Function Expressions (Anonymous Functions)
const add = function (a,b){
    return a+b;
}

console.log(add(2,3));
//arrow function
const multipy=(a,b)=>a+b;
console.log(multipy(4,5));

//Closures in JavaScript
//A closure is a function that remembers the variables from
// its outer scope even after the outer function has finished execution.
function outerFunction(outerVar){
    return function innrFunction(innerVar){
        console.log(`Outer: ${outerVar}, inner: ${innerVar}`);
    };
}

const  newFunc = outerFunction("hello");
newFunc("world");
//Here, innerFunction remembers outerVar, even after outerFunction has executed.

//Practical Use Case: Data Encapsulation
function counter(){
    let count =0;

    return function(){
        count++;
        console.log(`count :${count}`);
    };
}

const increment = counter();
increment();
increment();

//Callbacks in JavaScript
function processUserInput(name,callback){
    console.log(`processing ${name}....`);
    callback(name);
}

function callback(name){
    console.log(`hello, ${name}`)
}

processUserInput("Amarnath", callback);

//Asynchronous callback Example(setTimeout)
setTimeout(()=>{
    console.log("Execute after 2 seconds");
},2000);


//Promises in JavaScript
// A Promise is an object that represents the eventual 
// completion or failure of an asynchronous operation.
const fetchData = new Promise((resolve,reject)=>{
    let success = true;
    setTimeout(()=>{
        if(success) resolve("data fatches successsfully!");
        else reject("Error Fetching data!");
    },2000);
})

fetchData.then((result)=>console.log(result))
fetchData.catch((error)=>console.error(error))
.finally(()=>console.log("operation completed"));


//chaining promises
function first(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(`first function done`),1000);

    });
}

function second(message){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(`${message},second function done`),1000);

    });
}

first()
.then(second)
.then(console.log)
.then(console.error);

//async and await is clear way to work with Promise

function fetchData1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Fetched Data"), 2000);
    });
}

async function getData(){
    console.log("fatching....");
    const data = await fetchData1();
    console.log(data);//Fetches Data
}

getData();

//Handling Errors with Try-Catch
async function fetchData2(){
    try{
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data);
    }catch(error){
        console.log("errot fateching Data", error);
    }
}
fetchData2();