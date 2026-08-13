const prompt = require("prompt-sync")();
//Remove Duplicates from Sorted Array...
console.log("**1st Question...");
function removeDuplicates(){
    let arr = [0, 1, 1, 2, 2, 2, 3, 3, 5, 5, 5, 6, 6,];  
    let x = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[x] < arr[i]){
            x++;
            arr[x] = arr[i];
        }
    }
    return {
    Array: arr.slice(0, x + 1),
    "Length": x + 1
};
}
console.log(removeDuplicates());   //Output -->  Array: [0, 1, 2, 3, 5, 6] , Lenght: 6

//Remove Element 
console.log("**2nd Question...");
function removeElements() {
    let Arr = [0, 1, 2, 2, 3, 0, 4, 2], value = 2, x = 0;
    for (let i = 0; i < Arr.length; i++) {
        if (Arr[i] != value) {
            Arr[x] = Arr[i];
            x++;
        }
    }
    return {
        Array: Arr.slice(0, x),
        Length: x
    };
}
console.log(removeElements()); //    OUTPUT --> Array: [0,1,3,0,4], Length: 5

//
console.log("**3rd Question...");