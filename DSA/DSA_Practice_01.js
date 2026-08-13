const prompt = require("prompt-sync")();
let ARRAY = [42, -15, 8, 0, 2, 63, -28, 91, 34, -76, 12,-58, 99, 2, -7, -26, 83, 6, -39, 72, 14, -65,30, -87, 53, 4, 0, 
    9, 96, -24, 70, 11, -44, 80, 2, -61, 35, 93, -18, 50, -7, -26, 68, 41, -7, 8, 32, 9, 16, 57, -73, 20, 4, 88];

//Write a function that search for an element in a array and return the index, if the number is not present then return -1.
console.log("1st Question");
function searchElement(x, ARRAY){
    for(let i = 0; i < ARRAY.length; i++){
        if(ARRAY[i] == x){
            return i;
        }
    }
    return -1;
}
let x = Number(prompt("Enter a number: "));
console.log(searchElement(x, ARRAY));

//Write a function that count or return the negative numbers in an Array.
console.log("2nd Question");
function countNegativeNumbers(ARRAY){
    let count = 0;
    let Result = ARRAY.filter((arr) => {
        return arr < 0;
    })
    return Result.length;
}
console.log("Total Negative Numbers in an Array =>",countNegativeNumbers(ARRAY));

//Write a function that identifies and returns duplicate elements present in an array.
console.log("3rd Question");
function countduplicateNumbers(){
    let Array = [20, 15, 34, 20, 7, 7, 34, 20, 42, 59, 34, 15, 42, 42, 34];
    let Result = Array.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr]++;
        } else {
            acc[curr] = 1;
        }
        return acc;
    }, {});

    return Result;
}
console.log(countduplicateNumbers());

//Write a function that returns the largest number in a Array.
console.log("4th Question");
function findLargestNum(ARRAY){
    let Output = ARRAY.reduce((acc, curr) => {
        if(acc > curr){
            curr = acc;
        }
        return curr;
    },-Infinity);
    return Output;
}
console.log("Largest Number In A Array :",findLargestNum(ARRAY));

//Write a function that returns the Second Largest number in a Array.
console.log("5th Question");
function SecondLargestNum(ARRAY){
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    for(let i = 0; i < ARRAY.length; i++){
        if(ARRAY[i] > firstLargest){
            secondLargest = firstLargest;
            firstLargest = ARRAY[i]
        }
        else if(ARRAY[i] > secondLargest){
            secondLargest = ARRAY[i];
        }
    }
    return secondLargest;
}
console.log("Second Largest Number In A Array :",SecondLargestNum(ARRAY));

//Write a function that returns the Smallest number in a Array. [Use While Loop];
console.log("6th Question");
function findSmallestNum(ARRAY){
    let Min = Infinity;
    let i = 1;
    while(ARRAY[i] < Min){
        Min = ARRAY[i];
        i++;
    }
    return Min;
}
console.log("Smaller Number In A Array :",findSmallestNum(ARRAY));


//Write a function that returns the Second Smallest number in a Array.
console.log("7th Question");
function secondSmallestNum(ARRAY){
    if(ARRAY.length < 2){
        return "Array should have atleast 2 Elements";        // User Can use that as a corner case.
    }
    let firstSmallest = Infinity;
    let secondSmallest = Infinity;
    for(const num of ARRAY){
        if(num < firstSmallest){
            secondSmallest = firstSmallest;
            firstSmallest = num;
        }
        else if(num < secondSmallest){
            secondSmallest = num;
        }
    }
    return secondSmallest;
}
console.log("Second Smaller Number In A Array :",secondSmallestNum(ARRAY));

//Write a program that return the count of digit in a number.
console.log("8th Question");
function countDigit(n){
    let count = 0;
    if(n == 0){
        return 1;
    }
    n = Math.abs(n);
   for(; n > 0; n = Math.floor(n / 10)){
        count = count + 1;
    }
    return count;
}
let num = Number(prompt("Enter a number to check its digits: "));
console.log("Number of digits: ",countDigit(num));

//Write a program to reverse the digits of a given number.
console.log("9th Question");
function reverseNumber(n){
    let nCopy = n;
    let reverse = 0;
    n = Math.abs(n);
    while(n > 0){
        let digit = Math.floor(n % 10);
        reverse = (reverse * 10) + digit;
        n = Math.floor(n / 10);
    }
    return (nCopy < 0) ? -reverse : reverse;
}
let Num = Number(prompt("Enter a number to reverse it: "));
console.log("Reversed number: ",reverseNumber(Num));

//Write a program to check whether a given number is a palindrome or not.
console.log("10th Question");
function isPalindrome(n){
    let nCopy = n;
    let reverse = 0;
    while(n > 0){
        let remainder = Math.floor(n % 10);
        reverse = (reverse * 10) + remainder;
        n = Math.floor(n / 10);
    }
    return nCopy == reverse ? "True: The number is a palindrome." : "False: The number is not palindrome."
}
let number = Number(prompt("Enter a number to check whether it is a palindrome: "));
console.log(isPalindrome(number));