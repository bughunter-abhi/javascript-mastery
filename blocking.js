const crypto = require("crypto");
const fs = require("fs");
const https = require("https");

let arr3 = [20,34, 40, 17, 22, 52, 34];
console.log("Start The Program");

setTimeout(() => {  //Trust Issue
    console.log("SetTimeout Called After 0 Seconds");
}, 0);

// Async read
crypto.pbkdf2("password", "salt", 50000, 50,"sha512", (err, key) => {   //Password Based key Derivative function...

    console.log("Async Crypto Called...")
})

// Blocking File Read
const data = fs.readFileSync("./file.txt", "utf8");  ///Blocking The main Thread
console.log("Synchronous File Data:", data);

//Async readFile
fs.readFile("./file.txt", "utf8",(err,data) => {
    console.log("Async File Data:", data);
})

setTimeout(() => {
    console.log("SetTimeout Called After 3 Seconds");
}, 3000);

https.get(
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
  (res) => {
    console.log("Fetch API Data Successfully");
  }
);

// Synchronous Crypto
const key = crypto.pbkdf2Sync("password", "salt", 50000, 50, "sha512");
console.log("Synchronous Crypto Called...");

//Find Max number
let output = arr3.reduce((acc, curr) => {      //acc -> Accumulator & curr -> Current
    if(curr > acc){                             
        acc = curr;                            ////Curr is basically a current value in a array & Accumulor is accumulate the value.
    }            
    return acc;           
},0);
console.log("Max Number :",output);

//Output----
/*Start The Program
Synchronous File Data: Hey! My name is Abhishek.
I Learn MERN to become a one of the best software developer.
Synchronous Crypto Called...
Max Number : 52
SetTimeout Called After 0 Seconds
Async Crypto Called...
Async File Data:Hey! My name is Abhishek.
I Learn MERN to become a one of the best software developer.
Fetch API Data Successfully
SetTimeout Called After 3 Seconds*/