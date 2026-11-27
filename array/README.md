An Array is an object type designed for storing data collenction.
array vabeko yautai variable vitra multiple values store garne data sturcture ho
note: Python ma aaslai list vaninch avane js ma  Array vanincha
1. we use []brackets in js to create array  eg const fruits = ["Apple", "Banana", "Mango"];
it is simpilar to python eg fruits = ["Apple", "Banana", "Mango"]
2. Elements access in array
eg const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango
in Python:
fruits = ["Apple", "Banana", "Mango"]

print(fruits[0])  # Apple
print(fruits[1])  # Banana
print(fruits[2])  # Mango

3. How to identify how much elements are there in Array
js eg const students = ["Ram", "Shyam", "Hari", "Sita"];

console.log(students.length); // 4
in Python:
eg : students = ["Ram", "Shyam", "Hari", "Sita"]

print(len(students))  # 4

4. Changing elements of Array
const fruits =["Apple","Banana","mango"];
fruits[2]="Orange";
console.log(fruits);
in Python,
fruits=["Apple","Banana","Mango"]
fruit[2]="orange"
print(orange)

5. Different data type in js

const student = [
    "Ram",
    21,
    true,
    85.5
];

console.log(student); 
same in python: student = ["Ram", 21, True, 85.5]

6. Short note
Concept	JavaScript	Python
Create Array/List	[]	[]
Access element	arr[0]	arr[0]
Change element	arr[0] = "A"	arr[0] = "A"
Get length	arr.length	len(arr)
First index	0	0