// As we store different type of things in different file formats, text data in doc, videos in mp4 file and audio in mp3 file and many more. In the same way we need to store different type of information in our program and for this we use different data types.

// Data is basically a piece of information, your name, your age, your city name, your DOB are all these are the examples of data.

// The information which we store in our variables can be of two types
// 1) Primitive Data Type:  Primitive data types are basic data types that are immutable (i.e., their values cannot be changed). It is of 7 types and mentioned below.
// 1) String    2) Number   3) BigInt   4) Boolean  5) Undefined    6) Null     7) Symbol

// 2) Non-Primitive Data Type: Non-primitive data types are mutable and can store collections of values. In JavaScript, there is only one non-primitive data type and that is Object data type.

// Now we are going to discuss about Primitive data types in detail.

// 1) String data type : Anything written in "" quotes or '' is treated as string in js. In the variables file the values "Abdul Moid" and "Javascript" are the examples of string data types in JS. The thing which we are storing in quotes needs not to be only english alphabets , they can be anything special character, emojis, any other language text. Here we will also see some more examples of String data types.

let city = 'Lucknow';
let DOB = "07-05-2002";
let emoji = "😀";
// The above are the examples of string data type which are storing the city name, DOB and an emoji.


// 2) Number Data Type : The Number data type is used to represent numeric values in JS, including both integers and floating-point numbers.
// The safe range for numeric values in JS is:
// Maximum value: 2^53−1, represented by Number.MAX_SAFE_INTEGER, which equals 9007199254740991.
// Minimum negative value: -2^53−1, represented by Number.MIN_SAFE_INTEGER, which equals -9007199254740991.

let age = 23;
let salary = 54000.56;
let maxNum = 9007199254740991;
console.log(maxNum);
// The above three are the examples of Number data type

// 3) BigInt() Data Type: The BigInt data type stores the numeric values which are greater than 2^53-1 or numbers which are less than -2^53-1. A BigInt is created by appending n to the end of an integer literal or by using the BigInt() constructor. BigInt values cannot be used with the Number type in arithmetic operations directly. Mixing them will result in a TypeError. Examples of bigInt data type are given below

let num1 = BigInt(234567);
let num2 = 123n;
let num3 = 1n;
let positive = 123123n;
let negative = -46373n;
let anotherPositive = BigInt("94783399229"); 
let anotherNegative = BigInt("-374646383847");


// 4) Boolean Data Type: The boolean data type is used to store the information which can be one at a time from the two (true/false). We basically use a boolean data type when the answer can be either true or false or we can say the answer can be yes or no. No third value for the answer exists. We basically use boolean data type when there is a need to make a decision or perform conditional checks.

let isLoggedIn = true;
let isPass = false;
let isComing = false;

// 5) Undefined Data Type: We get undefined data type of a variable when we create a variable and do not assign any value to it, we can also set the value of the variable to undefined by ourself. The examples are mentioned below.

let myCourse; // undefined value of myCourse
let yourAge = 25;
yourAge = undefined; // setting value of the variable to undefined
console.log(yourAge);



// 6) Null Data Type: Let us suppose we have created a file in which we will be storing the things which our teacher will teach us. Here we have created a file which is empty and we will write something in this file when it will be required, or when the teacher will teach. Here we have created a file and the file is intentionally blank/empty, this is the case of null data type, when we create a variable and intentionally assign a value of null to it so that in future we can fill value, this is the case of null data type creation.Below are the examples of it.

let userProfile = null;

// Difference Between Undefined and Null:
// Undefined: The variable is declared but not assigned any value. It represents an unintentional absence of value.
// Null: The variable is explicitly assigned as null, representing an intentional absence of value.


// 7) Symbol Data Types: Symbol is a unique data type used to create unique identifiers for object properties. Unlike strings or numbers, Symbols are guaranteed to be unique, even if two symbols have the same description. It acts as the fingerprint which every individual has unique.

let id1 = Symbol(123);
let id2 = Symbol(123);

console.log(id1); // Symbol(id)
console.log(id2); // Symbol(id)
console.log(id1 === id2); // Output: false

// Non-Primitive Data Type (Object): Object data type is used when you want to group related information together. For example, all details about a user (like name, city, and age) can be stored in one object. This keeps the code organized and easy to manage. The object stores data in the key, value pair. The value before the ":"  is considered as a key and the value after the ":" is considered as the value for that key.
// Example of Object data type 
let user = {
	"name" : "Rohit",
	"city" : "Lucknow",
	"age" : 23
}

// Accessing the object property
console.log(user.age); // output : 23

// We will discuss about object data type in detail later. This much is enough for now. 