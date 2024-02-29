"use strict";
const bouquet = {
    name: "Spring Delights",
    price: 250,
    description: "beautiful arrangement of spring flowers"
};
let bouquets = [];
bouquets.push(bouquet);
bouquets.push({
    name: "Summer Bliss",
    price: 350,
    description: "beautiful arrangement of summer flowers"
});
let boquet3 = {
    name: "Sun Flowers",
    price: 300,
    description: "beautiful arrangement of Sun Flowers"
};
bouquets.push(bouquet);
console.log(bouquets);
bouquets.push({
    name: "Freshness",
    price: 350,
    description: "beautiful arrangement of white and yellow roses"
});
console.log(bouquets);
function displayBouquets(bouquets) {
    for (let i of bouquets) {
        console.log(`
        title: ${i.name}
        price: ${i.price}
        description: ${i.description}
        ____________________\n`);
    }
}
;
displayBouquets(bouquets);
