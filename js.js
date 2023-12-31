"use strict";

// Exercițiul 1: Afișați un mesaj în consolă
console.log("Hello Wolrd");
// Exercițiul 2: Declarați o variabilă și afișați valoarea sa
const tom = 24;
console.log(tom);
// Exercițiul 3: Utilizați operatori aritmetici
function numeros(a, b) {
  return a + b;
}

const rez = numeros(12, 20);
console.log(rez);
// Exercițiul 4: Utilizați structura de control IF
const jhon = 24;
const max = 23;

if (jhon > max) {
  console.log("Jhon is bigger");
} else {
  console.log("max is bigger");
}
// Exercițiul 5: Utilizați o buclă FOR pentru a afișa numere
function numbers(nr) {
  nr = [1, 2, 3, 4, 5, 6, 7];
  for (let i = 0; i < nr.length; i++) {
    console.log(nr[i]);
  }
}
numbers();

//-----------------------------------------------------------------------------------------------------------------------------------------
// Exercise 1: Variables and Data Types
// Create variables for storing a name, an age, and a boolean value.
// Assign values to these variables and log them to the console.

let person = {
  Name: "Jhon",
  Age: 24,
  person: true,
};

console.log(person);

// Exercise 2: Basic Arithmetic
// Create variables to store two numbers. Perform addition, subtraction,
// multiplication, and division operations on these numbers and log the results.

function twoNumbers(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "Invalid operator";
  }
}
const solver = twoNumbers(10, 30, "+");
const solver2 = twoNumbers(50, 60, "-");
const solver3 = twoNumbers(20, 60, "*");
const solver4 = twoNumbers(90, 60, "/");
console.log(solver);
console.log(solver2);
console.log(solver3);
console.log(solver4);

// Exercise 3: Strings and Concatenation
// Create two string variables and concatenate them to form a sentence.
// Log the resulting sentence to the console.

function concat() {
  let str1 = "I am ";
  let str2 = "Bob";
  const strstr = str1 + str2;

  return strstr;
}

console.log(concat());

// Exercise 4: Arrays
// Create an array of your favorite fruits. Log the first and last elements
// of the array to the console.

let fruits = ["bananas", "apples", "mangoes"];
let poper = fruits.pop();
let shifteer = fruits.shift();

console.log(shifteer);
console.log(poper);

// Exercise 5: Conditional Statements
// Write a conditional statement (if-else) that checks if a given number
// is even or odd. Log the result to the console.

let nrss = 20;

if (nrss == 20) {
  console.log(true);
} else {
  console.log(false);
}

// Exercise 6: Loops (for loop)
// Use a for loop to iterate from 1 to 10 and log each number to the console.

for (let i = 0; i < 11; i++) {
  console.log(i);
}

// Exercise 7: Functions
// Write a function that takes two numbers as parameters and returns their sum.
// Call the function and log the result.

function ofSum(a, b) {
  let sum = a + b;
  return sum;
}

const summer = ofSum(10, 25);
console.log(summer);

// Exercise 8: Objects
// Create an object representing a person with properties like name, age, and
// address. Log the person's details to the console.

let obj = {
  Name: "Mark",
  Age: 23,
  Adress: "St-Patrick-24st.",
};
console.log(obj);

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
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid input");
}

// Exercise 11: Working with Strings
// Create a string and use string methods to change its case (upper/lowercase),
// find its length, and log the results.
function forsString(str) {
  let changer = str.toLowerCase();
  let changer2 = str.toUpperCase();
  let lenghter = str.length;

  return [changer, changer2, lenghter];
}

const resulter = forsString("PACMAN");
console.log(resulter);

// Exercise 12: More Functions
// Write a function that takes a string as input and returns the reverse
// of the string. Call the function and log the result.

function reverser(str) {
  let reverse = "";
  for (let i = str.length - 1; i > 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

const stinger = "Word";
const resutl = reverser(stinger);
console.log(resutl);

// Exercise 13: Objects and Methods
// Create an object representing a car with properties like make, model,
// and year. Add a method to the object that calculates the age of the car
// based on the current year.

let carobj = {
  make: "Dacia",
  model: "Logan",
  year: 2007,

  dater: function () {
    let nwedate = new Date().getFullYear();
    let apply = nwedate - this.year;
    return apply;
  },
};
const all = carobj.dater();
console.log(`This car is ${all} yaer old`);

// Exercise 14: Arrays and Filtering
// Create an array of numbers and use array methods to filter out even numbers.
// Log the resulting array.

const arrnr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0);

const resultss = filterEvenNumbers(arrnr);
console.log(resultss);

// Exercise 15: Handling Errors
// Write a function that takes two numbers as input and divides them.
// Handle the case where the denominator is zero by logging an error message.

function numbersz(a, b) {
  if (a === 0) {
    return undefined;
  } else {
    return a / b;
  }
}

const result1 = numbersz(60, 30);
console.log("Rezultat1:", result1);

const result2 = numbersz(0, 9);
console.log("Rezultat2:", result2);

// Exercise 16: Promises
// Create a promise that simulates an asynchronous operation (e.g., fetching data).
// Handle the promise using `.then()` and `.catch()` to log success or error.

// Create a function that returns a promise simulating an asynchronous operation

function simulateAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.random();
      if (randomNum >= 0.5) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error: Failed to fetch data.");
      }
    }, 1000);
  });
}

simulateAsyncOperation()
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// let p = new Promise((resolve, reject) => {
//     let nr = 10 + 20;

//     if (nr === 20) {
//       resolve('Success');
//     } else {
//       reject('ERROR');
//     }
//   });

//   p.then((response) => {
//     console.log('Response 1: ' + response);
//   }).catch((error) => {
//     console.error('Response 2: ' + error);
//   });

// Exercise 17: DOM Manipulation
// Create an HTML document with a button. Write JavaScript code to add a click
// event listener to the button and log a message when it's clicked.

const bt = document.querySelector("button");
bt.addEventListener("click", () => {
  !alert("Welcome");
});

// Exercise 18: Event Handling
// Create an HTML form with input fields. Write JavaScript code to handle
// form submission and log the form data when submitted.

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  console.log(formDataObject);
});

// Exercise 19: Local Storage
// Use the Local Storage API to store and retrieve data in the browser.
// Create functions to save and retrieve user preferences. ---------------------------------------------INVATA LOCAL STORAGE SI AJAX

function saveUserPreferences(key, value) {
  if (typeof Storage !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
    console.log(`User preference for ${key} saved successfully.`);
  } else {
    console.log("Local Storage is not supported by this browser.");
  }
}

function getUserPreferences(key) {
  if (typeof Storage !== "undefined") {
    const value = localStorage.getItem(key);

    if (value !== null) {
      return JSON.parse(value);
    } else {
      console.log(`No user preference found for ${key}.`);
      return null;
    }
  } else {
    console.log("Local Storage is not supportedd by this browser.");
    return null;
  }
}

const user = {
  name: "John",
  email: "john@example.com",
  theme: "dark",
};

saveUserPreferences("user", user);

const savedUser = getUserPreferences("user");
if (savedUser) {
  console.log("User Name:", savedUser.name);
  console.log("User Email:", savedUser.email);
  console.log("User Theme:", savedUser.theme);
}

// Exercise 20: AJAX and API Calls
// Make an AJAX request to fetch data from a public API (e.g., JSONPlaceholder).
// Parse the response and log it to the console.

// Function to make an AJAX request
function makeAjaxRequest(url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // Parse the JSON response
        const response = JSON.parse(xhr.responseText);
        callback(null, response);
      } else {
        callback(`Error: ${xhr.status} - ${xhr.statusText}`, null);
      }
    }
  };

  xhr.open("GET", url, true);
  xhr.send();
}

// Example usage: Fetch data from a JSON API
const apiUrl = "https://jsonplaceholder.typicode.com/posts/1"; // Replace with the API endpoint you want to use

makeAjaxRequest(apiUrl, function (error, data) {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Response:", data);
    // You can work with the data here
  }
});

// Feel free to start with any of these exercises and work your way through them.
// Good luck with your JavaScript learning journey!
//-----------------------------------------------------------------------------------------------------------------------------------------

// Exercise 1: Reverse a String

// Function to reverse a string
function reversrrr(e) {
  let z = "";

  for (let i = e.length - 1; i >= 0; i--) {
    z += e[i];
  }

  return z;
}

const resulterrr = reversrrr("Jirrr");
console.log(resulterrr); // Output: 'rrriJ'

// Function to reverse another string
function rev2(m) {
  let s = "";

  for (let i = m.length - 1; i >= 0; i--) {
    s += m[i];
  }

  return s;
}

const fz = rev2("MOP");
console.log(fz); // Output: 'POM'

// Exercise 2: Factorial Calculator

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Test the factorial function
const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is ${result}`);

// Exercise 3: Palindrome Checker

function palindroms(str) {
  str = str.toLowerCase().replace(/ /g, "");

  return str === str.split("").reverse().join("");
}
console.log(palindroms("Mustafa"));
console.log(palindroms("War is ending"));
console.log(palindroms("racecar"));
console.log(palindroms("A man a plan a canal Panama"));
console.log(palindroms("hello"));
console.log(palindroms("HHH"));

// Exercise 4: Fibonacci Sequence
function generateFibonacci(n) {
  const scx = [0, 1];
  for (let i = 2; i < n; i++) {
    scx[i] = scx[i - 1] + scx[i - 2];
  }
  return scx;
}

console.log(generateFibonacci(2));
console.log(generateFibonacci(3));
console.log(generateFibonacci(4));
console.log(generateFibonacci(5));
console.log(generateFibonacci(6));
console.log(generateFibonacci(7));

// Exercise 5: Find the Longest Word
function findTheLongestWord(wordsArray) {
  let longest = "";

  for (let word of wordsArray) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

const wordsArray = ["apple", "banana", "cherry", "date", "elderberry"];

const longestWord = findTheLongestWord(wordsArray);
console.log("The longest word is:", longestWord);

// Exercise 6: FizzBuzz

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);

// Exercise 7: Array Manipulation
function arrayMan(arr) {
  let rzc = arr.map((e) => e * 2);
  arr.length = 0;
  return rzc;
}

let arrizz = [1, 2, 3, 4, 5, 6, 7];
let zzc = arrayMan(arrizz);
console.log(zzc);

// Exercise 8: Find Prime Numbers
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

function findPrimesInRange(start, end) {
  const primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

const primeNumbers = findPrimesInRange(1, 50); // Change the range as needed
console.log("Prime numbers:", primeNumbers);

// Exercise 9: Anagram Checker
function areAnagrams(str1, str2) {
  const cleanStr1 = str1.replace(/[^\w]/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/[^\w]/g, "").toLowerCase();

  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  const sortedStr1 = cleanStr1.split("").sort().join("");
  const sortedStr2 = cleanStr2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

const word1 = "listen";
const word2 = "silent";
const areTheyAnagrams = areAnagrams(word1, word2);
console.log("Are they anagrams?", areTheyAnagrams);

// Exercise 10: Object Manipulation
// Example object
const persons = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

persons.email = "john.doe@example.com";

persons.age = 31;

delete persons.email;

for (const key in persons) {
  if (person.hasOwnProperty(key)) {
    console.log(`${key}: ${person[key]}`);
  }
}

////////////////////////////////////////////////
function createPyramid(height) {
  for (let i = 1; i <= height; i++) {
    let row = "";

    for (let j = 1; j <= height - i; j++) {
      row += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "*";
    }

    console.log(row);
  }
}
const pyramidHeight = 5;
createPyramid(pyramidHeight);

function pira(pir) {
  for (let i = 1; i <= pir; i++) {
    let ig = "";
    //before stars
    for (let j = 1; j <= pir - i; j++) {
      ig += " ";
    } //stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      ig += "*";
    }
    console.log(ig);
  }
}

const resulttt = 10;
pira(resulttt);

function thirdPyr(pirs) {
  for (let i = 1; i <= pirs; i++) {
    let str = "";
    for (let j = 0; j < pirs - i; j++) {
      str += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      str += "*";
    }
    console.log(str);
  }
}

const nrmbstsofpir = 5;
thirdPyr(nrmbstsofpir);

function pirsz(height) {
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= height - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "|";
    }

    console.log(row);
  }
}

const piramidaInaltime = 5;
pirsz(piramidaInaltime);

const mas = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = mas.length; i > -1; i--) {
  console.log(mas[i]);
}

//-------------------------------------------------
const doss = ["ramon", "maon", "jbeng"];
const results = doss.map((item) => {
  return item.toLocaleUpperCase();
});

console.log(results);

//arrow
//simpletipcalc

const totalCost = 305;
const tip =
  totalCost >= 300 && totalCost < 50 ? totalCost * 0.15 : totalCost * 0.2;

const rzzz = `Your cost is $${totalCost}, your tip is $${tip}, and total total cost is $${
  totalCost + tip
}`;
console.log(rzzz);
//-----------------------------------------------------

function verificarePare(nr) {
  if (typeof nr !== "number") {
    return "Va rugam sa introduceti un numar valid";
  }

  if (nr % 2 === 0) {
    return `Numarul ${nr} este par`;
  } else {
    return `Numarul ${nr} este impare`;
  }
}

console.log(verificarePare(4));
console.log(verificarePare(5));
console.log(verificarePare(8));

let lister = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let rzx = lister.map((e) => {
  return verificarePare(e);
});
console.log(rzx);
//----------------------------------------------------
const gos = 50;
console.log(gos + 40); //testForNewExtension

const cars = [
  { name: "Dacia", year: 2004, category: "Old" },
  { name: "Mazda", year: 2007, category: "Old" },
  { name: "Other", year: 2001, category: "Old" },
  { name: "JIP", year: 2009, category: "Old" },
  { name: "AUDI", year: 2004, category: "Old" },
  { name: "BMW", year: 2008, category: "Old" },
  { name: "Mustang", year: 2002, category: "Old" },
  { name: "AUDI", year: 2017, category: "NEW" },
];

const filtru = cars.filter((car) => car.name.toLowerCase() === "audi");
console.table(filtru);

const yearsSquared = cars.map((car) => car.year * 2);
console.log(yearsSquared);

function reversr() {
  for (let i = cars.length - 1; i >= 0; i--) {
    console.log(cars[i]);
  }
}
const rezsx = reversr(cars);
console.log(rezsx);

function itr(e) {
  for (let i = 0; i <= e.length; i++) {
    console.table(e[i]);
  }
}

const nnnn = itr(cars);
console.table(nnnn);

for (let i = 0; i < 50; i++) {
  console.log([i]);
}

const rrqe = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mnm = rrqe.map((i) => {
  if (i % 2 == 0) {
    return "odd";
  } else {
    return "even";
  }
});
console.log(mnm);

//GOLF-GAME

function golf(strokes, par) {
  if (strokes === 1) {
    return "Hole-in-One!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes === par - 1) {
    return "Birdie";
  } else if (strokes === par) {
    return "Par";
  } else if (strokes === par + 2) {
    return "Double Bogey";
  } else if (strokes === par + 1) {
    return "Bogey";
  } else {
    return "Go Home!";
  }
}
let golfer = golf(6, 3);
console.log(golfer);

function justFor(...args) {
  let arr = [];

  for (let i = 0; i < args.length; i++) {
    arr.push(args[i]);
  }

  return arr;
}

let mosroroew = justFor(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(mosroroew);
//--------------------------------------------------------

function newWer(...args) {
  let arr = [];

  for (let i = args.length - 1; i >= 0; i--) {
    arr.push(args[i]);
  }

  return arr;
}

let kkkz = newWer(1, 2, 3, 4, 5, 6, 7, 8, 10);
console.log(kkkz);

//------------------------------------------------------------

function again(...b) {
  let arr = [];

  for (let i = b.length - 1; i >= 0; i--) {
    arr.push(b[i]);
  }
  return arr;
}
let nnmm = again(1, 2, 3, 4, 5, 6, 7, 8, 10,11);
console.log(nnmm);

function keepLeanringYouSlowBrain(...m) {
  let z = [];

  for (let i = m.length - 1; i >= 0; i--) {
    z.push(m[i]);
  }
  return z;
}

let nmvbn = keepLeanringYouSlowBrain(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);
console.log(nmvbn);
//-p-------------------------------------------------------------------------

function isMuchBetter(...decrementagain) {
  let n = [];

  for (let i = decrementagain.length - 1; i >= 0; i--) {
    n.push(decrementagain[i]);
  }
  return n;
}

let nm = isMuchBetter(1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12);
console.log(nm);

//check if number  = odd

function odder(a) {
  let res = [];

  for (let i = 0; i < a.length; i++) {
    if ([i] % 2 == 0) {
      res.push("Even");
    } else {
      res.push("Odd");
    }
  }
  return res;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let rszz = odder(arr);
console.log(rszz);

function odder(a) {
  return a.map((index) => (index % 2 === 0 ? "even" : "odd"));
}

let arrz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let rszzz = odder(arrz);
console.log(rszzz);

//------------------------------------------------------------------

function notherodder(b) {
  return b.map((n) => (n % 2 === 0 ? "even" : "odd"));
}

let arrr = [
  24, 21, 43, 25, 25, 46, 5, 46, 34, 523, 432, 34, 1, 4, 25, 436, 54, 75, 245,
  33, 22, 44, 66,
];
let skzsxd = notherodder(arrr);
console.log(skzsxd);

arrr.forEach((element) => console.log(typeof element));
arrr.forEach((nr, index) => {
  arrr[index] = `${nr} (${typeof nr})`;
});

console.log(arrr);

// Iterarea printr-un șir de numere:

// Creați un șir de numere de la 1 la 10 și utilizați o buclă for pentru a le parcurge și a le afișa în consolă.
// Suma elementelor dintr-un șir:
function loop(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

let shir = loop(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Creați un șir de numere și utilizați o buclă for pentru a calcula suma tuturor elementelor din șir.
// Filtrarea elementelor dintr-un șir:
function calculateSum(...n) {
  let sum = 0;

  for (let i = 0; i < n.length; i++) {
    sum += n[i];
  }

  return sum;
}

let numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50];
let totalSum = calculateSum(...numberss);
console.log(totalSum);

// Creați un șir de numere și utilizați o buclă for pentru a filtra toate numerele pare într-un alt șir.
// Găsirea celui mai mare element:

function prz(...n) {
  let j = [];

  for (let i = 0; i < n.length; i++) {
    if (i % 2 == 0) {
      j.push("Even");
    } else {
      j.push("Odd");
    }
  }

  return j;
}

let z = prz(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(z);

// Creați un șir de numere și utilizați o buclă for pentru a găsi cel mai mare număr din șir.
// Iterarea prin proprietățile unui obiect:

// Creați un obiect cu mai multe proprietăți și utilizați o buclă for...in pentru a parcurge proprietățile și a le afișa în consolă.
// Iterarea prin elementele unui șir folosind forEach:

// Creați un șir de cuvinte și utilizați metoda forEach pentru a parcurge elementele și a le afișa în consolă.
// Folosirea map pentru a modifica un șir:

// Creați un șir de numere și utilizați metoda map pentru a crea un nou șir în care fiecare număr este dublat.
// Iterarea cu ajutorul while loop:

// Folosiți un while loop pentru a număra în ordine inversă de la 10 la 1 și a afișa numerele în consolă.
// Iterarea prin șiruri multidimensionale:

// Creați o matrice (un șir de șiruri) și utilizați bucle pentru a parcurge toate elementele din matrice.
// Iterarea recursivă:

// Creați o funcție recursivă care parcurge o structură de date în formă de arbore și afișează fiecare nod.
// Aceste exerciții acoperă diverse aspecte ale iterațiilor în JavaScript și te vor ajuta să dobândești experiență practică în utilizarea buclelor for, while, forEach, precum și a metodelor de șiruri precum map și filter.

function poperr(l) {
  let k = [];
  for (let i = 0; i < l.length; i++) {
    k.push(l[i]);
  }
  return k;
}

const fruitss = poperr(["Apple", "Banana", "Watermelon", "Orange"]);
const index = prompt("Introdu un index pentru a selecta un fruct:");

if (index >= 0 && index < fruitss.length) {
  const chosenFruit = fruitss[index];
  alert(`Ai ales: ${chosenFruit}`);
} else {
  alert("Indexul introdus nu este valid.");
}
