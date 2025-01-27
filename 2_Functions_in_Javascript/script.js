function greet(firstName){
    console.log(firstName,"I am greeting");
    return firstName+"Hello";
}

greet("Riyaz");

const res = greet("Anuj");
console.log(res);

greet(12345)


function multiply(a,b){
    console.log("multiply",a,"and",b);
    return a*b;
}

console.log(multiply(4,5));


// Arrows Functions
const multiply1 = (a,b)=>{
    console.log("multiply",a,"and",b);
    return a*b;
}

console.log(multiply1(3,5));


const functionGreeting = function greeting(){
    console.log("greeting");
}

functionGreeting();


// Default Parameter
 const riyaz = (name="Learner")=> console.log("Hello Riyaz",name);
 riyaz();
 riyaz("Mehak")


 // Create Calculator
 const calculate = (a,b,operation)=>{
    return operation(a,b);
 }

 function add(a,b){
    return a+b;
 }

 const result = calculate(4,5,add);
 console.log(result);

 const multiplyRes = calculate(4,5,(a,b)=>a*b);
 console.log(multiplyRes);


 const multiple = (a)=>{
    return (b)=>a*b;
 }

 const double = multiple(2); // creating a functions that double anythings
 const resMultiple = double(231);
 console.log("resMultiple",resMultiple);

 const triple = multiple(3); // creating a functions that triple anythings

 const resTriple = triple(6);
 console.log("triple anyhtings",resTriple);


 console.log(this);

 const obj = {
    age:34,
    walk(){
        console.log(this);
    }
 }

 obj.walk();