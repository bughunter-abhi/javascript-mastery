//----------------------- ARRAY METHODS ----------------------//

// map()  --> Its create a new array bt transforming every elements;
let arr = [2,3,4,5,6];
let binary = arr.map((arr) => {
    return arr.toString(2);
})
console.log("Binary Numbers: ",binary);

// filter()  --> Its creates a new array containing only elements that satisfy a condition.
let arr2 = [20,55,12,45,99,68,34,11,17,38];
let filterList = arr2.filter((arr2) => {
    return arr2 % 2 == 0;
})
console.log("Numbers Which is Divisible by 2: ",filterList);

//reduce()   --> It's reduces an array into a single value.
let arr3 = [20,34, 40, 17, 22, 52, 34];
let output = arr3.reduce((acc, curr) => {      //acc -> Accumulator & curr -> Current
    if(curr > acc){                             
        acc = curr;                            ////Curr is basically a current value in a array & Accumulor is accumulate the value.
    }            
    return acc;           
},0);
console.log("Max Number :",output);

//find()  --> It's Returns the first matching element.
let arr4 = [10,72,20,25,30,45,50];
let Output = arr4.find((arr) => {
    return arr % 3 == 0;
})
console.log("First Number multiply by 3 :",Output);

//findIndex() --> It's Returns the index of the first matching element.
let arr5 = [3,6,9,12,15];
let Result = arr5.findIndex((arr) => {
    return arr == 12;
})
console.log("Index :",Result);

//some() --> Checks if at least one element satisfies the condition.
let Numbers = [20, 40, 60, 80, 100];
let result = Numbers.some((num) => {
    return num > 85;
})
console.log("Yes :",result);

//every() --> It's Checks if all elements satisfy the condition.
let res = Numbers.every((num) => {
    return num > 32;
})
console.log("No :",res);

//We can also Chaining The Map, filter, Reduce Method ---
const user = [
    {firstName : "Abhishek", lastName:"Bhandari", age : 21},
    {firstName : "Gaurav", lastName:"Rawat", age : 21},
    {firstName : "Ekta", lastName:"Kumari", age : 26},
    {firstName : "Pavetri", lastName:"Devi", age : 46},
    {firstName : "Pushkar", lastName:"Bhandari", age : 62}
]
const OUTPUT = user.reduce((acc, curr) => {
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
},{});
let finalOutput = user.filter((x) => x.age === 21).map((x) => x.firstName);
console.log(OUTPUT);
console.log(finalOutput);