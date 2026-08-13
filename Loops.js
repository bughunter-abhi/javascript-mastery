//For Loop...
let sum = 0;
for(let i = 1; i <= 10; i++){
    sum += i;
}    
console.log("The Sum is 1 to 10 is ",sum);
console.log("------------------------------------------");

//While Loop...
let attempt = 1;
while(attempt <= 5){
    console.log("Attempt Number :",attempt);
    attempt++;
}
console.log("------------------------------------------");

//Do-While Loop...
let i = 1;
do{
    console.log("N0. :",i);
    i++;
}
while(i <= 5);
console.log("------------------------------------------");

//for - of Loop...  {Its can use with Arrays and String but not directly used with Object}        -->  Its gives Values;
let superCars = ["BMW","Bugatti Tourbillon", "Pagani Huayra", "Koenigsegg Jesko", "Lamborghini Aventador", "Toyota Supra","Ford Mustang"];
for(let cars of superCars){
    console.log(cars);
}
console.log("------------------------------------------");

//for - in Loop...  {Its can mainly used with object only}          --> Its gives Keys;
let employee = {
    firstName : "Abhishek",
    lastName : "Bhandari",
    age : 21,
    role : "Software Developer"
}
for(let key in employee){
    console.log(key);
}
console.log("------------------------------------------");

//forEach Loop...   {Its little bit similar to for - of Loop but Its mainly for Arrays Only}  --> Can't be use Break and continue in this 
// but you can use Break and continue with for - of Loop;
let Number = [10,20,30,40,50];
let Sum = 0;
Number.forEach((num) => {
    Sum += num;
});
console.log("Sum of 10,20,30,40,50 :",Sum);