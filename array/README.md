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

// JS Array Constructor
The new Array() constructor creates an Array object.
The Difference? new Array() vs Array()
The short answer is: there is no functional difference between new Array() and Array().

Both commands do the exact same thing and create an array.
eg const fruits = new Array("Apple", "Banana", "Mango");

console.log(fruits);

javascript aRRAY METHODS
Array vitra naya data kashari add, remove, update garna js ayyay method use huncha
python ma list method jastai ho
note: array method vaneko array  mathi different operations perform garne built in functions hi
egconst fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);

note: splice() add remove ra replace garna use huncha
splice() प्रयोग गरेर हामी:
- Array बाट elements remove गर्न सक्छौँ।
- नयाँ elements add गर्न सक्छौँ।
- पुराना elements replace गर्न सक्छौँ।
यसको basic syntax:array.splice(startIndex, deleteCount, item1, item2);
यहाँ:
- startIndex: कुन index बाट सुरु गर्ने?
- deleteCount: कति वटा elements हटाउने?
- item1, item2: नयाँ elements add गर्ने (optional)।
const fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits.splice(1, 2);

console.log(fruits);
output ["Apple", "Orange"]
किन?
- Index 1 बाट सुरु भयो।
- 2 वटा elements remove भए।
- Banana र Mango हटे।
Example B — Element Add गर्ने
const fruits = ["Apple", "Mango"];

fruits.splice(1, 0, "Banana");

console.log(fruits);
Splice vs Slice — अत्यन्तै Important
splice()	slice()
Original Array change गर्छ	Original Array change गर्दैन
Add गर्न मिल्छ	Add गर्न मिल्दैन
Remove गर्न मिल्छ	Original बाट remove गर्दैन
Replace गर्न मिल्छ	Replace गर्दैन

6. concat() — दुई Array जोड्ने
JavaScript:
const boys = ["Ram", "Shyam"];
const girls = ["Sita", "Gita"];

const students = boys.concat(girls);

console.log(students);


Output:
["Ram", "Shyam", "Sita", "Gita"]


Python:
boys = ["Ram", "Shyam"]girls = ["Sita", "Gita"]students = boys + girls



concat() ले original arrays परिवर्तन गर्दैन।
8. आज सिकेका Methods को Revision
JavaScript	काम	Python equivalent
push()	अन्तिममा Add	append()
unshift()	सुरुमा Add	insert(0, ...)
pop()	अन्तिमबाट Remove	pop()
shift()	सुरुबाट Remove	pop(0)
splice()	Add / Remove / Replace	insert(), del, slicing assignment
slice()	केही भाग निकाल्ने	List slicing
concat()	Array जोड्ने	+
join()	String बनाउने	"separator".join()