//Function Declaration --> A Function Declaration is the standard way to create a function.
function functionName() {
    // code    --  Its a function declaration when you just declare any function.
} 

//Function Expression  -->  A Function Expression stores a function inside a variable.
const a = function () {
    console.log("Its called called Function expression , when you store a function in a Variable");
};
a();

//Arrow Functions --> Introduced in ES6. 
const multiply = (a, b) => {
    return a * b;   // Arrow functions are just a newer, shorter syntax for writing functions introduced in ES6
};

console.log(multiply(5, 6));

//Parameters & Arguments 
function introduce(name, age) {  // name & age is a Parameter.
    console.log(name, age);
}

introduce("Abhishek", 22);   // the declaration like Abhishek & 22 is a Argument.

//Default Parameters --> Used when no value is passed.
function greet(name = "Guest") {
    console.log("Hello", name);
}

greet(); // Output -> Hello Guest

//Rest Parameters (...) --> Collect multiple arguments into a single array.
function Rest(...language){
    console.log(language);
}
Rest("Javascript", "Java", "Golan", "Rust");

//Spread Operator (...) --> Spread expands arrays or objects.
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr1 , ...arr2];
console.log(arr3);  // Output --> [1,2,3,4,5,6];


//Rest Operator   V/S   Spread Operator
function show(...numbers) {}  // --> Collect Values {Rest Operator};

const copy = [...arr];  //  --> Expand Values {Spread Operator};