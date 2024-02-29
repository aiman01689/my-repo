"use strict";
//locations in a array. Make sure the array is in original order.
let locations = ["Saudi Arabia", "Istanbul", "Doha", "Manchester", "London"];
console.log("Original order:");
console.log(locations);
//Print your array in alphabetical order
console.log("Alphabetical order without modifying the actual list.");
console.log([...locations].sort());
//Show that your array is still in its original order by printing it.
console.log("Showing that array is still in its original order by printing it.");
console.log(locations);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical order without changing the order of the original list.");
console.log([...locations].reverse());
//Show that your array is still in its original order by printing it.
console.log("Showing that array is still in its original order by printing it again.");
console.log(locations);
// Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse Order");
locations.reverse();
console.log(locations);
// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("back to its original order");
locations.reverse();
console.log(locations);
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("stored in alphabetical order");
locations.sort();
console.log(locations);
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("stored in reverse alphabetical order");
locations.reverse();
console.log(locations);
