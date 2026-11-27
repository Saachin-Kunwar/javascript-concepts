// Paramaters and arguments

function greet(name) { //name = Parameter (function ले receive गर्ने variable)
    console.log("Hello " + name);
}

greet("Ram"); // "Ram" = Argument (function call गर्दा पठाइएको actual value)
greet("Shyam");

function addNumbers(a,b){
    console.log(a + b);
}
addNumbers(10,20);
addNumbers(50,60);


// default parameters
function greet(name="Guest"){
    console.log("Hello" +  name);
}
greet("Riya");
greet();

//function expression
