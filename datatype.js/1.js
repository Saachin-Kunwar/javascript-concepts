// data type
// Primitive data types: string, number, boolean, null, undefined, symbol

// 1.String
 let firstname= "Saachin";
 let lastname="Kunwar";
 console.table([firstname,lastname]);

 // Backticks `` are particularly useful for template literals
console.log("This is demo of backticks");
 let name="Sachin";
 let age=22;
 console.log(`My name is ${name} and I am ${age} years old.`);

 console.log("Number  ldattype");
 //2. Number
 let ages = 22;
 let price= 99.99;
 let temp=-5;

 console.log(typeof ages);
 console.log(typeof price);
 console.log(typeof temp);


 // Pratical django relatred js example

 console.log("Django example with JS");

let isAuthenticated = true;

if (isAuthenticated) {
    console.log("Welcome to dashboard");
} else {
    console.log("Please login");
}