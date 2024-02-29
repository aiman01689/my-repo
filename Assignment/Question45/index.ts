function createCar(manufacturer: string, model: string, ...properties: [string, any][]): any {
    const car: any = {
        manufacturer,
        model,
    };
    for (const [key, value] of properties){
        car[key] = value;
    }
    return car;
}

const myCar: string = createCar("Toyota", "Corola", ["color", "red"],["optionalFeatures", "sunroof"],["speed", "280 KM/h"]);

console.log(myCar);