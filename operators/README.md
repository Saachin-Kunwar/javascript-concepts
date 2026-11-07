1. What are Operators?
Operators are special symbols used to perform operations on values or variables.

2. Types of JavaScript Operators
JavaScript has several categories of operators.
1. Arithmetic Operators

Mathematical calculations


2. Assignment Operators

Assigning values to variables


3. Comparison Operators

Comparing two values


4. Logical Operators

Combining conditions


5. Increment / Decrement

Increasing or decreasing values


6. Ternary Operator

Writing conditional expressions


7. Nullish Coalescing

Providing fallback values


8. Optional Chaining

Safely accessing nested properties

8. Optional Chaining

Safely accessing nested properties



3. Arithmetic Operators
Arithmetic operators are used to perform mathematical calculations.
Operator	Meaning	Example	Result
+	Addition	10 + 5	15
-	Subtraction	10 - 5	5
*	Multiplication	10 * 5	50
/	Division	10 / 5	2
%	Modulus	10 % 3	1
**	Exponentiation	2 ** 3	8

4. Assignment Operators
Assignment operators are used to assign values to variables.

5. Comparison Operators
Very important
Comparison operators compare two values and return a Boolean result: true or false.
Operator	Meaning
==	Equal value (with type coercion)
===	Strict equality (value and type)
!=	Not equal (with type coercion)
!==	Strict not equal
>	Greater than
<	Less than
>=	Greater than or equal
<=	Less than or equal

6. Logical Operators
Logical operators are used to combine multiple conditions.

There are three main logical operators:
Operator	Meaning	Example
&&	AND	true && true
\|\|	OR	true \|\| false
!	NOT	!true

7. Increment and Decrement Operators
These operators increase or decrease a variable's value by 1.
Pre-increment vs Post-increment
This is important.

Post-increment:
let x = 5;

console.log(x++); // 5
console.log(x);   // 6


First, the current value is used. Then it increases.

Pre-increment:
let x = 5;

console.log(++x); // 6
console.log(x);   // 6


First, the value increases. Then the updated value is used.

The same distinction applies to --x and x--.

8. Ternary Operator
The ternary operator is a shorter way of writing a simple if...else expression.
condition ? valueIfTrue : valueIfFalse;

9. Nullish Coalescing Operator (??)
This is a modern JavaScript operator.

It returns the right-hand value only when the left-hand value is null or undefined.

11. Complete Operator Revision Table
Category	Operators
Arithmetic	+ - * / % **
Assignment	= += -= *= /= %=
Comparison	== === != !== > < >= <=
Logical	&& \|\| !
Increment / Decrement	++ --
Ternary	? :
Nullish	??
Optional chaining	?.

JavaScript Operators

1. Arithmetic:
   +, -, *, /, %, **

2. Assignment:
   =, +=, -=, *=, /=

3. Comparison:
   ==  : Loose equality
   === : Strict equality
   !=  : Loose inequality
   !== : Strict inequality

4. Logical:
   && : AND
   || : OR
   !  : NOT

5. Increment/Decrement:
   ++ : Increase by 1
   -- : Decrease by 1

6. Ternary:
   condition ? true : false

7. Nullish Coalescing:
   ?? : Fallback for null/undefined

8. Optional Chaining:
   ?. : Safe property access

Best Practice:
Use === instead of ==.
Use ?? when only null/undefined need fallback.
Use ?. for safe property access.