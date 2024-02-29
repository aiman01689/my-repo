"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createFruit(name, color, taste) {
    return {
        name,
        color,
        taste,
    };
}
const fruits = [
    createFruit("Apple", "Red", "Sweet"),
    createFruit("Banana", "Yellow", "Sweet"),
    createFruit("Orange", "Orange", "Citrusy"),
    createFruit("Grapes", "Purple/Greem", "Sweet"),
    createFruit("Strawberry", "Red", "Sweet"),
];
const invalidIndex = 10;
console.log(`Fruits at index ${invalidIndex}:`, fruits[invalidIndex]);
fruits.forEach((fruit) => {
    console.log(`Name: ${fruit.name}, Color: ${fruit.color}, Taste: ${fruit.taste}`);
});
