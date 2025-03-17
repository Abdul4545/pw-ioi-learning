// Variables in javascript are used to store the information and access the information using that variable only.

// Suppose I am creating a file and saving it into my computer, while saving the file I need to give it some name. The file will occupy space in the disk and name which we gave while saving to the file will be helpful in accessing the file, else without a name, finding the file would be challenging.

// In the same way when we need to store some value in the JS program and need to access it in future we use the concept of variable.
// In general variable is the name given to the value for accessing that value in future.

// let's suppose I have to store my name in program so that in future I can print that name 2 times, so let's store the name now

// "Abdul Moid"

// the above written value/data is my name, but how can I access the name now for printing? For this reason I will store the name value in a variable and I will give name to that variable "myname"

myname = "Abdul Moid";
console.log(myname);
console.log(myname);

// In this way we create variables in JS and use whenever required in program. The name "myname" is also called identifier.

//There are rule for naming the variables/identifiers, variable must follow some rules while we name them

// Variable or Identifier Naming Rules/Convention : 

// JavaScript variable names are case-sensitive. Lowercase and uppercase letters are distinct.
// Example 
// var myname = "Abdul Moid";
// var myName = "Javascript";
// console.log(myname); // "Abdul Moid"
// console.log(myName); // "Javascript"


// Variable names must start with a letter, an underscore (_) or a dollar sign ($).
// Variables cannot be the same as reserved keywords such as if or const.
// Variable names cannot contain spaces.
// By convention, JavaScript variable names are written in camelCase


// As there are two ways to save some information in a file, first we create a file and save it and in future we will store information in that and second way is that we create file and store information in that immediately. In the same way we can also create variables , we create variable and assign value to it at the same time or first we create a variable and later we assign value to it.

let city; // declaring variable (creating an empty file)
let park = "Ambdekar"; // declaring and initializing variable at the same time (creating file and storing information in it)
city = "Lucknow"; // initializing variable later (saving data in it)

// let is a reserved keyword used to declare variables. We will discuss it in detail later.
