const magiciansNames: string[] = ["Harry Potter", "David Copperfield", "Harmione Granger", "Professor Albus Dumbledore","Ron Weasley"];

function show_magicians(magicians: string[]): void 
{
    for (const magician of magicians){
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = magicians.map(magician => `The Great ${magician}`);
    return greatMagicians;
}

const great_Magiciannames: string[] = make_great(magiciansNames);

console.log("Original Magicians:");
show_magicians(magiciansNames);

console.log("Great Magicians");
show_magicians(great_Magiciannames);


