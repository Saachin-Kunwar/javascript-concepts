
// Student Management Project

const student = {
    name: "Saachin",
    age: 22,
    marks: 85,
    attendance: 90,
    department: "IT",
    isActive: true
};

// Function Declaration
function calculationGrade(marks) {
    if (marks >= 80) {
        return "A";
    } else if (marks >= 60) {
        return "B";
    } else if (marks >= 40) {
        return "C";
    } else {
        return "Fail";
    }
}

// Multiple Parameters and Return
function checkScholarship(marks, attendance, isActive) {
    if (marks >= 80 && attendance >= 85 && isActive) {
        return "Approved";
    }
    return "Not Approved";
}

// Default Parameter
function greetStudent(name = "Guest") {
    return `Welcome, ${name}!`;
}

// Function Expression
const getDepartmentMessage = function(department) {
    if (department === "IT") {
        return "Information Technology";
    } else if (department === "CS") {
        return "Computer Science";
    } else if (department === "BCA") {
        return "Bachelor of Computer Applications";
    }
    return "Unknown Department";
};

// Arrow Function with Implicit Return
const isAdult = (age) => age >= 18;

// Arrow Function with Explicit Return
const getStudentStatus = (isActive) => {
    if (isActive) {
        return "Active";
    }
    return "Inactive";
};

// Function Calling Other Functions
function generateStudentReport(student) {

    if (!student.name || student.name.trim() === "") {
        return "Error: Student name is required.";
    }

    if (!Number.isFinite(student.marks) ||
        student.marks < 0 ||
        student.marks > 100) {
        return "Error: Invalid Marks.";
    }

    const grade = calculationGrade(student.marks);

    const scholarship = checkScholarship(
        student.marks,
        student.attendance,
        student.isActive
    );

    const department = getDepartmentMessage(student.department);

    const ageStatus = isAdult(student.age) ? "Adult" : "Minor";

    const accountStatus = getStudentStatus(student.isActive);

    return `
===== STUDENT REPORT =====
Name: ${student.name}
Age: ${student.age} (${ageStatus})
Department: ${department}
Marks: ${student.marks}
Grade: ${grade}
Attendance: ${student.attendance}%
Account: ${accountStatus}
Scholarship: ${scholarship}
==========================
`;
}

// Function Calls
console.log(greetStudent(student.name));
console.log(generateStudentReport(student));
