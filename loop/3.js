// for...of loop
// for of loop use garera array or string jasta iterable values ka elememts sachakai access garna sakcha
// when to use array ka values yak yak garera chayencha taba for ..of dherai use huncha
const students = ["Ram", "Shayam","Hari"];
for (const student of students){
    console.log(student);
}

// for..in loop
// for..in object ka keys access garna use huncha
console.log("for..in loop");
const student={
    name:"Ram",
    age:20,
    marks:90
};

for (const key in student){
    console.log(key);
}


// break and continue 
// break lea loop lai rokcha 
// continur iteration skip garera arko iteration ma jancha
for (let i=1; i<=5; i++){
    if(i===3){
        break;
    }
    console.log(i);
}
