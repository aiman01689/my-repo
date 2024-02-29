"use strict";
function createCar(manufacturer, model, ...properties) {
    const car = {
        manufacturer,
        model,
    };
    for (const [key, value] of properties) {
        car[key] = value;
    }
    return car;
}
const myCar = createCar("Toyota", "Corola", ["color", "red"], ["optionalFeatures", "sunroof"], ["speed", "280 KM/h"]);
console.log(myCar);
