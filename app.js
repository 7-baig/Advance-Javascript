// OBJECT.FREEZE
// Once the object is frozen, you can no longer add, update, or delete properties from it. Any // attempt at changing the object will be rejected without an error.

// DEFAULT PARAMETERS IN FUNCTIONS
// const greeting = (name = "Anonymous") => "Hello " + name;
//
// console.log(greeting("John")); // Hello John
// console.log(greeting()); // Hello Anonymous


// ARRAY FILTER
// const ages = [10, 20, 30, 31, 32, 33, 34, 35];

// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// ===========================================
// ========== FILTER PRACTICE ==================
// ==============================================================

// const companies = [
//     {name: "apple", category: "technology", start: 1985, end: 1990},
//     {name: "mango", category: "food", start: 1980, end: 2000},
//     {name: "banana", category: "food", start: 1950, end: 2030},
//     {name: "franco", category: "retail", start: 1990, end: 2010},
//     {name: "tesla", category: "auto", start: 1975, end: 2015},
// ];
// // GET COMPANIES THAT HAS THE CATEGORY OF FOOD
// const foodCompanies = companies.filter(company => company.category === "food")
// console.log(foodCompanies);
// // GET COMPANIES FROM 80s
// const eighteesCompanies = companies.filter(year => year.start >= 1980 && year.start <= 1990)
// console.log(eighteesCompanies);
// // GET COMPANIES THAT HAVE LASTED 10 YEARS
// const periodCompanies = companies.filter(period => period.end - period.start < 10);
// console.log(periodCompanies);

// ===============================================================
// ========================== MAP =================================
// =================================================================

// const companies = [
//     {name: "apple", category: "technology", start: 1985, end: 1990},
//     {name: "mango", category: "food", start: 1980, end: 2000},
//     {name: "banana", category: "food", start: 1950, end: 2030},
//     {name: "franco", category: "retail", start: 1990, end: 2010},
//     {name: "tesla", category: "auto", start: 1975, end: 2015},
// ];
// const tenure = companies.map(age => (age.name + age.start + "-" + age.end))
// console.log(tenure);

// ===============================================================
// ========================== SORT =================================
// =================================================================
// const companies = [
// {name: "apple", category: "technology", start: 1985, end: 1990},
// {name: "mango", category: "food", start: 1980, end: 2000},
// {name: "banana", category: "food", start: 1950, end: 2030},
// {name: "franco", category: "retail", start: 1990, end: 2010},
// {name: "tesla", category: "auto", start: 1975, end: 2015},
// ];
// const sortedCompanies = companies.sort((c1, c2) => (c1.start > c2.start) ? 1 : -1);
// console.log(sortedCompanies);
// ===============================================================
// ========================== REDUCE =================================
// =================================================================
// array.reduce( function(total, currentValue, currentIndex, arr), initialValue )

// const ages = [2, 5, 15, 35, 2, 10, 60, 33, 55, 22, 27, 13, 50];
// let ageSumm = 0;
// for (i=0; i < ages.length; i++) {
//     ageSumm += ages[i];
// }
// console.log(ageSumm);

// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// ==========================================================================
//================== SPREAD OPERATOR =================================
// =======================================================================
// https://flaviocopes.com/javascript-rest-spread/
// https://medium.com/@luke_smaki/javascript-es6-spread-operator-and-rest-parameters-b3e89d112281

// // add an elements of an existing array into a new array
// let citiesToAdd = ["karachi", "lahore", "new york"];
// let cities = ["multan", "gujrat", "islamabad", ...citiesToAdd, "boston"];
// console.log(cities);
// // PASS ELEMENTS OF AN ARRAY AS ARGUMENTS TO A FUNCTION  


// ==========================================================================
//================== REST  =================================
// =======================================================================


// const sum = (...args) => {
//     return args.reduce((a, b) => a + b, 0);
//   }
//   console.log(sum(1, 2, 3)); // 6
  

// ==========================================================================
//================== DESTRUCTURING ASSIGNMENT =================================
// =======================================================================

// const bio = {
//     name: 'saad',
//     age: 19,
//     hobby: 'programming',
// }
// const {name, age} = bio;
// console.log(name);

// Use Destructuring Assignment to Assign Variables from Objects

// const bio = {
//     name: 'saad',
//     age: 19,
//     hobby: 'programming',
// }
// const {name: personName, age: personAge} = bio;
// console.log(personAge);

// Use Destructuring Assignment to Assign Variables from Nested Objects

// const bio = {
//     saad: {
//         age: 19,
//         email: 'saadbaig7777@gmail.com'
//     },
//     john: {
//         age: 20,
//         email: 'johnnyutah97@gmail.com'
//     }
// }
// const {saad: {age, email}} = bio;
// const {john: {name: personName, email: personEmail}} = bio;
// console.log(age, personEmail); 

// Use Destructuring Assignment to Assign Variables from Arrays

// let a = 8, b = 6;
// [a, b] = [b, a];
// console.log(a, b);

// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function removeFirstTwo(list) {
//   "use strict";
//   // change code below this line
//   const [a, b, ...arr] = list;
//   // change code above this line
//   return arr;
// }
// const arr = removeFirstTwo(source);
// console.log(arr); // should be [3,4,5,6,7,8,9,10]
// console.log(source);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [saadLuckyNo,,,,,, ayeshaLuckyNo] = numbers;
// console.log(ayeshaLuckyNo);

// // Use Destructuring Assignment to Pass an Object as a Function's Parameters
// const profileData = {
//     name: 'saad',
//     age: 19,
//     nationality: 'pakistani',
//     location: 'karachi'
// }
// const bio = {
//     name: 'saadi',
//     age: 20,
//     nationality: 'pakistani',
//     location: 'karachi'
// }
// // const profileUpdate = (xyz) => {
// //     const { name, age, nationality, location } = xyz; 
// //     // do something with these variables
// //     console.log(name, age); 
// // }
// // profileUpdate(bio);

// const myFunction = ({name, age, nationality, location}) => {
//         console.log(name);
// }
// myFunction(bio)

// const stats = {
//     max: 56.78,
//     standard_deviation: 4.34,
//     median: 34.54,
//     mode: 23.87,
//     min: -0.75,
//     average: 35.85
//   };
  
//   // use function argument destructuring
//   // change code below this line
//   const half = ({max, min}) => (max + min) / 2.0; 
//   // change code above this line
  
//   console.log(stats); // should be object
//   console.log(half(stats)); // should be 28.015
  
// // ========================================================
// // ======== TEMPLATE LITERALS =============================
// // ========================================================

// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["id-blacklist", "no-dup-keys"]
//   };
//   function makeList(arr) {
//     "use strict";
  
//   const resultDisplayArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
//   }
//     return resultDisplayArray;
//   }
  
//   const resultDisplayArray = makeList(result.failure);
  // // // // SHORT METHOD
// function makeList(arr) {
//     "use strict";
//     const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`)
//     return resultDisplayArray;
// }
// const resultDisplayArray = makeList(result.failure);
// console.log(resultDisplayArray);

// ==========================================
// ================ CLASSES ======================
// ===================================================
// https://medium.com/@luke_smaki/javascript-es6-classes-8a34b0a6720a

// function User(name, age, nationality) {
//   this.name = name;
//   this.age = age;
//   this.nationality = nationality;
// }
// const saad = new User('saad', 19, 'pakistani');
// console.log(saad);
// Now we have a template for each user object. 
// The User function is an example of a constructor. 
// A constructor is a function that is called each time 
// an object is created (also referred to as instantiated). 
// The User constructor creates the properties of the object 
// (this.name, this.age, this.email) and assigns them the value 
// of the parameters passed to it (name, age, email).

// CLASS 
// an instance means a reference to an Object created by 'new'.
// class User {
//   constructor(name, age, email) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
//   }
// }
// const john = new User ('john cena', 42, 'johncena10@wwe.com');


// class User {
//   constructor(name, age, email) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
//   }
//   increaseAge() {
//     this.age += 1;  
//   }
// }
// const john = new User ('john cena', 42, 'johncena10@wwe.com');
// console.log(john);
// john.increaseAge();
// console.log(john);

// // STATIC METHOD //
// class User {
//   constructor(name, age, email) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
//   }
//   increaseAge() {
//     this.age += 1;  
//   }
//   static staticMethod() {
//     console.log('I am a static method');
//   }
// }
// const john = new User ('john cena', 42, 'johncena10@wwe.com');
// console.log(john);
// john.increaseAge();
// User.staticMethod();

// // GETTER SETTER // // 
/////////////////////////////////
// class Thermostat {
//   constructor(fahrenheit) {
//       this.fahrenheit = fahrenheit;
//   }
// get temperature() {
//   return (5 / 9) * (this.fahrenheit - 32);
// }

// set temperature(celsius) {
//   this.fahrenheit = (celsius * 9.0) / 5 + 32;
// }
// }
// const thermos = new Thermostat(76); // setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in C
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in C

// // ===========  MODULES ================= // //
// ============================================== //
// A module is nothing more than a chunk of JavaScript code written in a file.
// The functions or variables in a module are not available for use, unless the 
// module file exports them.

// export {variable1, variable2};
// import {variable1, variable2} from './math_functions.js';

// // =============== PROMISE ================= // //
//  Promise is a constructor function, so you need to use the new keyword 
// to create one. It takes a function, as its argument, with two 
// parameters - resolve and reject. These are methods used to determine 
// the outcome of the promise. The syntax looks like this:
// const myPromise = new Promise((resolve, reject) => {
// });
