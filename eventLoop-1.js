const fs = require("fs");
const https = require("https");
const crypto = require("crypto");
const a = 2;
setImmediate(() => {console.log("Set-Immediate Called...")});

crypto.pbkdf2("password", "salt", 50000, 50,"sha512", (err, key) => {  

    console.log("Async Crypto Called...")
})

Promise.resolve("Promise Called Second Time...").then(console.log);

https.get(
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
  (res) => {
    console.log("Fetch API Data Successfully");
  }
);


fs.readFile("./file.txt", "utf8", () => {
    setTimeout(() => {
        console.log("Timer Expired third time");
    });
    process.nextTick(() => {
        console.log("3rd nextTick Called...")
    });
    console.log("Close The Poll phase");
})

setTimeout(() => {
    console.log("first Timer Expired");
}, 0);

process.nextTick(() => {
    setImmediate(() => {console.log("Set-Immediate Called Second Time...")});
    Promise.resolve("Promise Called...").then(console.log);
    console.log("2nd NextTick Called...")
});

let data = fs.readFileSync("./file.txt", "utf16le");
console.log("Read file Properly :", data);

function square(a){
    return a**a;
}
console.log("Square of a =",square(a));

setTimeout(() => {
    console.log("Timer expired second time");
},3000);
console.log("Last line of The Program");

// <-----Output----->
