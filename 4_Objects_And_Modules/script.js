const person = {
    age : 30,
    name :"Riyaz",
    address:{
        city:"Kolkata",
        country:"IN"
    },
    isActive :true,
    books : ["Book 1","Book 2"],
    walk : function(){
        console.log("Person is walking",this.name);
    }
};

console.log(person);

console.log(person.name);
console.log(person["address"].city);

person.name = "Anuj";

console.log(person.name);

console.log(person);
person.walk();

// import {greetings as greetFn,PI_VALUE} from "./greet.js";
import greet from "./greet.js";
// greetFn();
// console.log(PI_VALUE);

// import addFn from "./greet.js";

// console.log(addFn(4,5));
greet.greetings();
greet.PI;
console.log(greet.add(7,8));
