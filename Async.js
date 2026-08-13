const fs = require("fs");
const https = require("https");

console.log("Start the Program");

var a = 10098;
var b = 45773;

https.get(
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
  (res) => {
    console.log("Fetch API Data Successfully");
  }
);

// Synchronous read
const data = fs.readFileSync("./file.txt", "utf8");  ///Blocking The main Thread
console.log("Synchronous File Data:", data);

setTimeout(() => {
    console.log("SetTimeout Called After 3 Seconds");
}, 3000);

// Asynchronous read
fs.readFile("./file.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Async File Data:", data);
});

setTimeout(() => {  // It will only be called once call stack main thread is empty.
    console.log("SetTimeout Called After 0 Seconds");
}, 0);

function multiply(a, b) {
    return a * b;
}

let c = multiply(a, b);
console.log("Multiplication of a & b is", c);

//output...
/*Start the Program
Synchrounous File Data : ----
Multiplication of a & b is : --
SetTimout Called After 0 Seconds
Async File Data : ----
Fetch [API]Data Successfully
SetTimout Called After 3 Seconds*/