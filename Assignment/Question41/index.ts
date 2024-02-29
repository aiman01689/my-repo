const magiciansNames: string[] = ["Harry Potter", "David Copperfield", "Harmione Granger", "Professor Albus Dumbledore","Ron Weasley"];

function show_magicians(magicians: string[]): void 
{
    for (const items of magicians){
        console.log(items);
    }
}

show_magicians(magiciansNames);