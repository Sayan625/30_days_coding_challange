//# closoure
function Parent(){
    let variable="I am variable of  parent  function accesed by child function"
    function child(){
        // child function can access parent functions variables
        console.log(variable) 
    }
    return child()
}
Parent()
//#endregion


//# All for loops
//for loop
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    // Code to be executed for each element in the array
    console.log(numbers[i]);
}

//for...in Loop (for Objects)
const person = {
    name: "John",
    age: 30,
    job: "Engineer"
};

for (let key in person) {
     // Code to be executed for each property in the object
    if (person.hasOwnProperty(key)) {
        console.log(key + ": " + person[key]);
    }
}

//for...of Loop (for Arrays and Iterable Objects)
const fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
    // Code to be executed for each element in the iterable
    console.log(fruit);
}

//forEach method

const shakes = ["apple shake", "banana shake", "milk shake"];

shakes.forEach(function(shake) {
    // Code to be executed for each element
    console.log(shake);
});

//#endregion


//# Map method 
const newArray = array.map(function(element, index, array) {
    // Code to transform the element
    return element*2; // The transformed element is added to the new array
});

console.log(newArray)
//#endregion

//#Scope 

// Global Scope: Variables or functions declared in the global scope are accessible from 
// anywhere in code, including within functions or code blocks. 
// Local Scope: Variables or functions declared within a block of code, 
// such as within a function or a block created by curly braces {}, have local scope

//#endregion

//#Typecasting 

//Implicit Type Conversion (Type Coercion): JavaScript performs automatic type conversion when you perform operations on values of different data types. This is often referred to as type coercion.

var num = 5; 
var str = "10"; 
// JavaScript coerces num to a string and performs string concatenation
var result = num + str; 
console.log(result);

//Explicit Type Conversion: You can explicitly convert between data types using functions or operators. Here are some common methods:

//String(): This function converts a value to a string.
var num = 42;
// Convert number to a string
var str = String(num); 
console.log(str); 


//Number(): This function converts a value to a number.
var str = "42";
// Convert string to a number
var num = Number(str); 
console.log(num); 


// Boolean(): This function converts a value to a boolean.
var value = "hello";
// Convert a non-empty string to true
var boolValue = Boolean(value); 
console.log(boolValue); 

// Using Unary Operators(+): can convert a string to a number
var str = "42";
var num = +str; // Convert string to a number
console.log(num); 
//#endregion