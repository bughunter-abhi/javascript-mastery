//The nullish coalescing operator is used to provide a default value when a variable is null or undefined.

let username = null;
let name = username ?? "Guest";
console.log(name);   // Guest

let age;
let userAge = age ?? 18;
console.log(userAge);  //18


//Difference between || and ??

/*The OR operator (||) uses the default value for any falsy value (0, false, "", null, undefined).
   The nullish operator (??) uses the default value only for null and undefined.*/

let value1 = 0;

console.log(value1 || 10); // 10
console.log(value1 ?? 10); // 0

let value2 = false;

console.log(value2 || true); // true
console.log(value2 ?? true); // false
