//Callback Functions --> (A callback is a function passed into another function.)
//A callback function is a function that you give to another function so that it can be called later.
function greet(name, callback) {
    console.log("Hello", name);
    callback();
}
function welcome() {
    console.log("Welcome!");
}
greet("Abhishek", welcome);

//If you Understand, then look at below example...
const numbers = [1,2,3];

numbers.forEach(function(num){  //In this function - forEach() inside the function is called Callback Function.
    console.log(num);
});


//Higher-Order Functions --> A Higher-Order Function (HOF) is a function that:
/*1.accepts another function as an argument
2.returns another function.*/

//1st Example...
function calculate(operation) {
    return operation(10,20);
}
const result = calculate(function(a,b){
    return a+b;
});
console.log(result); //Output -> 30

//2nd Example...
function multiplyBy(x) {
    return function(y) {
        return x * y;
    };
}
const double = multiplyBy(2);
console.log(double(10)); //Output -> 20
//First Methods [map(), filter(), reduce(), find(), forEach()] are commonly Used in it.

//Recursion --> A function calling itself.
//1st Example...
function countdown(n){
    if(n === 0) return;
    console.log(n);
    countdown(n - 1);
}
countdown(5);

//2nd Example...
function factorial(n) {

    if (n === 1)
        return 1;

    return n * factorial(n - 1);
}

console.log(factorial(5));

//IIFE (Immediately Invoked Function Expression) --> Runs immediately after it is created.
(function () {
    console.log("Executed Immediately");
})(); //You cannot call this function separately because the second parentheses () are used to invoke it immediately.

//Why use IIFE?    -->    Before ES6 modules, developers used IIFEs to create a private scope.

(function () {

    let userName = "Abhishek";

    console.log(userName);

})();

//IIFE with Arrow Function...
(() => {

    console.log("Arrow IIFE");

})();

//Creating a Counter
const counter = (function () {

    let count = 0;

    return function () {

        count++;
        console.log(count);

    };

})();
counter();  //count is protected inside the IIFE.
counter();  //Outside code cannot directly modify count.
counter();  //The returned function can still access it.