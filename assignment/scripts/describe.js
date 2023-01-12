// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// The variable is called name and is set to Dane
// If variable is set to Mary(which it is not) then console says Hi, Mary
// Since the variable is not set to Mary, then the code should say 'How do you do'
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Stating the existence of the variables secret and code
// Variable called code is equal to 123
// If code is equal to 123(which it true) then the variable secret is equal to the string called super
// also, code is equal to code * 2 (246)
// If code is greater than 250 (which is false) then secret is not duper
// We would console.log the value (super)

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// State of variables isStudent which is true, the variable age which is = 34, the variable zip with is equal 55407
// if isStudent is true(which it is) & zip is > 80000(which is false) then You're a student on the West Coast(this conditional statement is false)
// and if the variable isStudent is false or their age is less than 30 than console would say What are your hobbies?
// if isStudent is true(which it is), then console would say ('Welcome to Prime')
// if all of the above statements are false, then console says ('How about the weather')

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  //FIX - colorOne and colorTwo would need to be coded as: colorOne + colorTwo = 'purple'
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

//FIX - next line should be: if (temp >= 39 || time >= 4) the greater than symbole should have the equals sign after to get a return of true
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//FIX - If I am reading this block of code correctly, 'no entry' will actually run before 'enter' which is the desired console.log we wish to run
// I believe the best way to fix this issue is to switch the line 'console.log('no entry');' and 'console.log('enter');' so that 'enter' runs first, that way if the age is greater than 21 there is 'no entry'
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

