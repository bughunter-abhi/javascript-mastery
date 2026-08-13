let a = 5;  // Binary: 0101
let b = 3;  // Binary: 0011

console.log(a & b);   // Bitwise AND: 1
console.log(a | b);   // Bitwise OR: 7
console.log(a ^ b);   // Bitwise XOR: 6
console.log(~a);      // Bitwise NOT: -6
console.log(a << 1);  // Left shift: 10
console.log(a >> 1);  // Right shift: 2
console.log(a >>> 1); // Unsigned right shift: 2

/*Important Note: Bitwise operators work on the binary representation of numbers.
If you find this concept difficult to understand, please refer to the truth tables of AND, OR, and XOR operations.
Understanding these truth tables will make it easier to understand how bitwise operators work in JavaScript.*/