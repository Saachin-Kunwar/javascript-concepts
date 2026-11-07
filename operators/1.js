// operators are special symbols used to perform operators on values or varables
let a =5;
let v=10;
// additional operator
let result = a+v;
console.log(result);

// arithmetic operators
// modulus
console.log(10%3);
console.log(20%5);
// example even or odd
let num=10;
if(num % 2 == 0){
    console.log("Even number");
}
else{
    console.log("Odd number");
}

// Exponentional ()** it claculates power
console.log(2 **3);

//assignment operator
console.log("Assignment operator");
let marks =20;
marks +=40;
console.log(marks);

//comparision operator
console.log("Comparision operator");
console.log(5 == "5"); //It compares values after possible type conversion.
console.log(5 ==="5"); // It compares both value and data type without performing type coercion.
console.log(4 != "10");         // It compares values after possible type conversion.
console.log("Logical Operator");
let username = "Sachin";
let password = "12345";

if (username === "Sachin" && password === "12345") {
    console.log("Login successful");
} else {
    console.log("Invalid credentials");
}

console.log("Increment and decrement operator");
let count =6;
count++;
console.log(count);

console.log("Ternary operator");
let age = 20;

let ageCategory = age >= 18 ? "Adult" : "Minor";

console.log(ageCategory);

let guestUsername = null;

let greeting = guestUsername ?? "Guest";

console.log(greeting);

