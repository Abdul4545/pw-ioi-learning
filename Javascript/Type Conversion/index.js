// Introduction to Type Conversion
// Type conversion is the process of converting one data type to another. In JavaScript, values can be converted between different data types either automatically by the JavaScript engine (implicit conversion) or manually by the developer (explicit conversion).

// JavaScript is a dynamically typed language, meaning variables are not bound to a specific data type. This flexibility allows automatic conversions, but it can also lead to unexpected results if not handled carefully.

/*
    Need for Type Conversion
    Type conversion is essential because JavaScript often deals with operations involving different data types. Some common scenarios where type conversion is required include:
    Performing arithmetic operations between numbers and strings.
    Comparing different data types using equality operators.
    Converting user input (usually received as strings) into numbers for calculations.
    Ensuring compatibility when storing or retrieving values from APIs or databases.
*/

// Types of Type Conversion
// 1) Implicit Type Conversion (Type Coercion) : Implicit type conversion occurs automatically when JavaScript converts one data type into another to perform an operation. This is often seen in arithmetic operations, comparisons, and string concatenation.

// Examples of Implicit Type Conversion
// 1) String to Number conversion
console.log("5" - 2);  // Output: 3 (string "5" is converted to number)
console.log("10" * 2); // Output: 20 (string "10" is converted to number)
console.log("8" / "2"); // Output: 4 (both strings are converted to numbers)

// 2) Number to String Conversion
console.log("Hello " + 5); // Output: "Hello 5" (number 5 is converted to a string)
console.log(10 + "20");    // Output: "1020" (number 10 is converted to string)

// 3) Boolean to Number Conversion
console.log(true + 2);   // Output: 3 (true is converted to 1)
console.log(false + 5);  // Output: 5 (false is converted to 0)

// 4) Null and Undefined Conversion
// null converts to 0 in numeric operations.
// undefined results in NaN (Not a Number) when used in arithmetic operations.
console.log(null + 5);       // Output: 5 (null is converted to 0)
console.log(undefined + 3);  // Output: NaN (undefined cannot be converted to a number)

// 5) Comparison Operations : When comparing different data types, JavaScript converts them to numbers.
console.log("5" == 5);  // Output: true (string "5" is converted to number)
console.log(true == 1); // Output: true (true is converted to 1)
console.log(false == 0); // Output: true (false is converted to 0)


// 2) Explicit Type Conversion (Type Casting) : Explicit type conversion is when a developer manually converts a value from one type to another using built-in JavaScript functions.

// Methods of Explicit Type Conversion
// 1) String Conversion : We can convert numbers, booleans, and other types to strings using:
// String()
// .toString()

let num = 123;
console.log(String(num));    // Output: "123"
console.log((456).toString()); // Output: "456"

let bool = true;
console.log(String(bool));  // Output: "true"

// Number Conversion : We can convert strings, booleans, and other values to numbers using:
// Number()
// parseInt()
// parseFloat()

console.log(Number("123"));    // Output: 123
console.log(Number("123abc")); // Output: NaN (invalid number)
console.log(parseInt("123.45"));// Output: 123 (converts only integer part)
console.log(parseFloat("123.45"));// Output: 123.45
console.log(Number(true));    // Output: 1
console.log(Number(false));   // Output: 0


// Boolean Conversion : We can convert values to boolean using Boolean().
console.log(Boolean(1));    // Output: true
console.log(Boolean(0));    // Output: false
console.log(Boolean("Hello")); // Output: true (non-empty string is truthy)
console.log(Boolean(""));   // Output: false (empty string is falsy)
console.log(Boolean(null)); // Output: false
console.log(Boolean(undefined)); // Output: false
console.log(Boolean([]));  // Output: true (empty array is truthy)
console.log(Boolean({}));  // Output: true (empty object is truthy)


// Conclusion
// Implicit conversion happens automatically when JavaScript tries to make sense of operations.
// Explicit conversion requires using methods like Number(), String(), and Boolean().