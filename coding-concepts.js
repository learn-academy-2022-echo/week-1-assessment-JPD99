// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: Reminder don't do this problem as instructor as done so already...
// b) Verify and explain: Reminder don't do this problem as instructor as done so already...
// .push("") in a console log gives the length of array after pushing the element in.


// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: 10 , as number
// b) Verify and explain: 
// The correct answer is 10. When using the .length method on a string the method counts all the characters (INCLUDING SPACES) stored in the constant. 
// The .length method does not work on numbers, instead the numbers must be converted to string with the command .toString() first and then you may use .length to count each character. 
// The .length does work on arrays counted each element within the array (counts each element seperated by a comma)

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: "o" , as string
// b) Verify and explain: The correct answer is "o". The number that is in the [] is the index since we know the index begins at index = 0 on H, we can deduce that when index = 4 we will get o. 


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: "Ruby" , as string
// b) Verify and explain: The answer is "Ruby". Index is defined as 1, and we are given the array of 4 elements. Understanding the previous question when we put a [] beside the constant we will output the element at the index value. Since Index is at 1, our answer is the second element of the array: "Ruby" -- since index counts from 0 to so forth. 


// --------------------4) What will this log? X

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: ["SATURDAY", "SUNDAY"]
// b) Verify and explain: The answer is "TypeError: weekendDays.toUpperCase is not a function". With further research, .toUpperCase is suppose to run inside the console.log to give a full caps-lock-message-- .toUpperCase is not a permanent modifer. The method .toUpperCase can only work on strings, not on arrays or numbers. The workaround this issue is to create a iteration that .toUppercase each string at specific index values; we would use the .map() method to create a new array with capitalized letters. 


// --------------------5) What will this log? X

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: 3 , as a number 
// b) Verify and explain: The answer is "number". The operator typeof tells the devloper what type of data is being produced, since .length produces a number, the typeof operator will us the data type and the console.log will print out the answer as number. 
