let favoriteTransportation: Array<[transport: string, brand: string]>= []

favoriteTransportation.push(["motorcycle", "Suzuki"])
favoriteTransportation.push(["Car", "Honda"])

favoriteTransportation.forEach(([transport, brand]) => {console.log(`I go to work using  ${brand} ${transport}`)})