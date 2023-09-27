'use strict'

// Exercițiul 1: Afișați un mesaj în consolă
console.log('Hello Wolrd')
// Exercițiul 2: Declarați o variabilă și afișați valoarea sa
const tom = 24
console.log(tom)
// Exercițiul 3: Utilizați operatori aritmetici
function numeros(a,b){
    return a + b
}

const rez = numeros(12,20);
console.log(rez);
// Exercițiul 4: Utilizați structura de control IF
const jhon = 24
const max = 23

if(jhon > max){
    console.log('Jhon is bigger')
}else{
    console.log('max is bigger')
}
// Exercițiul 5: Utilizați o buclă FOR pentru a afișa numere
function numbers(nr){
    nr = [1,2,3,4,5,6,7]
    for(let i = 0; i < nr.length; i++){
        console.log(nr[i])
    }
}numbers()

//-----------------------------------------------------------------------------------------------------------------------------------------
// Exercise 1: Variables and Data Types
// Create variables for storing a name, an age, and a boolean value.
// Assign values to these variables and log them to the console.

let person = {
    Name: 'Jhon',
    Age: 24,
    person: true,
}

console.log(person)


// Exercise 2: Basic Arithmetic
// Create variables to store two numbers. Perform addition, subtraction,
// multiplication, and division operations on these numbers and log the results.

function twoNumbers(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return "Invalid operator";
    }
}
const solver = twoNumbers(10, 30, '+');
const solver2 = twoNumbers(50, 60, '-')
const solver3 = twoNumbers(20, 60, '*')
const solver4 = twoNumbers(90, 60, '/')
console.log(solver); 
console.log(solver2); 
console.log(solver3); 
console.log(solver4); 


// Exercise 3: Strings and Concatenation
// Create two string variables and concatenate them to form a sentence.
// Log the resulting sentence to the console.

function concat(){
    let str1 = 'I am ';
    let str2 = 'Bob';
    const strstr = str1 + str2;
    
    return strstr;
}

console.log(concat())

// Exercise 4: Arrays
// Create an array of your favorite fruits. Log the first and last elements
// of the array to the console.

let fruits = ['bananas', 'apples', 'mangoes']
let poper = fruits.pop()
let shifteer = fruits.shift()

console.log(shifteer)
console.log(poper)

// Exercise 5: Conditional Statements
// Write a conditional statement (if-else) that checks if a given number
// is even or odd. Log the result to the console.

let nrss = 20

if(nrss == 20){
    console.log(true)
}else{
    console.log(false)
}


// Exercise 6: Loops (for loop)
// Use a for loop to iterate from 1 to 10 and log each number to the console.

for(let i = 0; i < 11; i++){
   console.log(i)
}

// Exercise 7: Functions
// Write a function that takes two numbers as parameters and returns their sum.
// Call the function and log the result.

function ofSum(a,b){
    let sum = a + b;
    return sum
}

const summer = ofSum(10,25)
console.log(summer)

// Exercise 8: Objects
// Create an object representing a person with properties like name, age, and
// address. Log the person's details to the console.

let obj = {
    Name: 'Mark',
    Age: 23,
    Adress: 'St-Patrick-24st.',
}
console.log(obj)

// Exercise 9: Arrays and Loops
// Create an array of numbers and use a loop to calculate the sum of all
// the numbers in the array. Log the result to the console.

function ars(a, b, c, d) {
    let arr = [a, b, c, d];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

const sumOfNumbers = ars(20, 30, 40, 50);
console.log(sumOfNumbers); 



// Exercise 10: Conditional Statements (Switch)
// Write a switch statement that checks the day of the week based on a number
// (1 for Monday, 2 for Tuesday, etc.) and logs the corresponding day.

// Define the numeric value for the day of the week
let Weeks = 1;

switch (Weeks) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid input');
}

// Exercise 11: Working with Strings
// Create a string and use string methods to change its case (upper/lowercase),
// find its length, and log the results.
function forsString(str){
let changer = str.toLowerCase();
let changer2 = str.toUpperCase();
let lenghter = str.length

return [changer, changer2, lenghter]
}

const resulter = forsString('PACMAN')
console.log(resulter)

// Exercise 12: More Functions
// Write a function that takes a string as input and returns the reverse
// of the string. Call the function and log the result.

function reverser(str){
    let reverse = '';
    for(let i = str.length -1; i > 0; i--){
        reverse += str[i]
    }return reverse;
}

const stinger = 'Word';
const resutl = reverser(stinger);
console.log(resutl);


// Exercise 13: Objects and Methods
// Create an object representing a car with properties like make, model,
// and year. Add a method to the object that calculates the age of the car
// based on the current year.

// Exercise 14: Arrays and Filtering
// Create an array of numbers and use array methods to filter out even numbers.
// Log the resulting array.

// Exercise 15: Handling Errors
// Write a function that takes two numbers as input and divides them.
// Handle the case where the denominator is zero by logging an error message.

// Exercise 16: Promises
// Create a promise that simulates an asynchronous operation (e.g., fetching data).
// Handle the promise using `.then()` and `.catch()` to log success or error.

// Exercise 17: DOM Manipulation
// Create an HTML document with a button. Write JavaScript code to add a click
// event listener to the button and log a message when it's clicked.

// Exercise 18: Event Handling
// Create an HTML form with input fields. Write JavaScript code to handle
// form submission and log the form data when submitted.

// Exercise 19: Local Storage
// Use the Local Storage API to store and retrieve data in the browser.
// Create functions to save and retrieve user preferences.

// Exercise 20: AJAX and API Calls
// Make an AJAX request to fetch data from a public API (e.g., JSONPlaceholder).
// Parse the response and log it to the console.

// Feel free to start with any of these exercises and work your way through them.
// Good luck with your JavaScript learning journey!
//-----------------------------------------------------------------------------------------------------------------------------------------