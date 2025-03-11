//JavaScript Modules & Error Handling
import {add, substract} from './math3.js';
import sayHELLO from './main3.js';

console.log(add(3,5));
console.log(substract(3,5));

console.log(sayHELLO("Amarnath"));

//error handling 
try {
    let result =10/0;
console.log(result);
}catch(error){
    console.log(':an error occured',error.message);
}

//throwing custom Error
function devide(a,b){
    if(b==0) throw new Error("connt divide by Zero");
    return a/b;
}

try {
    console.log(devide(10,0));
}catch(error){
    console.log(error.message);
}

//finally block
try{
    console.log("Trying....");
    throw new Error("Somthing want wrong!");
}catch(error){
    console.log("Caught:", error.message);
}finally{
    console.log("Cleanup or final steps.");
}

//Handling Asynchronous Errors (Promises & async/await)
new Promise((resolve, reject)=>{
    let success=false;
    success?resolve("success"):reject("Failure");
})

.then((msg)=>console.log(msg))
.catch((err)=>console.log("Error:",err));

async function fetchData(){
    try{
        let response = await fetch("Invalid-url");
        let data = await response.json();
        console.log(data);
    }catch(error){
        console.log("Fetch error:", error.message);
    }
}

fetchData();

