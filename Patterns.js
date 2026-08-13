let n = 10;
//1.
for(let i = 0; i < n; i++){
    console.log("* ".repeat(i + 1));
}
console.log("=================================================================");

//2.
for(let i = 0; i < n; i++){
    console.log("* ".repeat(n));
}
console.log("=================================================================");

//3.
for(let i = 0; i < n; i++){
    console.log("* ".repeat(n-i));
}
console.log("=================================================================");

//4.
for(let i = 0; i < n; i++){
    console.log("  ".repeat(n - i - 1) + "* ".repeat(i));
}
console.log("=================================================================");

//5.
for(let i = 0; i < n; i++){
    let bag = "";
    for(j = 0; j < n; j++){
        if(i == 0 || j == 0 || i == (n-1) || j == (n-1)){
            bag += "* ";
        }
        else{
            bag += "  ";
        }
    }
    console.log(bag);
}
console.log("=================================================================");

//6.
for(let i = 0; i < n; i++){
    console.log("  ".repeat(i) + "* ".repeat(n - i));
}
console.log("=================================================================");

//7.
for(let i = 0; i < n; i++){
    console.log("  ".repeat(n - i) + "* ".repeat((2 * i) + 1));
}
console.log("=================================================================");

//8.
for(let i = 0; i < n; i++){
    let bag = "";
    for(let j = 0; j < (i + 1); j++){
        bag += "  ";
    }
    let width = 2 * (n - i) - 1;
    for(let j = 0; j < width; j++){
        if(j == 0 || j == (width - 1) || i == 0){
            bag += " *";
        }
        else{
            bag += "  ";
        }
    }
    console.log(bag);
}
console.log("=================================================================");

//9.
for(let i = 0; i < n; i++){
    let bag = "";
    for(j = 0; j < (n - i); j++){
        bag += "  ";
    }
    for(j = 0; j < (2 * i) + 1; j++){
        if(i === (n - 1) || j === 0 || j === (2 * i)){
            bag += "* "; 
        }
        else{
            bag += "  ";
        }
    }
    console.log(bag);
}
console.log("=================================================================");

//10.
for(let i = 0; i < n; i++){
    console.log("  ".repeat(i) + "* ".repeat((2 * n) - ((i + 1) * 2) + 1));
}

//11.
for(let i = 0; i < n; i++){
    cosnole.log()
}