function makeSandwich(...items: string[]):void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich please add some items");
    }else {
        items.forEach((item, index) => {
            console.log(` ${index + 1}. ${item}`);
        });
    }
    console.log("\n");
}

makeSandwich();
makeSandwich("Turkey", "Lettuce", "Tomato", "Mayonaise");
makeSandwich("Ham", "Cheese");
makeSandwich("Peanut Butter", "Jelly", "Honey");