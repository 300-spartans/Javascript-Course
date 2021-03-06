/*************************
* Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = "Smith";
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;
/


/***********************
* Variable mutation and type coercion


var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' is ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + 'is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job - 'driver';

alert(firstName + 'is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);





/**********************************
* Basic Operators

var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark= 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical Operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);


// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/




/********************************
* Operator precedence


var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;  // 8 * 4 - 6 // 32 - 6 // 32 - 6 // 26
console.log(x, y);


// More Operators
// x = x * 2;
x *= 2;
console.log(x);
x += 10;
console.log(x);
x ++;
console.log(x);
*/


/*********************************
* Coding Challenge


var massMark = prompt("What is Mark's weight in kg?");
var massJohn = prompt("What is John's weight in kg?");
var heightMark = prompt("What is Mark's height in m?");
var heightJohn = prompt("What is John's height in m?");

var markBMI = massMark / (heightMark * heightMark);
var johnBMI = massJohn > (heightJohn * heightJohn);

var isMarkhigher = markBMI > johnBMI;

console.log("Is Mark's BMI higher than John's? " + isMarkhigher);


*/

/*********************************************
* If / else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}
*/


/*

var massMark = 78;    // kg
var heightMark = 1.69;  // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log('Mark\'s BMI is higher than John\'s.');
} else {
  console.log('John\'s BMI is higher than Mark\'s.');
}

// var markHigherBMI = BMIMark > BMIJohn;
//console.log('Is Mark\s BMI higher than John\s? ' + markHigherBMI);

*/



/*****************************
* Boolean Logic
*/

var firstName = 'John';
var age = 20;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man.');
} else {
  console.log(firstName + ' is a man.');
}
