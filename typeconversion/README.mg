Lesson 4: Type Conversion and Type Coercion
This is one of the most important JavaScript concepts. As a Django developer, you'll frequently encounter it when receiving data from HTML forms and Django REST Framework APIs.
1. First, understand the difference
JavaScript has two ways of changing a value from one data type to another.
1. Type Conversion (Explicit Conversion)
2. Type Coercion (Implicit Conversion)

C. Boolean Conversion
Use Boolean() to convert a value into a Boolean.

Type Coercion (Implicit Conversion)
Now let's understand the behavior that makes JavaScript interesting.

Type coercion means JavaScript automatically converts values when performing certain operations.

8. Python vs JavaScript Comparison
Concept	Python	JavaScript
Convert to string	str()	String()
Convert to integer	int()	Number() / parseInt()
Convert to float	float()	Number() / parseFloat()
Convert to Boolean	bool()	Boolean()
Invalid number	ValueError (e.g. int("abc"))	NaN
Empty list truthiness	False	True
Empty object/dict truthiness	False	True