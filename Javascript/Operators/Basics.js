// Operators in JavaScript are symbols or keywords used to perform operations on values and variables. They help in manipulating data and performing computations.

// Types of Operators in JavaScript
// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// Logical Operators
// Unary Operators
// Type Operators

// Operator Precedence and Associativity
// Precedence determines the order in which operations are performed. Higher precedence means execution happens first.
// Associativity determines the order of execution when operators have the same precedence:
// Left-to-right (e.g., +, -, *, /)
// Right-to-left (e.g., = for assignment)

// let result = 5 + 3 * 2; // 3 * 2 is evaluated first, then 5 + 6 = 11

// 1. Arithmetic Operators
// Arithmetic operators perform mathematical calculations.

/*
    Operator	Description	            Example
    +	        Addition	            5 + 2 → 7
    -	        Subtraction	            5 - 2 → 3
    *	        Multiplication	        5 * 2 → 10
    /	        Division	            5 / 2 → 2.5
    %	        Remainder (Modulus)	    5 % 2 → 1
    ++	        Increment	            let a = 5; a++; // 6
    --	        Decrement	            let a = 5; a--; // 4
    **	        Exponentiation	        5 ** 2 → 25
*/

// Increment and Decrement
// Post-increment (a++): Returns current value, then increments.
// Pre-increment (++a): Increments first, then returns the new value.

let x = 5;
console.log(x++); // prints 5, then x becomes 6
console.log(++x); // increments first, then prints 7


// 2. Assignment Operators
// Assignment operators assign values to variables.

/*
    Operator	Example	        Equivalent to
    =	        a = 5	        Assigns 5 to a
    +=	        a += 3	        a = a + 3
    -=	        a -= 3	        a = a - 3
    *=	        a *= 3	        a = a * 3
    /=	        a /= 3	        a = a / 3
    %=	        a %= 3	        a = a % 3
    **=	        a **= 3	        a = a ** 3
*/

let a = 10;
a += 5; // a = a + 5 → 15


// 3. Comparison Operators
// Comparison operators compare values and return true or false.

/*
    Operator	Description	                                Example	                Output
    ==	        Equal (type conversion allowed)	            5 == "5"	            true
    ===	        Strict Equal (no type conversion)	        5 === "5"	            false
    !=	        Not Equal	                                5 != "5"	            false
    !==	        Strict Not Equal	                        5 !== "5"	            true
    >	        Greater than	                            10 > 5	                true
    <	        Less than	                                10 < 5	                false
    >=	        Greater than or equal	                    10 >= 10	            true
    <=	        Less than or equal	                        10 <= 5	                false
*/
console.log(5 == "5");  // true
console.log(5 === "5"); // false
console.log(10 > 5);    // true


// Nullish Coalescing (??)
// Returns the right-hand operand if the left-hand operand is null or undefined.
let name = null;
let displayName = name ?? "Guest"; // "Guest"


// 4. Logical Operators
// Logical operators are used to combine multiple conditions and return a boolean value (true or false).

/*
    Operator	Description	                                                        Example	                Output
    && (AND)	Returns true if both conditions are true, otherwise false	        (5 > 2) && (10 > 5)	    true
    || (OR)		Returns true if at least one condition is true, otherwise false     (5 < 2) || (10 > 5)     true
    ! (NOT)	    Reverses the boolean value (true → false, false → true)	            !(5 > 2)	            false
*/

// Short-circuiting
// In &&, if the first condition is false, JavaScript does not evaluate the second condition.
// In ||, if the first condition is true, JavaScript does not evaluate the second condition.

let moid = false && console.log("This will not be printed");
let b = true || console.log("This will not be printed");
console.log(moid , b); // false true

// Logical Operators with Non-Boolean Values
// Logical operators can also be used with non-boolean values. JavaScript treats:
// Falsy values: false, 0, "", null, undefined, NaN
// Truthy values: Everything else

console.log("Hello" && 5);  // 5 (returns last truthy value)
console.log(0 || "JavaScript"); // "JavaScript" (returns first truthy value)
console.log(!""); // true (empty string is falsy)


// 5. Unary Operators
// Unary operators operate on a single operand.

/*
    Operator	Description	Example
    +	        Unary plus (converts to number)	+"5" → 5
    -	        Unary negation (negates value)	-5 → -5
    !	        Logical NOT (negates boolean)	!true → false
    ++	        Increment	let x = 5; ++x; → 6
    --	        Decrement	let x = 5; --x; → 4
    typeof	    Returns type of operand	typeof "hello" → "string"
    void	    Evaluates expression but returns undefined	void(5) → undefined
    delete	    Deletes object property	delete obj.key
*/

// Unary plus (converts to number)
console.log(+"42"); // 42 (string converted to number)
console.log(+true); // 1 (true is converted to 1)
console.log(+false); // 0 (false is converted to 0)
console.log(+null); // 0 (null is converted to 0)
console.log(+undefined); // NaN (undefined cannot be converted)
console.log(+NaN); // NaN

// Use case
let str = "50";
let num = +str; // Convert string "50" to number 50
console.log(num + 10); // 60
console.log(str + 20);
console.log(20 + str);


// Unary negation (negates value)
console.log(-42);  // -42
console.log(-(-42)); // 42 (double negation)
console.log(-"5");  // -5 (string converted to number)
console.log(-true); // -1 (true is 1, negated to -1)
console.log(-false); // -0 (false is 0, negated to -0)

// use case
let profit = 100;
let loss = -profit;
console.log(loss); // -100

// Logical NOT (!)
console.log(!true);  // false
console.log(!false); // true
console.log(!0);     // true (0 is falsy)
console.log(!1);     // false (1 is truthy)
console.log(!"");    // true (empty string is falsy)
console.log(!"Hello"); // false (non-empty string is truthy)
console.log(!null);  // true (null is falsy)
console.log(!undefined); // true (undefined is falsy)
console.log(!NaN);   // true (NaN is falsy)


// typeof Operator
console.log(typeof 42);      // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true);    // "boolean"
console.log(typeof {});      // "object"
console.log(typeof []);      // "object" (arrays are objects)
console.log(typeof function(){}); // "function"
console.log(typeof null);    // "object" (this is a known JavaScript quirk)
console.log(typeof undefined); // "undefined"
console.log(typeof NaN);     // "number" (NaN is of type number)


// void Operator
console.log(void 0);  // undefined
console.log(void (5 + 5)); // undefined

// document.getElementById("myLink").onclick = function () {
//     return void(0); // Prevents navigation
//   };


// delete Operator
let obj = { name: "John", age: 30 };
console.log(obj.age); // 30

delete obj.age; // Deletes 'age' property
console.log(obj.age); // undefined

// The delete operator in JavaScript only works on object properties, not on normal variables declared with var, let, or const.

let xy = 10;
delete xy; // false, variable is not deleted

var yx = 20;
delete yx; // false, 'var' variables cannot be deleted