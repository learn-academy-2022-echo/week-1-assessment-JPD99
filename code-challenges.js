// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code:
// Program boilingFunc Function that will determine a given temperature in units of fahrenheit is above, below, or directly at boiling point
// Since we will be inputting only one input , temperature, we will only have 1 parameter
// With the 3 conditions of above, below, or directly at boiling point we will have 2 statements and 1 catch all 
// COnditional statements start with if, end with else, and has else if in the middle
// Remember since we are using a function we must use an arrow (=>) and a couple returns (return)
// Oh! also remember since we are referencing the inputted value we must use string interpolation (` ${} `)   !!!

const boilingFunc = (temperature) => {
    if (temperature > 212){
        return `${temperature} is above boiling point`
    } else if (temperature === 212){
        return `${temperature} is at boiling point`
    } else {
        return `${temperature} is below boiling point`
    }

}

console.log(boilingFunc(212))

const temp1 = 42
//Output ==> 42 is below boiling point
const temp2 = 350
//Output ==> 350 is above boiling point
const temp3 = 212
//Output ==> 212 is at boiling point


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:
// Create Code ==> we can use any method that comes into mind to devlop a solution
// 1st thought: we can use a function to iterate the action of pushing a current index value of array myNumbers1 to array myNumbers2. This process might become a bit messy and maybe complex. Also we may not want to change the orginal arrays at all, for not this reason, this 1st thought may not be optimal--because .push is a mutator
// 2nd though: we can optimize the 1st thought by using the .concat() method to join arrays (the concat method works for strings and numbers too!); this method is more favorable as .concat is an acessor. We will solve this problem using this operator.
// Lets use the operator .concat() the notation for this operator is fairly simply first begin with the array you wish to combinee with, beside the array add the operator .concat(), and within the parathenses add the array you wish to merge with the orginal array you recalled at the first step
// We have to store the new array as a constant
// Console.log the new array's constant to see if things are properly combined 
// Finally console log the .length() method to the new array to find the all the elments serparted by commas in the array.
const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]
const combinedNums = myNumbers1.concat(myNumbers2)

// console.log(combinedNums)
// Output ==> [ 3,  7,  0, 36, -9, 8, -7, 42,  9, 13 ]
console.log(combinedNums.length)
// Output ==> 10

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ohcE"

// Pseudo code:
// From previous knowledge the .reverse() command only reverses the order of arrays.
// We must convert the string "Echo 2022" as an array; the method that comes into mind is the .split(); this is very very important we will need to split every character apart as so we will use .split("")
// Once the String is translated to an array we will use the .reverse() command on the new array
// Then when the array is in reverse order we will convert the array into a string again using .join(); just like the .split() we must rejoin every character without commas seperating the new String
// We will console log the the answer to see if the output comes to share some semblance with the intended answer.

const currentCohort = "Echo 2022"
const currentCohortSplit = currentCohort.split("")
// console.log(currentCohortSplit)
const currentCohortSplitReversed = currentCohortSplit.reverse()
// console.log(currentCohortSplitReversed)
const currentCohortSplitReversedJoined = currentCohortSplitReversed.join("")
console.log(currentCohortSplitReversedJoined)
// Output ==> 2202 ohcE

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:
// Since the numbers are enclosed in an array we can identify odd and even numbers by iterations
// We need to write a code that will decide on the input and output an appropriate message. 
// Conditional statements is necessary for this problem
// use only if and else statements as there is no need to create 3 statements
// We will establish the conditions for an even number and the rest will be considered odd numbers
const myArray = [13, 34, 5, 10, 27, 42]

//setup the basic loop template: starting at the beginning of the array at index 0, ending at index 6 or ending at the length of array as an index, procede by intervals of one. Remember to seperate the 3 factors with a semicolon
for(let index = 0; index < myArray.length ; index = index + 1) {
//Lets create the if statement for the even numbers using modulo and remainder 0. Read as if value at current index is divided by 2 and has a remainder of 0 make it say "even"
    if (myArray[index] % 2 === 0){
        console.log("even")
    } else {
        console.log("odd")
    }
}
//Output ==> odd
// even
// odd
// even
// odd
// even

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:
// We must use functions
// Therefore we must have an arrow and returns as we will be running conditionals to ensures that our function only subtracts the correct way: big number - small number
// Using conditionals makes us use if and else statements
// Not sure how many statements are needed possibly 3? 
// since we have 2 numbers to subtract in our function we will have 2 parameters

//beginning the function by creating constants 

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

const minusNumbers = (nums1,nums2) => {
    if (nums1 > nums2){
        console.log(nums1 - nums2)
    } else if (nums2 > nums1){
        console.log(nums2 - nums1)
    }
    else{

    }
}

 console.log(minusNumbers(100,58))

//The function produces the answer perfectly, but why is there an undefined message below the my answer? Is there a seperate console.log somewhere else in this editor?
//It seems like I am recalling a varible in this problem first without giving it a value...
//seems like the way im writing my console.log is incorrect?
//I've tested the code in the googlechrome console and still receive the undefined message, the debugger told be the undefined statement came from my console.log command

