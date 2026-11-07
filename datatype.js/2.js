// Non primitive data type
// object
// as django developer thik it like an object similar to python dictionary
// and object stores data in key value pairs

//1. object
const student={
    name:"Sachin",
    age:23,
    address:"Butwal",
    isStudent:true
};

console.log(student.name);
console.log(student.age);
console.log(student.address);

console.table([student.name, student.age, student.address])