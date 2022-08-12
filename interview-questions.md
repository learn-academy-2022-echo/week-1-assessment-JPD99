# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

Your answer: ~~A condtional statement is a type of code that ultilizes the: if, else if, and else code blocks. The premise of the condtional statement is to pass data through a sets of ()'s to create a particular decision a devolper intended.~~

Researched answer:
~~<!-- Referenced source: https://www.guru99.com/how-to-use-conditional-statements-in-javascript.html Notes -->~~
~~Conditional statements can be conceptualized as decision trees, where a data value enters through a set of conditions or requirements--depending on if the data value is capable of making a condition true, an action is executed. Conditional statements adds an additional layer to coding: logic; with conditionals devlopers are able to create end results based on Boolean values (True and False). A majority of the time one condtional statement produce one outcome.~~
~~I have used conditional statements in a couple of practice challenges where I had to: evaluate letter grades, identify odd / even integers, and validate if a set of numbers are equivelent to one another.~~

1. What is git? What is the difference between git and Github?

Your answer: GIT (Global Info Tracker) is a opensource program that allows multiple devlopers to come together and work under the same projects. They begin on a main branch that stores the integral componenet of their program or a place of establishment to place their final works. Devlopers work on subset branches away from the main branch until they believe their code is completed. GIT remains to be an important software that allows for active collobration, on the other hand Github is the website that comminicates with GIT and stores the shared code amongst devlopers. Within the Github, communication among devlopers is possible as well within their user interface

Researched answer:
<!-- Referenced https://www.simplilearn.com/tutorials/git-tutorial/git-vs-github + Classnotes -->
GIT is an intialism for Global Info Tracker; GIT is the opensource program that is industry strandard for devlopers to solve and devlop code en masse. Changes can be occured within the code from multiple devlopers without jeoporadizing the intial code or existing code on other devloper's laptops. As we can understand GIT is a powerful application to allow coders to devlop code without interference. On the otherhand, Github is a "web-based hosting service for Git repositories [i.e. storage of code]". A mouthful, however Github can be simplified as a 'hub' that centralizes the interaction between devlopers and is a sancutary for large amounts of code from Git users. Github offers users with quality of life services: indetifiying compatability issues, bug indentfiers, and many more, but the best is that Github offers a backup function to code that has been uploaded to the hosts site. 
I have used Git and Github in the beginning of my coding journey, colloborating with others to establish a strong connection in understanding what code I was writing but, also allowing myself to see how other people with different perspectives solving coding challenges in different ways.

2. Which JavaScript operators will return a Boolean value?

Your answer: Javascript has 6 primitive data types and Boolean is one of them. To recall a Boolean value, a devloper will need to use the relational or comparison operators: >, <, >=, =<, ==, and ===. These operators may be allowed to be paired with other operators like the, Bang Operator (!). Using the above relational or comparison operators will output a true or false statement also known as a Boolean value for the devloper. Usually Boolean values are useful as they are the major foundations that can be bulit up for more complex and logical sets of code blocks.

Researched answer:
<!-- Referenced https://www.tutorialsteacher.com/javascript/javascript-boolean -->
Boolean values are either true or false, to illicit these outputs an operator is needed. The Javascript relational and comparison operators are capable of causing the console to release a boolean value; comparison operators: === , and ==; relational operators: >, <, >=, and =<. Depending on if a conditional statement is applicable to a piece of code--the output: "true" will be printed, however if the condtional statement is not applicable to a piece of code--the output: "false" will prtinted. Boolean values permits code to have logic in their structure. More complex patches of code will always use Boolean values. 
Boolean values are something that I have integrated in my code before to devlop if, else if, and else statements that helps solve nuranced problems. In one of the pratices I have done I have created a simple, but logical piece of code that indeitfies a percentage of an assignement and the the code block was capable of identifying the grade letter. If the score percentage was a 60% the condtional statement i would use to catch this data value would be: 

else if (scorePercentage >= 59 && scorePercentage =< 69){
    return "Assignements letter grade: D"
}

3. What is an index? What is the difference between index and value?

Your answer: An index is the location of the data value, and the data value is some sort of information that can be interpreted and processed by a computer (e.g. binary, string, boolean values). A data value has an index respective to its location, while an index can only pinpoint a specific data value). Basically, the index is a address, and the value is some sort of content that can be located by an index.

Researched answer:
<!-- Referenced https://thesassway.com/what-is-a-value-in-computer-science/#1 + 
https://thesassway.com/what-is-meant-by-index-in-computer-science/ + Notes -->
Values are bits that are interpreted by the computer; the two basic data values are numbers and strings. Numbers can be presented as integers or floats with or without a postive or negative sign. Strings are the letters held in double quotations. Indexes are the ordered posiiton of string, numbers, or elements within an array. Indexes are not numbers, but they do produce a number at the location of whatever data type is avaliable. The counting pattern of indexes begins at 0 and continues onwards.


4. What is iteration?

Your answer: Iteration is a process where the code repeats itself with succession. With each succession the orginal elements are modified in some way, especially in arrays. Iterations is implemented in javascript by using a method called 'loops'; the anatomy of loops goes as followed:

for(starting point; ending point; interval progression) {
    return      action execution
}

this format can be more intricate by adding conditional statements.

Researched answer:
<!-- Referenced https://www.freecodecamp.org/news/exploring-javascript-for-in-loops-bdfc226d8515/#:~:text=Loops%20allow%20programs%20to%20perform,sets%20of%20inputs%20each%20time. -->
Iteration as the name entails is when a piece of code is repeated. Iterations are fully utilized in Javascript with 'loops'. Loops are used to process through large amounts of elements at the same time, considering that these elements can be replaced to test other large amounts of data, makes iterations in the form of loops very integral in taking out the labrious work out of data modification. The basic structure of a 'loop' is as described:

for(starting point, ending point, interval progression) {
    return      action execution
}

Of course, loops can be more complex with the intorduction of conditions, statements, varibles, and objects. 

Loops can be used in identifying masses of odd and even numbers in an array. This situtation can be written as (from my previous coding pratice): 

<!-- Line73 Shorthand of array's format, read from left to right as, reiterate beginning at the start of the array (index 0) to the end of our given array's length, when reiterating procede to the next index -->   
for(let i = 0 ; i < arr.length ; i++){
<!-- Lines75-76 if the current value at the index is divided by 2 and DOES NOT have a remainder of 0 procede to write, "[current value] is odd"  -->
    if(arr[i] % 2 !== 0){
        console.log(`${arr[i]} is odd`)
<!-- Lines78-79 else if the current value at the index is divided by 2 and DOES have a remainder of 0 procede to write "[current value] is even"  -->
    } else if (arr[i] % 2 === 0 ){
        console.log(`${arr[i]} is even`)
<!-- Line 81 if none of values are divided by 2 and has a remainder of 0 or NOT 0 write nothing -->
 } else {
}

5. Give a brief description of proper pair programming techniques. What are the roles of each person?

Your answer: Pair programming is when devlopers switch the roles of writing code and explaining code to one another. The one writing code is the dubbed as the 'driver', while the one explaining the code is dubbed as the 'navigator'. Again, because there is one 'driver' there can be only one person writing code, there cannot be multiple parties coding at the same time. Pair programming is a very unqiue cooperative technique used in learning and team collaboration. 'Driver' and 'navigator' usually switch roles as the time procedes, no one is defintively the 'driver' or 'navigator' as the roles are constatnly changing. 

I have used this type of technique while learning to code, this process allowed me to get direct input on what I thought while coding. Pair programming is monumental understanding new concepts and unwinding misconceptions.

Researched answer:
<!-- Referenced https://www.techtarget.com/searchsoftwarequality/definition/Pair-programming#:~:text=Pair%20programming%20is%20an%20Agile,code%20and%20test%20user%20stories. -->

Pair programming is noted as an "Agile software devlopment technique", which is a fancy title for collaborative technique. The only real requirement is that both indivduals have to be coders in some sort of way. If one of the pairs is more ahaed in their coding journey than the other, the one ahead can simply slow down to the other's natural progression. Pair programming improves on programmers ability to communicate code to spoken language and to review / write code. Although, pair programming is a powerful technique for programmers to employ there are some issues with it. Lets begin with the benefits first: immediate peer review, combined knowledge, guaraunted teamwork, and combined troubleshooting. The disadvantages are: combined scheduling can cause issues, some coders are self-sufficent on their own, requires communication consistently, and efficeny is decreased as there is clashing of ideas. To some pair programming is more of a bane to the quality of the produced code, but others pair programming is a big boom to their code they produce together! 


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions:
<!-- Referenced https://www.codecademy.com/learn/game-dev-learn-javascript-higher-order-functions-and-iterators/modules/game-dev-learn-javascript-iterators/cheatsheet#:~:text=In%20Javascript%2C%20functions%20can%20be,and%2For%20returns%20a%20function. -->
A function is a piece of code that takes an input and spits out an output. Basic functions can take values and calculate an output, and they can complete simple task like identifying things or printing out specific lines of text. Higher Order Functions are code that input functions and output an entirely new function--in a way basic function calculate values, but higher order functions can calculate new actions. Higher Order Functions are very powerful in the realms of data processing.

2. Jest:
<!-- Referenced https://zetcode.com/javascript/jest/ -->
Jest is a framework bulit by devlopers at Facebook. Jest is made specifically to test Javascript code. From the application it has the ability to test code, and possibly even correct errorenous code. Additionally it also has the ability to simulate mock code for unit testing?

3. Objects:
<!-- Referenced https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects -->
Objects are very similar to varibles in coding, however objects can have many more characteristics that differentiate from just assigned varibles. Object have properties that are not strictly orderered, they simply exist in the object. The simililarties Objects have to Varibles: (1) is that its values / and properties can be recalled and (2) it is completely unique

4. Method:
<!-- Referenced https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object -->
A method is a functional property of an object. In a way a method is a function that is stored as an object's properties.

5. Classes:
<!-- Referenced https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes -->
Classes sound very similar to classes in CSS, and to my surprise they are somewhat similar! Classes is an ID that can be widely assigned to other elements in code; classes are something that can be used over again. 