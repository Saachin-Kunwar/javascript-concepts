// 1 if statements
// if statements lea condition true vaye matra code execute garcha

let age =20;
if(age>=18){
    console.log("you can vote")
}

// if .. else
let ages=20;
if (age>=18){
    console.log("You can vote !")
}else{
    console.log("You cannot vote !")
}

// if..elseif..elseif..else
let marks=75;

if(marks>=80){
    console.log("Grade A")
}else if (marks>=60){
    console.log("Grade B")
}else if (marks>=40){
    console.log("Grade C")
}else{
    console.log("Fail")
}

// nested if statements
// yauta if vitra arko if rakhnu lai nested if vanincha

let isLoggedIn= false;
let isAdmin = true;
if (isLoggedIn){
    console.log("User is Logged In");

    if (isAdmin){
        console.log("Welcome Admin");
    }else{
        console.log("Welcome User");
    }
} else{
    console.log("Please Login first");
}


// switch statements
// jaba yautai variable ko value aanusar dherai bikalppa yauta execute garnu parcha, taba switch updayogi huncha
let day =3;
switch(day){
    case 1:
        console.log("SUnday");
        break;
    
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    default:
        console.log("Invalida day");
    
}