// Project: Student Management and result system
// features:
/* 
1 Student को name, age र marks राख्ने।
2 Student pass भयो कि fail भयो check गर्ने।
3 Marks अनुसार grade दिने।
4 Age अनुसार eligible छ कि छैन check गर्ने।
5 Student active छ कि inactive छ check गर्ने।
6 Switch प्रयोग गरेर student को department देखाउने।
7 Nested if प्रयोग गरेर scholarship eligibility check गर्ने। */

const student={
    name:"Ram",
    age:20,
    marks:85,
    department:"IT",
    attendance:90,
    isActive:true
};
console.log("====STUDENT REPORT=====");
//1. Validate student information
if (!student.name){
    console.log("Student name is required!");
}else if (student.age <=0){
    console.log("Invalid age");
}else if(
    Number.isNaN(student.marks) ||
    student.marks <0 ||
    student.marks >100
){
    console.log("Invalid marks");
}else{
    console.log("Student information is valid");
    //2. Check age eligibility
    if(student.age >=18){
        console.log("Age: Eligible");
    }else{
        console.log("Age:Not Eligible");
    }

    //3. Check active status
    if (student.isActive){
        console.log("Account: Active");
    }else{
        console.log("Account: Inactive")
    }

    //4. Calculate grade
    if(student.marks >=80){
        console.log("Grade: A");
    }else if (student.marks >= 60){
        console.log("Grade: B");
    }else if (student.marks >= 40){
        console.log("Grade: C");
    }else{
        console.log("Result: Fail");
    }

    // 5 scholorship eligibility (nested if)
    if (student.marks >=80){
        if (student.attendance >= 85){
            if (student.isActive){
                console.log("Scholorship: Approved!");
            }else{
                console.log("Scholorship: Account inactivate");
            }
            
        }else{
            console.log("Scholorshio: Low Attendance");
        }
    }else{
        console.log("Scholorshio: Insufficient marks");
    }
    // 6 department (switch)
    switch(student.department){
        case "IT":
            console.log("Department: Information technology");
            break;
        
        case "CS":
            console.log("Department: Computer Science");
            break;
        case "BCA":
            console.log("Department: BCA");
            break;
         default:
            console.log("Department: Unknown");
    }
}