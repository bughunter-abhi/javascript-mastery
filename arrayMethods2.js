//Array  -->  An array is a special variable that stores multiple values in a single place.
let numbers = [10, 20, 30, 40]; //Create a Array in simple way.
console.log(numbers);

let fruit = new Array("Apple", "Banana", "Mango"); //create an array using Array Constructor.
console.log(fruit);

//Array Methods ---
/*
Search --> find(), findIndex(), includes()
Transform --> map()
Filter --> filter()
Calculate --> reduce()
Check --> some(), every()
-----------------------------------------------
Add --> push(), unshift()
Remove --> pop(), shift()
Copy --> slice()
Combine --> concat()
Convert --> join()
Flatten --> flat()
Arrange --> sort(), reverse()
Modify --> splice()
*/

//Push, Pop, Unshift, Shift Method.
let fruits = ["Apple","Banana","Mango"];
console.log("Fruits Before any Methods :",fruits);

fruits.push("Grapes");
console.log("Push() : ",fruits);

fruits.pop();
console.log("pop() :",fruits);

fruits.unshift("Grapes");
console.log("unshift :",fruits);

fruits.shift("Grapes");
console.log("shift() : ",fruits);

//slice --> It's Returns a copy of part of an array.
let array = [10,20,30,40,50,60];
let slicing = array.slice(3);
let slicing2 = array.slice(3,5);
console.log("Silce :",slicing);
console.log("Silce :",slicing2);

//concat() --> Combines arrays.
let a = ["Hayabusa", "Ninja", "Ducati"];
let b = ["Kawasaki", "bmw", "yahama R1"];
let c = a.concat(b);
console.log("concat() :",c);

//join() -->  Converts array into a string.
let Cars = ["Buccati","BMW","Toyota Supra","Lamborgini", "Ford Mustang", "Pagani"];
let A = Cars.join("-");
console.log("join() :",A);

//include() --> Checks if an element exists.
let superBikes = ["Hayabusa", "Kawasaki", "Ducati"];
let B = superBikes.includes("Hayabusa");
console.log("include :",B);

//indexOf() --> Returns the position of an element.
let color = ["Red","Pink","Green","Yellow","Black","White","Gray"];
let C = color.indexOf("White");
console.log("indexOf() :",C);

//flat() --> Creates a single-level array from nested arrays.
let Arr = ["A", "B", ["C", "D"], ["E", "F"]];
let D = Arr.flat();
console.log("flat() :",D);

//Reverse() --> Reverses an array.
let arr = [100,200,300,400,500];
console.log(arr);
console.log("Reverse() : ",arr.reverse());

//sort();


//splice();