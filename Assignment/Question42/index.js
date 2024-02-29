"use strict";
const magiciansNames = ["Harry Potter", "David Copperfield", "Harmione Granger", "Professor Albus Dumbledore", "Ron Weasley"];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const greatMagicians = magicians.map(magician => `The Great ${magician}`);
    return greatMagicians;
}
const great_Magiciannames = make_great(magiciansNames);
console.log("Original Magicians:");
show_magicians(magiciansNames);
console.log("Great Magicians");
show_magicians(great_Magiciannames);
