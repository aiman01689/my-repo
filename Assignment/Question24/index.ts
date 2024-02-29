//Tests for equality and inequality with strings
const str1: string = "Hello";
const str2: string = "hello";
console.log(str1 === str2); //false
console.log(str1 !== str2); //true
//Tests using the lower case function 
const str01 = "Hello"
const str02 = "hello"
console.log(str01.toLowerCase() === str02);//true
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1: number = 10;
const num2: number = 5;

console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

//Tests using "and" and "or" operators
const x: number = 5;
const y: number = 10;
const z: number = 15;

console.log(x < y && x < y);
console.log(x < y || x > y);
console.log(x > y && x < y);
console.log(x > y || x > y);

//Test whether an item is in a array
const fruits: string[] =["apple", "banana", "Orange", "Watermelon"];

console.log(fruits.includes(`banana`));  //True 
console.log(fruits.includes(`Strawberry`));  //False

// Test whether an item is not in a array
const color: string[] =["red", "yellow", "Orange", "Green"];

console.log(!color.includes(`purple`));  //True 
console.log(!color.includes(`red`)); //false