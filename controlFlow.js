//Control Flow decides which code should execute and when.
/*Think of it like traffic signals.
🟢 Green → Go
🟡 Yellow → Wait
🔴 Red → Stop
JavaScript uses conditions to control the flow.*/
const prompt = require("prompt-sync")();

//Condition Statement...
let Marks = parseInt(prompt("Enter a Marks: "));
if(Marks >= 90){
    console.log("Grade A");
}
else if(Marks >= 75){
    console.log("Grade B");
}
else if(Marks >= 55){
    console.log("Grade C");
}
else if(Marks >= 33){
    console.log("Grade D");
}
else{
    console.log("Fail");
}

//Switch Case...
let day = parseInt(prompt("Enter a Day: "));
switch(day){
    case 1: console.log("Monday");
    break; 
    case 2: console.log("Tuesday");
    break; 
    case 3: console.log("Wednesday");
    break;
    case 4: console.log("Thursday");
    break; 
    case 5: console.log("Friday");
    break; 
    case 6: console.log("Saturday");
    break;  
    case 7: console.log("Sunday");
    break; 
    default:
        console.log("Invalid Day");
}

// Ternary Operator...
let age = 20;
let Output = age >= 18 ? "Adult" : "Minor";
console.log(Output);
