const Prompt = require("prompt-sync")();
//Write a function that search for an element in a array and returns the index, if the element is not present in a Array then just return -1.
function searchElement(num){
   let Array = [4, 16, 8, 0, 33, 15, 20, 27];
   for(let i = 0; i < Array.length; i++){
      if(Array[i] == num){
         return Array[i];
      }
   }
}
let num = prompt("Emter a Numebr to Verify, its inside a array or not :");
console.log(searchElement(num));