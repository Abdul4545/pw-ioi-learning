// Ternary Operator (? :)
// The ternary operator is a shorthand for an if-else statement. It evaluates a condition and returns one of two values based on whether the condition is true or false.

// syntax: condition ? expression1 : expression2
// If condition is true, it returns expression1.
// If condition is false, it returns expression2.

let a = 10, b = 20;
let min = (a < b) ? a : b;  // If a is less than b, assign a to min, else assign b
console.log("Minimum value:", min);


// String Operator (+ for Concatenation)
// The + operator in JavaScript is used for string concatenation when applied to strings.

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

// Note: If you use + with a string and another data type, the other data type is automatically converted into a string.

let age = 25;
let message = "Age: " + age;  
console.log(message);

// Comma Operator (,) : The comma , operator allows multiple expressions to be evaluated, but only the last expression is returned.

let x, y;
x = (y = 10, y + 5);  // y is assigned 10, then x is assigned y + 5
console.log("x:", x); // 15
console.log("y:", y); // 10

// Member Access Operator (.) : The dot (.) operator is used to access properties and methods of an object.

let person = {
    name: "Alice",
    age: 25
};
console.log("Name:", person.name);
console.log("Age:", person.age);


// instanceof Operator : The instanceof operator is used to check whether an object is an instance of a particular class or constructor.

class Animal {}
class Dog extends Animal {}

let d = new Dog();

console.log(d instanceof Dog);     // true
console.log(d instanceof Animal);  // true
console.log(d instanceof Object);  // true


// 2. Number System
// What is a Number System?
// A number system is a way of representing numbers using a consistent set of symbols. Different number systems use different bases (radix).

/*
    Types of Number Systems
    Number System	Base	Digits Used
    Binary	        2	    0, 1
    Decimal	        10	    0-9
    Octal	        8	    0-7
    Hexadecimal	    16	    0-9, A-F
*/

// Conversion of Binary to Decimal : To convert a binary number to decimal, multiply each bit by 2^position (starting from right, 0-based).

let binary = "1011";
let decimal = parseInt(binary, 2);
console.log("Decimal:", decimal);


// Conversion of Decimal to Binary : To convert a decimal number to binary, use the toString(2) method.
let decimal1 = 13;
let binary1 = decimal1.toString(2);
console.log("Binary:", binary1);


// 3. Bitwise Operators : Bitwise operators work on individual bits of numbers.

/*
    Operator	            Symbol	                Description
    AND	                    &	                    Sets bit to 1 if both bits are 1
    OR	                    |                       Sets bit to 1 if 1 of the bits is 1
    XOR	                    ^	                    Sets bit to 1 if only one bit is 1
    NOT	                    ~	                    Flips all bits (1 → 0, 0 → 1)
    Left Shift	            <<	                    Shifts bits left, filling with 0
    Right Shift	            >>	                    Shifts bits right, preserving sign bit
*/

// Bitwise AND (&)
let a1 = 5;  // 0101
let b1 = 3;  // 0011
let result1 = a1 & b1; // 0001 (1 in decimal)
console.log("Bitwise AND:", result1);

// Bitwise OR (|)
let result2 = 5 | 3; // 0101 | 0011 = 0111 (7 in decimal)
console.log("Bitwise OR:", result2);


// Bitwise NOT (~)
let result3 = ~5;  // ~(0101) = 1010 (Two’s complement representation)
console.log("Bitwise NOT:", result3);


// Left Shift (<<)
let result4 = 5 << 1;  // 0101 << 1 = 1010 (10 in decimal)
console.log("Left Shift:", result4);

// Right Shift (>>)
let resul5 = 5 >> 1;  // 0101 >> 1 = 0010 (2 in decimal)
console.log("Right Shift:", result5);

// Bitwise XOR (^) : The bitwise XOR (^) operator compares corresponding bits of two numbers and returns 1 if the bits are different, otherwise, it returns 0.

let result6 = 5 ^ 3; // 0101 ^ 0011 = 0110 (6 in decimal)
console.log("Bitwise XOR:", result6);


